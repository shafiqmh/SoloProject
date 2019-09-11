

makeRequest("GET", teamURL)
    .then(data => {
        console.log(data);

        let teamKeys = Object.keys(data[0]);

        function generateTableHead(table, data) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (let key of teamKeys) {
                let th = document.createElement("th");
                let text = document.createTextNode(key);
                th.appendChild(text);
                row.appendChild(th);
            }
        }

        function generateTable(table, data) {
            for (let element of data) {
                let row = table.insertRow();
                for (let key in element) {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }
        }

        let table = document.getElementById("teamsTable");
        generateTableHead(table, data);
        generateTable(table, data)
    })
    .catch(error => {
        console.log(error);
    });






function handleAddTeam(formEl) {
    console.log("Form Submitted");

    const formData = {};

    for (let element of formEl.elements) {
        if (element.id != "") {
            formData[element.id] = element.value;
        }
    }
    console.log(JSON.stringify(formData));
    makeRequest("POST", teamURL, JSON.stringify(formData));
}


// function handleFormSubmit(formEl) {

//     console.log('FORM SUBMITTED');

//     const formData = {};
//     for (let element of formEl.elements) {
//         // console.log(element.value)
//         if (element.id != "") {
//             formData[element.id] = element.value;
//         }
//     }

//     const xhr = new XMLHttpRequest();
//     xhr.onload = () => { /* handle response */ };
//     xhr.open('POST', 'https://us-central1-qac-sandbox-c347f.cloudfunctions.net/setUser');
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify(formData));

//     return false;
// }

































// function removeAllChildren(id) {
//     let result = document.getElementById(id);
//     while (result.hasChildNodes()) {
//         result.removeChild(result.firstChild);
//     }

// }

// function addTeam(newEntry, aRow) {                   //addToTable
//     let iTeamID = document.createElement('td');
//     iTeamID.innerHTML = newEntry.teamID;
//     let iTeamName = document.createElement('td');
//     iTeamName.innerHTML = newEntry.teamName;
//     let iTeamLocation = document.createElement('td');
//     iTeamLocation.innerHTML = newEntry.teamLocation;
//     let iTeamStadium = document.createElement('td');
//     iTeamStadium.innerHTML = newEntry.teamStadium;
//     let deleteButton = document.createElement('td');
//     deleteButton.innerHTML = `<button type="button" class="btn btn-secondary" onclick='destroy(${newEntry.teamID})' > Delete</button >`;
//     let readOneButton = document.createElement('td');
//     readOneButton.innerHTML = `<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal" onclick ='readOne(${newEntry.teamID})' > More Details </button >`;

//     aRow.appendChild(iTeamID);
//     aRow.appendChild(iTeamName);
//     aRow.appendChild(iTeamLocation);
//     aRow.appendChild(iTeamStadium);
//     aRow.appendChild(deleteButton);
//     aRow.appendChild(readOneButton);
// }


// function addTeam() {
//   const xhr = new XMLHttpRequest();
//   let name = document.getElementById('teamName').value;
//   let location = document.getElementById('teamLocation').value;
//   let stadium = document.getElementById('teamStadium').value;

//   let json = JSON.stringify({
//     "name": `${name}`,
//     "location": `${location}`,
//     "stadium": `${stadium}`,
//   });

//   console.log(json);
//   xhr.open('POST', 'http://localhost:9966/petclinic/api/owners', true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.onload = () => {
//     console.log(xhr.response);
//     if (xhr.status == 201) {
//       getOwners();
//     } else {
//       document.getElementById('Error').innerHTML = 'Oops... something went wrong!'
//     }
//   }
//   getOwners();
//   xhr.send(json);
//   // return false;
// }


