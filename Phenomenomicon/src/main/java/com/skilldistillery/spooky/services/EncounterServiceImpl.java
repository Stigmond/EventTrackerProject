package com.skilldistillery.spooky.services;

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
	

}
