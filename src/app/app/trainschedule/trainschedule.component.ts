import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-trainschedule',
  templateUrl: './trainschedule.component.html',
  styleUrls: ['./trainschedule.component.scss']
})
export class TrainscheduleComponent implements OnInit {
  fname: string = '';
  tital = 'Reactiveforms';
  reactiveForm: any = FormGroup;



  onSubmit() {
    console.log(this.reactiveForm.value)
    
   
  }

    model: NgbDateStruct | undefined;
    date: { year: number; month: number; } | undefined;

  constructor(private calendar: NgbCalendar,
              private builder: FormBuilder)
 {
    this.reactiveForm = new FormGroup({
      fname: new FormControl(''),
      date: new FormControl('')
     
    });
   }
  
  selectToday() {
		this.model = this.calendar.getToday();}

  ngOnInit(): void {
    this.reactiveForm = this.builder.group({
      fname: [null, Validators.required],
      date: [null, Validators.required]
      
    });
  }
  clearInput() {
    // Clear the input field
    this.reactiveForm.get('fname')?.reset();
  }

}
