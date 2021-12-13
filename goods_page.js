let basket_btn = document.getElementById("basket");
let buy_it_btn = document.getElementById("buy_it");

basket_btn.addEventListener("click", basketClicked);
buy_it_btn.addEventListener("click", buy_itClicked);

function basketClicked(){
    alert("장바구니에 제품을 담았습니다.\n장바구니로 이동하시겠습니까?");
}

function buy_itClicked(){
    alert("제품 구매 페이지로 넘어갑니다.");
}




