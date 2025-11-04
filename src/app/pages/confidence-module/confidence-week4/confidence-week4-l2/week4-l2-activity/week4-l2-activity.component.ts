import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-week4-l2-activity',
  templateUrl: './week4-l2-activity.component.html',
  styleUrls: ['./week4-l2-activity.component.css']
})
export class Week4L2ActivityComponent implements OnInit {
  confidenceReason: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  downloadCertificate() {
    const certificate = document.getElementById('certificate');
    if (certificate) {
      html2canvas(certificate).then((canvas: { toDataURL: (arg0: string) => any; }) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('confidence-certificate.pdf');
      });
    }
  }
}
