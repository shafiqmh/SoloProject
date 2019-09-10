const leagueURL = "http://localhost:8080/leagues";
//"/Yoga/api/routine/";

const teamURL = "http://localhost:8080/teams";
//"/Yoga/api/pose/";



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

