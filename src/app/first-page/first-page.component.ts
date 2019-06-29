import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  titulo: string;
  constructor() { 
  }

  ngOnInit() {
    //this.data.initData();
    
  }

}
