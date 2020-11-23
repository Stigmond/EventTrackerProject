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
  var encounterDetails = document.getElementById('encounterDetails');
  encounterDetails.textContent = '';
  let picture = document.createElement('img');
    if (encounter.entityUrl === 'Unknown'|| encounter.entityUrl === ('') || encounter.entityUrl === null) {
      picture.src = 'https://images-na.ssl-images-amazon.com/images/I/511irlY4qML._AC_.jpg'
    } else {
      picture.src = encounter.entityUrl;}
  picture.width = '240';
  let updateForm = document.createElement('form');
  updateForm.name = "updateEncounter";
  let formId = document.createElement('input');
  formId.type = 'hidden';
  formId.name = 'id';
  formId.value = encounter.id;
  let formDate = document.createElement('input');
  formDate.type = 'date';
  formDate.name = 'date';
  formDate.value = encounter.date;
  let formEntity = document.createElement('input');
  formEntity.type = 'text';
  formEntity.name = 'entityType';
  formEntity.value = encounter.entityType;
  formEntity.placeholder = 'entity';
  let formUrl = document.createElement('input');
  formUrl.type = 'text';
  formUrl.name = 'entityUrl';
  formUrl.value = encounter.entityUrl;
  formUrl.placeholder = 'entity image(http://)';
  let formCity = document.createElement('input');
  formCity.type = 'text';
  formCity.name = 'city';
  formCity.value = encounter.city;
  formCity.placeholder = 'city';
  let formState = document.createElement('input');
  formState.type = 'text';
  formState.name = 'stateCountry';
  formState.value = encounter.stateCountry;
  formState.maxlength='2';
  formState.placeholder = 'state/country';
  let formLat = document.createElement('input');
  formLat.type = 'number';
  formLat.name = 'latitude';
  formLat.step = '.000001';
  formLat.value = encounter.latitude;
  formLat.placeholder = 'latitude';
  let formLong = document.createElement('input');
  formLong.type = 'number';
  formLong.name = 'longitude';
  formLong.step = '.000001';
  formLong.value = encounter.longitude;
  formLong.placeholder = 'longitude';
  let formBody = document.createElement('textarea');
  formBody.name = 'body';
  formBody.value = encounter.body;
  formBody.rows="3";
  formBody.cols="40";
  formBody.placeholder = 'encounter description';
  let updateButton = document.createElement('button');
  updateButton.textContent = 'Update';
  updateButton.addEventListener('click', updateEvent);
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  updateForm.appendChild(formId);
  updateForm.appendChild(picture);
  updateForm.appendChild(document.createElement('br'));
  updateForm.appendChild(formDate);
  updateForm.appendChild(document.createElement('br'));
  updateForm.appendChild(formEntity);
  updateForm.appendChild(document.createElement('br'));
  updateForm.appendChild(formUrl);
  updateForm.appendChild(document.createElement('br'));
  updateForm.appendChild(formCity);
  updateForm.appendChild(formState);
  updateForm.appendChild(document.createElement('br'));
  updateForm.appendChild(formLat);
  updateForm.appendChild(formLong);
  updateForm.appendChild(document.createElement('br'));
  updateForm.appendChild(formBody);
  updateForm.appendChild(document.createElement('br'));
  updateForm.appendChild(updateButton);
  updateForm.appendChild(deleteButton);
  encounterDetails.appendChild(updateForm);
};

function updateEvent(e) {
e.preventDefault;
  // console.log(e.target.parentElement.id.value);
  // console.log(e.target.parentElement.body.value);
  let affirm = confirm("Are you sure you wish to update this Encounter?");
  if (affirm) {
    let updatedEncounter = {
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
    xhr.open('PUT', `api/encounter/${e.target.parentElement.id.value}`);

    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          console.log(data);
          showEvent(data);
        } else {
          console.log("PUT request failed.");
          console.error(xhr.status + ' :' + xhr.responseText);
        }
      }
    };
    var userObjectJson = JSON.stringify(updatedEncounter);
    xhr.send(userObjectJson);
  }
};
