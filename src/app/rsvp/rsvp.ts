import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AppService } from '../app.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { RippleDirective } from "../directive/ripple.directive"; // [1] Import the directive
import { PartyDTO } from '../model/PartyDTO';
import { GuestDTO } from '../model/GuestDTO';
import { Router } from '@angular/router';

@Component({
    selector: 'app-rsvp',
    imports: [FontAwesomeModule, FormsModule, NgClass, RippleDirective, CommonModule],
    templateUrl: './rsvp.html',
    styleUrl: './rsvp.scss',
})
export class Rsvp {
    private cdr = inject(ChangeDetectorRef);

    isNaN = Number.isNaN

    fullName: string = '';
    feedbackMessage: string = "Provide your full name";
    faMagGlass = faMagnifyingGlass;
    isValid: boolean = true; 
    parties: PartyDTO[] = []; 
    idParty : number = NaN; 
    guests: GuestDTO[] = [];

    constructor(private appService: AppService, private router: Router){
    }

    ngOnInit(){

    }

    onSearch(){
        const words = this.fullName.split(/\s+/);
        if(words.length == 2 && words[1] != ""){
            this.isValid = true;
            this.appService.nameSearch(words[0], words[1]).subscribe(res=>{
                if(res)
                    this.parties = res;

                    if(this.parties.length == 0){
                        console.log("here")
                        this.feedbackMessage = "Name Not Found"
                        this.isValid = false;
                    }
                    this.cdr.detectChanges(); 
                //console.log(res)
            });

        }else if(words.length >2){
            this.feedbackMessage = "Please include only your first and last name";
            this.isValid = false;

        }else{
            this.feedbackMessage = "Please include both your first and last name"
            this.isValid = false;
        }
    }
    
    onSearchAgain(){
        this.idParty = NaN;
        this.parties = [];
        this.fullName = '';
    }

    onConfirm(){
        this.appService.getGuests(this.idParty).subscribe(res =>{
            this.guests = res;
            this.cdr.detectChanges();
        })    
    }

    onSave(){
        this.appService.saveGuests(this.guests).subscribe(res =>{
            console.log(res)
            if(res){
                this.router.navigate(['/home'])
            }
        });
    }

}
