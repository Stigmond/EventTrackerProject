package com.skilldistillery.spooky.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Encounter {

	//###FIELDS###
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;

	//###CONSTRUCTOR###
	public Encounter() {
		super();
		
	}

	//###GETTERS/SETTERS###
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	//###HASHCODE/EQUALS###
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Encounter other = (Encounter) obj;
		if (id != other.id)
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}

	//###TOSTRING###
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Encounter [id=").append(id).append(", title=").append(title).append("]");
		return builder.toString();
	}

}