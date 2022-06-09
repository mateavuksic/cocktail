import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scrollFunction,true);
    window.addEventListener('scroll', this.reveal);
  }
  scrollFunction() {
    let myButton = document.getElementById("myBtn1") as HTMLCollectionOf<HTMLElement>[0];
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  reveal(){
    let reveals = document.querySelectorAll(".row,.card");


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
