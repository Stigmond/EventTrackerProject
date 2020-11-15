package com.skilldistillery.spooky.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.spooky.entities.Encounter;

@SpringBootTest
class EncounterRepositoryTest {

	@Autowired
	private EncounterRepository repo;
	
	@Test
	@DisplayName("Find Encounter by ID")
	void test1() {
		Optional<Encounter> encOpt = repo.findById(3);
		assertTrue(encOpt.isPresent());
		assertEquals("Snowflake", encOpt.get().getCity());
		assertEquals("Grey Alien", encOpt.get().getEntityType());
	
	}

}
