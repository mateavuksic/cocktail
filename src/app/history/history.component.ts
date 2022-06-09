import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reveal(){
    let reveals = document.querySelectorAll('.hero');


    for (let i=0;i < reveals.length;i++){
       let windowheight = window.innerHeight;
       let revealtop = reveals[i].getBoundingClientRect().top;
       let revelpoint = 150;


       if(revealtop < windowheight - revelpoint){
         reveals[i].classList.add('active')


    }
    else{
      reveals[i].classList.remove('active');

    }
  }
}
}
