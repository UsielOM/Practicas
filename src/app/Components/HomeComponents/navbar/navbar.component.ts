import { Component, OnInit } from '@angular/core';
import { Canvas, Ellipse, Img, PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

title = 'angular-pdfmakewrapper';

generatePDF(){
  

  const pdf = new PdfMakeWrapper();
  pdf.styles({
    style1: {

        height: 50,
        width: 50

    },
    style2: {
        italics: true
    },
    Img:{
      height: 20,
      width: 20

    },
    
    
});


  pdf.header('This is a header');



  pdf.add(
   new Txt("Hello World").bold().italics().end
  );


  pdf.footer('This is a footer');

const generate = async () =>{
 
//   pdf.add(
//     new Canvas([
//         new Ellipse([10, 10], [30, 30]).end
        

//     ]
//     ).end
// );

pdf.add( await new  Img('assets/F.png').build());
  pdf.create().open();
  
}



generate();

}

  constructor() { }

  

  ngOnInit(): void {


}



}



