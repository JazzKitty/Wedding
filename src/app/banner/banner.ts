import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  public leftBannerID = '';
  public rightBannerID = '';
  public bannerID = ''; 

  private photoService = inject(PhotoService);
  private cdr = inject(ChangeDetectorRef);


  constructor(){

  }

  ngOnInit(){
    this.photoService.leftBannerIDSub.subscribe((res: string)=>{
      this.leftBannerID = res;
      console.log(this.leftBannerID);
      this.cdr.detectChanges();
      
    })
    this.photoService.bannerIDSub.subscribe((res: string)=>{
      this.bannerID = res;
            this.cdr.detectChanges();

      
    })
    this.photoService.rightBannerIDSub.subscribe((res: string)=>{
      this.rightBannerID = res;
            this.cdr.detectChanges();

    })
  }

}
