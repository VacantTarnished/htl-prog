import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-picture-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.scss']
})
export class PictureUploadComponent {
  onFileSelected(event: any) {
    let file: File = event.target.files[0];
    let reader = new FileReader();
    let fileName = file.name.split('.')[0];
    let fileExtension = file.name.split('.').pop() as string;
    let picture = { fileName: fileName, mediaType: "", base64Bytes: "" };

    switch (fileExtension) {
      case "jpg":
      case "jpeg":
        picture.mediaType = "image/jpeg";
        break;
      case "png":
        picture.mediaType = "image/png";
        break;
      default:
        picture.mediaType = "image/jpeg";
        break;
    }

    reader.readAsDataURL(file);
    reader.onload = () => {
      picture.base64Bytes = (reader.result as string).split(',').pop() as string;
    }

    console.log(picture)
  }
}
