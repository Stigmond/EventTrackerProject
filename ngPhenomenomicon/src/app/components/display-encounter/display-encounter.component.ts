import { Component, OnInit } from '@angular/core';
import { Encounter } from 'src/app/models/encounter';
import { EncounterService } from 'src/app/services/encounter.service';

@Component({
  selector: 'app-display-encounter',
  templateUrl: './display-encounter.component.html',
  styleUrls: ['./display-encounter.component.css']
})
export class DisplayEncounterComponent implements OnInit {

  encounters: Encounter[];
  selectedEncounter: Encounter = null;
  newEncounter: Encounter = null;
  wantsToAdd: boolean = false;

  constructor(private encounterService: EncounterService) { }

  ngOnInit(): void {
    this.loadEncounters();
  }

  loadEncounters(): void {
    this.encounterService.index().subscribe(
      data=>{
        this.encounters = data;
        console.log(this.encounters);
        console.log('displayEncounterComponent.loadEncounters(): encounters retrieved');

      },
      err=>{
        console.error('displayEncounterComponent.loadEncounters(): retrieve failed');
        console.error(err);

      }
    );
  }

  showEncounter(encounter: Encounter): void {
    console.log(encounter.body);
  }
}
