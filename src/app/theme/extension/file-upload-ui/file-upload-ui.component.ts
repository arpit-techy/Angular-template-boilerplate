import {ChangeDetectionStrategy, Component, OnInit, EventEmitter} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
const URL = 'http://13.232.75.82:5100/api/upload';

@Component({
  selector: 'app-file-upload-ui',
  templateUrl: './file-upload-ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./file-upload-ui.component.scss']
})
export class FileUploadUiComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']

  });
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;
  imageUrl: string|ArrayBuffer;
  constructor() {
    this.imageUrl="../../../../assets/images/avatar-1.jpg"; 
   }

  ngOnInit() {
   
    this.uploader.onAfterAddingFile = (file) => { 
      console.log("AfterAddingFile");
      console.log(file);
      const reader = new FileReader();
    reader.readAsDataURL(file._file);
    reader.onload = () => {
    
    this.imageUrl = reader.result;
    console.log(this.imageUrl);
    };
  
    }
    
}

 onFileSelected(event) {
   console.log("OnFileSelected");
   console.log(event);
  
}

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}
