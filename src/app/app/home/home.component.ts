import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active = 1;
  constructor(private router: Router) { }
  goTotrainschedule() {
    this.router.navigateByUrl('trainschedule');
  }
  goTotrainbwstation() {
    this.router.navigateByUrl('trainbwstation');
  }
  goTolivestation() {
    this.router.navigateByUrl('livestation');
  }
  goTospotyourtrain() {
    this.router.navigateByUrl('spotyourtrain');
  }
  // goTongbNav() {
  //   this.router.navigateByUrl('home');
  // }
  ngOnInit(): void {
  }

}
