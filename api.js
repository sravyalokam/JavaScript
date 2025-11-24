const url = 'https://jsonplaceholder.typicode.com/posts';
const promise = new Promise((resolve, reject) => {
    fetch(url)
    .then((data) =>  { console.log(JSON.stringify(data))})
    .catch((err) => { console.log("Error while fetching data")})
})