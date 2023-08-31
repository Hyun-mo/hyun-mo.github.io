var windowWidth = window.matchMedia("screen and (max-width: 768px)");

if (windowWidth.matches) {
  //screen and (max-width: 768px)에 해당한다.
  console.log("모바일 사이즈 입니다.");
} else {
  //screen and (max-width: 768px)에 해당하지 않는다.
  console.log("모바일 사이즈가 아닙니다.");
}
console.log("asdasd");
