import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-livestation',
  templateUrl: './livestation.component.html',
  styleUrls: ['./livestation.component.scss']
})
export class LivestationComponent implements OnInit {
  fname: string = '';
  lname: string = '';
  myGroup:any;

  onsubmit(){
        console.log(this.fname);
        console.log(this.lname);
    }

  constructor(private builder: FormBuilder) {
    this.myGroup = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl('')
  });
  this.myGroup = this.builder.group({
    fname: [null, Validators.required],
    lname: [null, Validators.required]

   
  });
    
   }

  ngOnInit(): void {
  }

}
