package com.skilldistillery.spooky.services;

import java.util.List;

import com.skilldistillery.spooky.entities.Encounter;

public interface EncounterService {

	List<Encounter> getAllEncounters();
	
	Encounter getEncounterById(Integer id);
	
	Encounter createEncounter(Encounter encounter);
	
	Encounter updateEncounter(Integer id, Encounter updatedEncounter);
	
	boolean deleteEncounter(Integer id);
}
