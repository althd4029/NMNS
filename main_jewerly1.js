function goToEaringGoods(){
    location.replace('goods_page.html');
}

var goods_box = document.getElementsByClassName("goods_box");

for(var i=0;i<goods_box.length;i++){
    goods_box[i].addEventListener('click', goToEaringGoods,false);
}



