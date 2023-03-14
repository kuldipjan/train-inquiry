import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-trainbwstation',
  templateUrl: './trainbwstation.component.html',
  styleUrls: ['./trainbwstation.component.scss']
})
export class TrainbwstationComponent implements OnInit {
  fname: string = '';
  lname: string = '';
  tital = 'Reactiveforms';
  reactiveForm: any = FormGroup;
  
 
  
  onSubmit() {
    console.log(this.reactiveForm.value)
    
   
  }
  
  constructor(private builder: FormBuilder) {
    this.reactiveForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
    });
   }
  

  ngOnInit(): void {
    this.reactiveForm = this.builder.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required]
    });
    
    
  }
 

    
    
  }


