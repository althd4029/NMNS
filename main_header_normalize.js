//로그인버튼
let login_button = document.getElementById("login_button");
login_button.addEventListener("click", goToLogin);
function goToLogin(){
    location.replace("login.html");
}
//마이페이지버튼
let DM_button = document.getElementById("DM_button");
DM_button.addEventListener("click", goToDM);
function goToDM(){
    location.replace("mypage.html");
}
//카테고리 드랍
let category = document.getElementById("categorycolor");
let categorydrop = document.getElementById("categorydrop");
category.addEventListener("click", dropCategorydrop);

function dropCategorydrop(){
    //책갈피
    if(categorydrop.style.display == "block"){
        categorydrop.style.display = "none";
    }
    else{
        categorydrop.style.display = "block";
    }
    //categorydrop.style.display = "block";
    // categorydrop.style.display = "none";
}
//헤더부분==========================================================
//========헤더부분==================================================
//=================================================================

//카테고리 (귀걸이, 목걸이, 등등) 클릭시 제품 페이지로 이동
let earing1 = document.getElementById("categorydrop__earing1");
let earing6 = document.getElementById("categorydrop__earing6");
let picture1 = document.getElementById("categorydrop__picture1");
let video1 = document.getElementById("categorydrop__video1");
let furniture1 = document.getElementById("categorydrop__furniture1");
let computer1 = document.getElementById("categorydrop__computer1");
let translate1 = document.getElementById("categorydrop__translate1");


earing1.addEventListener("click", goToEaring1);
picture1.addEventListener("click", goToPicture1);
video1.addEventListener("click", goToVideo1);
furniture1.addEventListener("click", goToFurniture1);
computer1.addEventListener("click", goToComputer1);
translate1.addEventListener("click", goToTranslate1);


earing6.addEventListener("click", goToSignup);

function goToEaring1(){
    location.replace("main_jewerly1.html");
}
function goToPicture1(){
    location.replace("main_drawing1.html");
}
function goToVideo1(){
    location.replace("main_video1.html");
}
function goToFurniture1(){
    location.replace("main_furniture1.html");
}
function goToComputer1(){
    location.replace("main_computer1.html");
}
function goToTranslate1(){
    location.replace("main_translate1.html");
}


function goToSignup(){
    location.replace("signup.html");
}

