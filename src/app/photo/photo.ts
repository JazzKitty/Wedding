import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-photo',
    imports: [],
    templateUrl: './photo.html',
    styleUrl: './photo.scss',
})
export class Photo {
    private appService = inject(AppService);
    private cdr = inject(ChangeDetectorRef);

    fileList: any[] = [];

    ngOnInit() {
        this.appService.getPublicFolderFiles().subscribe({
            next: (response) => {
                // Iterate through files returned by Google Drive API
                this.fileList = response.files;
                this.fileList.forEach(file => {
                    console.log('File Name:', file.name, 'ID:', file.id);
                });
                this.cdr.detectChanges()
            },
            error: (err) => console.error('Error fetching files', err)
        });
    }
}
