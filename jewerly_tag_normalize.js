
let selected_tag = document.getElementById("selected_tag");


document.querySelectorAll('.click_tag').forEach(e => e.addEventListener('click', function () {
    console.log(e.innerHTML);
    
    newA = document.createElement("a");
    create_tag = document.createTextNode("- "+e.innerHTML);
    newA.appendChild(create_tag);
    selected_tag.appendChild(newA);
    //여기에 더 적으면 될듯
}));
