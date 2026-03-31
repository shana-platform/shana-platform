import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProgressService } from 'src/app/core/services/progress.service';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-respect-wk1-l1-activity',
  templateUrl: './respect-wk1-l1-activity.component.html',
  styleUrls: ['./respect-wk1-l1-activity.component.css']
})
export class RespectWk1L1ActivityComponent implements OnInit {
  selectedImage: string | null = null;
  showModal = false;
  score = 0;
  user: any;
  
  constructor(private studentService: StudentService, private authService: AuthService, private progressService: ProgressService) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();
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
    const res = this.score + this.user.stars;
    this.studentService.updateUserStats({ stars: this.score, modulesCompleted: 0, badges: 0, trophies: 0 });
    // this.goNext.emit();
    // alert(`You earned 1 star! Total stars: ${updatedUser.stars}`);
  }

  closeModal() {
    this.showModal = false;
    this.progressService.updateProgress('week1', 70);
  }
}
