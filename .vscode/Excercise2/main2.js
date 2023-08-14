let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => horizontalIndicator(e))
);

function horizontalIndicator(e) {
  //offsetLeft:시작점 x좌표, offsetTop: 시작점 y좌표
  //offsetHeight:높이, offsetWidth:너비

  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

//self 실습&응용 구간 --미완성
let verticalUnderline = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2)");

verticalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => verticalIndicator(e))
);

function verticalIndicator(e) {

    verticalUnderline.style.left = e.currentTarget.offsetLeft +e.currentTarget.offsetWidth/2  + "px";
    verticalUnderline.style.width = e.currentTarget.offsetWidth/30 + "px";
    verticalUnderline.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight/10 + "px";
    
}