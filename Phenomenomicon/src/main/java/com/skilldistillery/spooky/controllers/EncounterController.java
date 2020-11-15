package com.skilldistillery.spooky.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.spooky.entities.Encounter;
import com.skilldistillery.spooky.services.EncounterService;

@RequestMapping("api")
@RestController
public class EncounterController {

	@Autowired
	private EncounterService encService;
	
	@GetMapping("ping")
	public String ping() {
		return "pong!";
	}
	
	@GetMapping("encounter")
	public List<Encounter> getAllEncounters() {
		List<Encounter> encounters = encService.getAllEncounters();
		return encounters;
	}
	
	@GetMapping("encounter/{id}")
	public Encounter getEncounterById(@PathVariable Integer id, HttpServletResponse response) {
		Encounter encounter = encService.getEncounterById(id);
		if (encounter == null) {
			response.setStatus(404);
		}
		return encounter;
	}
}
