document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');

    title.style.textAlign = "center";

    const get_data_btn = document.getElementById('get-data');
    get_data_btn.addEventListener('click', getDataFromApi);
    get_data_btn.addEventListener('mouseenter', highlightButton);
    get_data_btn.addEventListener('mouseleave', removeHighlight);

    document.getElementById('delete-data')
        .addEventListener('click', deleteDataFromApi)
});
function highlightButton() {
    const btn = document.getElementById('get-data');
    btn.style.backgroundColor = 'yellow';
    btn.style.cursor = 'pointer';
}
function removeHighlight() {
    const btn = document.getElementById('get-data');
    btn.style.backgroundColor = '';
    btn.style.cursor = 'default';
}

async function getDataFromApi() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();  
        console.log("Success:", data);
        const grid = document.getElementById('dataGrid');
        grid.innerHTML = "";

        data.products.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            div.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
           `;
            grid.appendChild(div);
        });
    } catch (err) {
        console.log("Error:", err);
    }
}

async function deleteDataFromApi() {
    try {
        const data = await fetch('https://dummyjson.com/products/1', {
            method: 'DELETE'
        });
        const res = await data.json();
        console.log("Deleted:", data);
    }
    catch (err) {
        console.error("Error:", err);
    }
}