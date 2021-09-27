
//let click_tag = document.getElementById("click_tag");
//let click_tag_value = document.getElementById("click_tag_value").value;
let selected_tag = document.getElementById("selected_tag");
//태그 값 따로
let click_fashion_earing = document.getElementById("click_fashion_earing");
let click_silver_earing = document.getElementById("click_silver_earing");

let newA;
let create_tag;

click_fashion_earing.addEventListener("click", clickFashionEaring);
click_silver_earing.addEventListener("click", clickSilverEaring);


function clickFashionEaring(){
    console.log("패션귀걸이");
    newA = document.createElement("a");
    create_tag = document.createTextNode("- 패션귀걸이");
    newA.appendChild(create_tag);
    selected_tag.appendChild(newA);
}
function clickSilverEaring(){
    console.log("은귀걸이");
    newA = document.createElement("a");
    create_tag = document.createTextNode("- 은귀걸이");
    newA.appendChild(create_tag);
    selected_tag.appendChild(newA);;
}