import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  imports: [],
  templateUrl: './photo.html',
  styleUrl: './photo.scss',
})
export class Photo implements OnInit {
  private photoService = inject(PhotoService);
  private cdr = inject(ChangeDetectorRef);

  fileList: any[] = [];

  ngOnInit() {
    this.photoService.fileListSub.subscribe(res=>{
      this.fileList = res;
    })
  }
}
