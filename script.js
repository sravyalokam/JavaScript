document.addEventListener("DOMContentLoaded", () => {

    const title = document.getElementById("title");
    const list = document.querySelector("#list");
    const items = document.querySelectorAll(".item");

    console.log(title);
    console.log(list);
    console.log(items);

  
    document.getElementById("change-text-btn")
        .addEventListener("click", () => {
            title.textContent = "Text Updated!";
        });


    title.style.color = "blue";
    title.style.fontSize = "30px";
    


});
