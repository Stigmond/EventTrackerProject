package com.skilldistillery.spooky.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.spooky.entities.Encounter;
import com.skilldistillery.spooky.repositories.EncounterRepository;

@Service
public class EncounterServiceImpl implements EncounterService {

	@Autowired
	private EncounterRepository encRepo;

	@Override
	public List<Encounter> getAllEncounters() {
		return encRepo.findAll();
	}

	@Override
	public Encounter getEncounterById(Integer id) {
		Encounter encounter = null;
		Optional<Encounter> optEnc = encRepo.findById(id);
		if (optEnc.isPresent()) {
			encounter = optEnc.get();
		}
		return encounter;
	}

	@Override
	public Encounter createEncounter(Encounter encounter) {
		if (encounter.getDate() == null) {
			encounter.setDate(LocalDate.now());
		}
		if (encounter.getCity() == null) {
			encounter.setCity("Unknown");
		}
		if (encounter.getStateCountry() == null) {
			encounter.setStateCountry("NA");
		}
		if (encounter.getEntityType() == null) {
			encounter.setEntityType("Unknown");
		}
		if (encounter.getDisabled() != 1) {
			encounter.setDisabled(1); // ENTERS DATABASE AS VALUE FOR DISABLED FOR ADMIN REVIEW
		}
		if (encounter.getBody() == null) {
			encounter.setBody("CLASSIFIED");
		}
		System.out.println(encounter);
		encRepo.saveAndFlush(encounter);
		return encounter;
	}

	@Override
	public Encounter updateEncounter(Integer id, Encounter updatedEncounter) {
		Encounter encounter = this.getEncounterById(id);
		if (encounter == null) {
			return null;
		}
		if (updatedEncounter.getDate() != null) {
			encounter.setDate(updatedEncounter.getDate());
		}
		if (updatedEncounter.getCity() != null) {
			encounter.setCity(updatedEncounter.getCity());
		}
		if (updatedEncounter.getStateCountry() != null) {
			encounter.setStateCountry(updatedEncounter.getStateCountry());
		}
		if (updatedEncounter.getLatitude() != null) {
			encounter.setLatitude(updatedEncounter.getLatitude());
		}
		if (updatedEncounter.getLongitude() != null) {
			encounter.setLongitude(updatedEncounter.getLongitude());
		}
		if (updatedEncounter.getEntityType() != null) {
			encounter.setEntityType(updatedEncounter.getEntityType());
		}
		if (updatedEncounter.getEntityUrl() != null) {
			encounter.setEntityUrl(updatedEncounter.getEntityUrl());
		}
		if (updatedEncounter.getBody() != null) {
			encounter.setBody(updatedEncounter.getBody());
		}
		encounter.setDisabled(1); // SETS UPDATED ENTITY VALUE TO DISABLED FOR ADMIN REVIEW

		encRepo.saveAndFlush(encounter);
		return encounter;
	}

	@Override
	public boolean deleteEncounter(Integer id) {
		
		boolean deleted = false;

		Encounter encounterToDelete = this.getEncounterById(id);
		
		if (encounterToDelete != null) {
			encRepo.delete(encounterToDelete);
			deleted = true;
		}

		// ALTERNATIVE: SET ENTITY TO VALUE FOR REMOVED/DELETED
//		Encounter encounter = this.getEncounteryById(id);		
//		if (encounter.getDisabled() != 2) {
//			encounter.setDisabled(2); // SETS ENTITY TO VALUE FOR REMOVED/DELETED;
//			encRepo.saveAndFlush(encounter);
//			deleted = true;
//		}
		return deleted;
	}

}
