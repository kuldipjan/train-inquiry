import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-trainschedule',
  templateUrl: './trainschedule.component.html',
  styleUrls: ['./trainschedule.component.scss']
})
export class TrainscheduleComponent implements OnInit {

    model: NgbDateStruct | undefined;
    date: { year: number; month: number; } | undefined;

  constructor(private calendar: NgbCalendar) { }
  selectToday() {
		this.model = this.calendar.getToday();}

  ngOnInit(): void {
  }

}
