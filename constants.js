const leagueURL = "http://localhost:9010/leagues";
//"/Yoga/api/routine/";

const teamURL = "http://localhost:9010/teams";
//"/Yoga/api/pose/";



function makeRequest(requestType, url, whatToSend, header) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = JSON.parse(xhr.response);
                resolve(data);
            } else {
                const reason = new Error("Rejected");
                reject(reason);
            }
        };
        xhr.open(requestType, url);
        if (requestType == 'POST') {xhr.setRequestHeader('Content-Type', 'application/json')};
        xhr.send(whatToSend);
    })
    .catch(error => {
        console.log(error);
    });
}

