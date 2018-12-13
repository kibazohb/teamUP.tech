import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name: string;
  location;
  interests: string[] = [];
  skills: string[] = [];

  ngOnInit() {
  }

}
