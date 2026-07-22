import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AsyncPipe } from '@angular/common';
import { inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Side } from './side/side';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MatSidenavModule, Side],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    protected readonly title = signal('wedding');

    public expanded: boolean = false;




    onExpanded(){

        //if(this.expanded){
        console.log(this.expanded);

        const sidebar = document.getElementById('sidebar');
        // Toggle the CSS class based on the boolean state
        if(sidebar){
            sidebar.classList.toggle('is-active', this.expanded);
        }
        //}
    }



}
