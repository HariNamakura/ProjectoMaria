import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  year: number; 
    constructor(){
      this.year = new Date().getFullYear(); 
    }
}



