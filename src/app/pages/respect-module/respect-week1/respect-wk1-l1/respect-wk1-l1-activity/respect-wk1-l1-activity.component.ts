import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk1-l1-activity',
  templateUrl: './respect-wk1-l1-activity.component.html',
  styleUrls: ['./respect-wk1-l1-activity.component.css']
})
export class RespectWk1L1ActivityComponent implements OnInit {
  selectedImage: string | null = null;
  showModal = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  submitImage() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
