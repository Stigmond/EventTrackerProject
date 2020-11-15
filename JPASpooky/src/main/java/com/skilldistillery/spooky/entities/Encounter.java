package com.skilldistillery.spooky.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Encounter {

	//---------- Fields
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
		
	private LocalDate date;
	
	private String city;
	
	@Column(name="state_country")
	private String stateCountry;
	
	private Double latitude;
	
	private Double longitude;
	
	@Column(name="entity_type")
	private String entityType;
	
	@Column(name="entity_url")
	private String entityUrl;
	
	private int disabled;
	
	private String body;

	//---------- Constructor
	
	public Encounter() {
		super();
	}

	//---------- Getters/Setters
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStateCountry() {
		return stateCountry;
	}

	public void setStateCountry(String stateCountry) {
		this.stateCountry = stateCountry;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public String getEntityType() {
		return entityType;
	}

	public void setEntityType(String entityType) {
		this.entityType = entityType;
	}

	public String getEntityUrl() {
		return entityUrl;
	}

	public void setEntityUrl(String entityUrl) {
		this.entityUrl = entityUrl;
	}

	public int getDisabled() {
		return disabled;
	}

	public void setDisabled(int disabled) {
		this.disabled = disabled;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	//---------- HashCode/Equals

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((entityType == null) ? 0 : entityType.hashCode());
		result = prime * result + id;
		result = prime * result + ((stateCountry == null) ? 0 : stateCountry.hashCode());
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
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (entityType == null) {
			if (other.entityType != null)
				return false;
		} else if (!entityType.equals(other.entityType))
			return false;
		if (id != other.id)
			return false;
		if (stateCountry == null) {
			if (other.stateCountry != null)
				return false;
		} else if (!stateCountry.equals(other.stateCountry))
			return false;
		return true;
	}
	
	//---------- toString

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Encounter [id=").append(id).append(", date=").append(date).append(", entityType=")
				.append(entityType).append(", disabled=").append(disabled).append("]");
		return builder.toString();
	}



	

	
	
}