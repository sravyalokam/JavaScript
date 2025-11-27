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

     const test = document.getElementById('get-by-id');
        const msg = test.getElementsByClassName("message");
        
        const msg1 = test.querySelectorAll(".message");
        console.log("Get element by class",msg);
        console.log("Query selector all", msg1);

        const cont = document.getElementById("container");
        const check = cont.querySelectorAll(".message");
        console.log("Query selector", check);

        const child_elem = document.getElementById('child-elem');
        const parent_elem = child_elem.parentNode;
        console.log("Parent Elem",parent_elem);


});
