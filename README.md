# EventTrackerProject

## Overview

This is the Week 12 Project for the Skill Distillery Full-Stack Java Bootcamp.  The ultimate goal of this project is for  students to create a full-stack Event Tracker utilizing Spring Boot.  At this stage, students are only required to display their ability to create a back-end for an Event Tracker, utilizing standard CRUD functions.  For this project, the theme of the event tracker involves unsubstantiated phenomena (e.g., paranormal activity).

*This Event Tracker currently utilizes one table in a database, but will be expanded in future versions.

## Login Information

Send your preferred web browser to: http://35.164.69.220:8080/Phenomenomicon/api/ping to ensure that the server is up and operating.  You will get a humorous response of "pong!"  If you see this word, you have successfully accessed the program, and can utilize the API Endpoints below.

## REST API Endpoints

Access the following actions utilizing http://35.164.69.220:8080/Phenomenomicon and then amending the following URL templates:

| Action  | HTTP Method | URL Template          |  
| ------- |:-----------:|:----------------------|
| LIST    | GET         | /api/encounter        |
| READ    | GET         | /api/encounter/{id}   |
| CREATE  | POST        | /api/encounter/{id}   |
| UPDATE  | PUT         | /api/encounter/{id}   |
| DESTROY | DELETE      | /api/encounter/{id}   |

*{id} should be the ID number of the entity in the database

## Technologies Used

* Java,
* Gradle,
* Spring Tool Suite,
* SpringBoot / Spring Data JPA,
* Spring REST / API,
* Request / Response Objects,
* AWS / EC2,
* Tomcat,
* MYSQL,
* MYSQL Workbench,
* Data Serialization,
* JSON,
* Postman,
* Linux,
* Git / GitHub,
* Markdown

## Key Lessons Learned

1. This project introduced an alternative method to the Model/View method, including potential shortcuts available through Spring Rest--should it be utilized by employers.
2. This project presented challenges in the form of new potential errors and edge cases resulting from the use of APIs and JSON syntax, the necessity for additional failsafes, and the application of Response Status Codes.
