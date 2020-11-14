package com.skilldistillery.spooky.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
