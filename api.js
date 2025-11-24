// const url = 'https://jsonplaceholder.typicode.com/posts';
// const promise = new Promise((resolve, reject) => {
//     fetch(url)
//     .then((data) =>  { console.log(JSON.stringify(data))})
//     .catch((err) => { console.log("Error while fetching data")})
// })


require("dotenv").config();

const baseUrl = process.env.BASE_URL;
const token = process.env.TOKEN;


async function getData() {

    const data = await fetch(`${baseUrl}/vendors/`,{
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
    }
    });

    console.log("Status Code:");
    const text = await data.text();  
    console.log("Raw Response:", text);
}

// getData();

async function postData() {

    const data = await fetch(`${baseUrl}/vendors/`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
        name: "test",
        location: "hyd",
        contacts: []
    })
    
    });

    console.log("Status Code:", data.status);
    const result = await data.text();
    // const text = await data.text();  
    console.log("Raw Response:", result);
}

// postData();

async function deleteData() {

    const data = await fetch(`${baseUrl}/jobs/566b0d66-abaa-4071-9a70-e9d8af40d0b`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            is_active: false
        })
    
    });

    console.log("Status Code:", data.status);
    const result = await data.text();
    // const text = await data.text();  
    console.log("Raw Response:", result);
}

// deleteData();

