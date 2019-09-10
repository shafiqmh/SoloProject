function makeRequest(requestType, url, whatToSend) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status == 200) {
                resolve(xhr.response);
            } else {
                const reason = new Error("Rejected");
                reject(reason);
            }
        };
        xhr.open(requestType, url);
        xhr.send(whatToSend);
    });
}

// function removeAllChildren(id) {
//     let result = document.getElementById(id);
//     while (result.hasChildNodes()) {
//         result.removeChild(result.firstChild);
//     }

// }

function addTeam(newEntry, aRow) {                   //addToTable
    let iTeamID = document.createElement('td');
    iTeamID.innerHTML = newEntry.teamID;
    let iTeamName = document.createElement('td');
    iTeamName.innerHTML = newEntry.teamName;
    let iTeamLocation = document.createElement('td');
    iTeamLocation.innerHTML = newEntry.teamLocation;
    let iTeamStadium = document.createElement('td');
    iTeamStadium.innerHTML = newEntry.teamStadium;
    let deleteButton = document.createElement('td');
    deleteButton.innerHTML = `<button type="button" class="btn btn-secondary" onclick='destroy(${newEntry.teamID})' > Delete</button >`;
    let readOneButton = document.createElement('td');
    readOneButton.innerHTML = `<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal" onclick ='readOne(${newEntry.teamID})' > More Details </button >`;

    aRow.appendChild(iTeamID);
    aRow.appendChild(iTeamName);
    aRow.appendChild(iTeamLocation);
    aRow.appendChild(iTeamStadium);
    aRow.appendChild(deleteButton);
    aRow.appendChild(readOneButton);
}


function addTeam() {
  const xhr = new XMLHttpRequest();
  let name = document.getElementById('teamName').value;
  let location = document.getElementById('teamLocation').value;
  let stadium = document.getElementById('teamStadium').value;

  let json = JSON.stringify({
    "name": `${name}`,
    "location": `${location}`,
    "stadium": `${stadium}`,
  });

  console.log(json);
  xhr.open('POST', 'http://localhost:9966/petclinic/api/owners', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    console.log(xhr.response);
    if (xhr.status == 201) {
      getOwners();
    } else {
      document.getElementById('Error').innerHTML = 'Oops... something went wrong!'
    }
  }
  getOwners();
  xhr.send(json);
  // return false;
}


