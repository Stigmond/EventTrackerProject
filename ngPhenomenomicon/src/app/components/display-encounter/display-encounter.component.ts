import { Component, OnInit } from '@angular/core';
import { EncounterService } from 'src/app/services/encounter.service';

@Component({
  selector: 'app-display-encounter',
  templateUrl: './display-encounter.component.html',
  styleUrls: ['./display-encounter.component.css']
})
export class DisplayEncounterComponent implements OnInit {

  constructor(private encounterService: EncounterService) { }

  ngOnInit(): void {
  }


}
