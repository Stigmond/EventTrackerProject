window.addEventListener('load', function(e) {
  console.log('document loaded')
  init();
});

function init(){
  getAllEvents();
  };

function getAllEvents(){
  let xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/encounter');

    xhr.onreadystatechange = function(){
   	if (xhr.readyState === 4) {
   		if (xhr.status === 200) {

    		let encounters = JSON.parse(xhr.responseText);
        listEncounters(encounters);
    		}
    		else {
        console.error('Film not found.')
    		}
    	}
    };
    xhr.send();
};

function listEncounters(encounters){
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

  // let eventList = document.createElement('');
  for(let i = 0; i < encounters.length; i++){
    let table = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.textContent = encounters[i].id
    td2.textContent = encounters[i].date
    td3.textContent = encounters[i].entityType;
    table.appendChild(td1);
    table.appendChild(td2);
    table.appendChild(td3);
    eventsTableBody.appendChild(table);
  }
  events.appendChild(eventsTableBody);
};
