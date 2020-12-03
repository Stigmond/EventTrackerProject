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
  newEncounter: Encounter = new Encounter();
  wantsToAdd: boolean = false;
  wantsToEdit: boolean = false;

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

  addEncounter(encounter: Encounter): void {
    this.encounterService.create(encounter).subscribe(
      success=> {
        this.loadEncounters();
        this.clearForm();
        this.wantsToAdd = false;
      },
      failure=> {
        console.error('displayEncounterComponent.addEncounter(): submission failed');
        console.error(failure);
        this.clearForm();
        this.wantsToAdd = false;
      }
    );
  }

  updateEncounter(encounterId: number, updatedEncounter: Encounter): void {
    this.encounterService.update(encounterId, updatedEncounter).subscribe(
      success=> {
        this.loadEncounters();
        this.wantsToAdd = false;
        this.wantsToEdit = false;
      },
      failure=> {
        console.error('displayEncounterComponent.updateEncounter(): update failed');
        console.error(failure);
        this.wantsToAdd = false;
        this.wantsToEdit = false;
      }
    );
  }

  deleteEncounter(encounterId: number): void {
    this.encounterService.destroy(encounterId).subscribe(
      success=> {
        this.selectedEncounter = null;
        this.loadEncounters();
      },
      failure=> {
        console.error('displayEncounterComponent.deleteEncounter(): deletion failed');
        console.error(failure);
      }
    );
  }


  clearForm(): void {
    this.newEncounter = new Encounter();
  }
}
