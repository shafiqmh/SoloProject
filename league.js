makeRequest("GET", leagueURL)
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

        let table = document.getElementById("leaguesTable");
        generateTableHead(table, data);
        generateTable(table, data)
    })
    .catch(error => {
        console.log(error);
    });