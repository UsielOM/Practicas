import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  generatePDF(){
const pdf = new PdfMakeWrapper();
pdf.add(
  new Txt('Hola Mundo').bold().end
);
pdf.create().open();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
