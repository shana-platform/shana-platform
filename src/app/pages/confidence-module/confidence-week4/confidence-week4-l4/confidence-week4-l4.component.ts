import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confidence-week4-l4',
  templateUrl: './confidence-week4-l4.component.html',
  styleUrls: ['./confidence-week4-l4.component.css']
})
export class ConfidenceWeek4L4Component implements OnInit {
  confidenceForm: FormGroup;
  submitted = false;
  showModal: boolean = false;
  
  constructor(private fb: FormBuilder) {
    this.confidenceForm = this.fb.group({
      firstPractice: ['', [Validators.required, Validators.minLength(3)]],
      secondPractice: ['', [Validators.required, Validators.minLength(3)]],
      helper: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.confidenceForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.confidenceForm.invalid) {
      alert('Please share something you’re proud of!');
      return;
    }

    console.log(this.confidenceForm.value);
    alert('✅ Your confidence plan has been created successfully!');
    this.confidenceForm.reset();
    this.submitted = false;
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  outsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.id === 'congratsModal') {
      this.closeModal();
    }
  }
}
