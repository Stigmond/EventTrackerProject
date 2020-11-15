package com.skilldistillery.spooky.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class EncounterTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Encounter encounter;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("SpookyPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}
		
	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		encounter = em.find(Encounter.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
	}

	@Test
	@DisplayName("Testing Encounter Entity")
	void test() {
		assertNotNull(encounter);
		assertEquals(1967, encounter.getDate().getYear());
		assertEquals("Bigfoot", encounter.getEntityType());
		assertEquals(-123.549006, encounter.getLongitude());
	}

}
