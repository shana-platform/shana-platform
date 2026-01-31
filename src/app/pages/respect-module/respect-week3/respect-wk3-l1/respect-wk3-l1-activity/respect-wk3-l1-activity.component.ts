import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk3-l1-activity',
  templateUrl: './respect-wk3-l1-activity.component.html',
  styleUrls: ['./respect-wk3-l1-activity.component.css']
})
export class RespectWk3L1ActivityComponent implements OnInit {
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  showSuccessPopup = false;
  uploading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;
  
    // Only allow images
    if (!file.type.startsWith('image/')) {
      alert('Please select an image');
      return;
    }
  
    this.selectedFile = file;
  
    // Preview image
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
  
  uploadPhoto() {
    if (!this.selectedFile) return;
  
    this.uploading = true;
  
    // Simulate API upload
    setTimeout(() => {
      this.uploading = false;
      this.showSuccessPopup = true;
    }, 1500);
  }
}
