//forEach 반복문 개념

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

//self 실습&응용 구간
let verticalUnderline = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");  // a 추가하는것 중요!

verticalMenus.forEach((menu2) =>
  menu2.addEventListener("click", (f) => verticalIndicator(f))
);

function verticalIndicator(f) {
  verticalUnderline.style.left = f.currentTarget.offsetLeft + "px";
  verticalUnderline.style.width = f.currentTarget.offsetWidth + "px";
  verticalUnderline.style.top = f.currentTarget.offsetTop + f.currentTarget.offsetHeight+ "px";

}
