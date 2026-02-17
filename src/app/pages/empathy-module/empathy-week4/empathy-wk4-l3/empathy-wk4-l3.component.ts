import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empathy-wk4-l3',
  templateUrl: './empathy-wk4-l3.component.html',
  styleUrls: ['./empathy-wk4-l3.component.css']
})
export class EmpathyWk4L3Component implements OnInit {
  kindAction = '';

  constructor() { }

  ngOnInit(): void {
  }


  get canComplete(): boolean {
    return this.kindAction.trim().length > 0;
  }

  openCompletionModal(content: any) {
    // this.modalService.open(content, {
    //   centered: true,
    //   backdrop: 'static'
    // });
  }

  proceedToNextLesson() {
    // TODO: routing or lesson progression logic
    console.log('Proceeding to next lesson');
  }
}
