import { Component, OnInit } from '@angular/core';
import { FormControl,  FormBuilder, Validators,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-spotyourtrain',
  templateUrl: './spotyourtrain.component.html',
  styleUrls: ['./spotyourtrain.component.scss']
})
export class SpotyourtrainComponent implements OnInit {
  fname: string = '';
  myGroup:any;

  


  
  onsubmit(){
        console.log(this.fname);
    }
    

  constructor(private builder: FormBuilder) {
    this.myGroup = new FormGroup({
      fname: new FormControl()
  });
  this.myGroup = this.builder.group({
    fname: [null, Validators.required]
   
  });
   }
 

  ngOnInit(): void {
  }

}
