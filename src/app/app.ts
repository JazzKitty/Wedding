import { Component, inject, Inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Side } from './side/side';
import { Banner } from './banner/banner';
import { Footer } from './footer/footer';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, Side, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private photoService = inject(PhotoService);

  ngOnInit(){
    this.photoService.getPublicFolderFiles();
  }
  protected readonly title = signal('wedding');

  public expanded = false;

  onExpanded() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('is-active', this.expanded);
    }
  }
}
