// getData()

// function getData() {
//     const promise = new Promise((resolve, reject) => {
//         const data = fetch(`${baseUrl}/vendors/`,{
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}` 
//             }
//         });

//         if(data) {
//             resolve(data);
//         }
//         else{
//             reject(data.error);
//         }
//     })

//     return promise;
// }

require("dotenv").config();

const baseUrl = process.env.BASE_URL;
const token = process.env.TOKEN;

function fetchingDataUsingCallbacks(callback) {
    fetch(`${baseUrl}/vendors/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then((res) => {
        if (!res.ok) {
            return callback(new Error("HTTP Error " + res.status), null);
        }
        return res.json();
    })
    .then((data) => callback(null, data))
    .catch((err) => callback(err, null));
}

fetchingDataUsingCallbacks((err, data) => {
    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log("Success:", data);
});
