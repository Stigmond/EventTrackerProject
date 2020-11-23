window.addEventListener('load', function(e) {
  console.log('document loaded')
  init();
});

function init() {

  getAllEvents();
  document.addEncounter.add.addEventListener('click', addEncounter);
};

function getAllEvents() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/encounter');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {

        let encounters = JSON.parse(xhr.responseText);
        listEncounters(encounters);
      } else {
        console.error('Encounters not found.');
      }
    }
  };
  xhr.send();
};

function getEventById(e) {
  let id = e.target.parentElement.firstChild.textContent;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `api/encounter/${id}`);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let encounter = JSON.parse(xhr.responseText);
        showEvent(encounter);
      } else {
        console.error('Encounter not found.');
      }
    }
  };
  xhr.send();
};

function listEncounters(encounters) {
  let events = document.getElementById("encounterList");
  events.textContent = '';
  let eventsTableHead = document.createElement('thead');
  let eventsTR = document.createElement('tr');
  let th1 = document.createElement('th');
  let th2 = document.createElement('th');
  let th3 = document.createElement('th');
  th1.scope = 'col';
  th2.scope = 'col';
  th3.scope = 'col';
  th1.textContent = 'Encounter ID';
  th2.textContent = 'Encounter Date';
  th3.textContent = 'Entity Involved';
  eventsTR.appendChild(th1);
  eventsTR.appendChild(th2);
  eventsTR.appendChild(th3);
  eventsTableHead.appendChild(eventsTR);
  events.appendChild(eventsTableHead);

  let eventsTableBody = document.createElement('tbody');

  for (let i = 0; i < encounters.length; i++) {
    let table = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('button');
    td1.textContent = encounters[i].id
    td2.textContent = encounters[i].date
    td3.textContent = encounters[i].entityType;
    td4.textContent = 'more';
    td4.addEventListener('click', getEventById);
    table.appendChild(td1);
    table.appendChild(td2);
    table.appendChild(td3);
    table.appendChild(td4);
    eventsTableBody.appendChild(table);
  }
  events.appendChild(eventsTableBody);
};

function addEncounter(e) {
  e.preventDefault();
  let affirm = confirm("Are you sure you wish to add this Encounter?");
  if (affirm) {
    let newEncounter = {
      date: e.target.parentElement.date.value,
      city: e.target.parentElement.city.value,
      stateCountry: e.target.parentElement.stateCountry.value,
      latitude: e.target.parentElement.latitude.value,
      longitude: e.target.parentElement.longitude.value,
      entityType: e.target.parentElement.entityType.value,
      entityUrl: e.target.parentElement.entityUrl.value,
      body: e.target.parentElement.body.value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/encounter');

    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status == 200 || xhr.status == 201) {
          let data = JSON.parse(xhr.responseText);
          console.log(data);
          e.target.parentElement.reset();
          init();
          showEvent(data);
        } else {
          console.log("POST request failed.");
          console.error(xhr.status + ' :' + xhr.responseText);
        }
      }
    };
    var userObjectJson = JSON.stringify(newEncounter);
    xhr.send(userObjectJson);
  }
};

function showEvent(encounter) {
  console.log(encounter);
  var encounterDetails = document.getElementById('encounterDetails');
  encounterDetails.textContent = '';
  let cardTitle = document.createElement('h3');
  cardTitle.class= 'card-title';
  cardTitle.textContent = encounter.entityType;
  encounterDetails.appendChild(cardTitle);
  let cardText = document.createElement('p');
  cardText.class = 'card-text';
  cardText.textContent = encounter.body;
  encounterDetails.appendChild(cardText);
};
