package com.skilldistillery.spooky.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.spooky.entities.Encounter;

public interface EncounterRepository extends JpaRepository<Encounter, Integer> {

}
