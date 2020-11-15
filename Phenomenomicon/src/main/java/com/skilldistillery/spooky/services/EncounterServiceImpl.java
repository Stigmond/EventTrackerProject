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
			encounter.setDisabled(1); //ENTERS DATABASE DISABLED FOR ADMIN REVIEW
		}
		if (encounter.getBody() == null) {
			encounter.setBody("CLASSIFIED");
		}
		System.out.println(encounter);
		encRepo.saveAndFlush(encounter);
		return encounter;
	}

}
