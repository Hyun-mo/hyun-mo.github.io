var windowWidth = window.matchMedia("screen and (min-width: 1024px)");

if (windowWidth.matches) {
  //desktop size
  const navi = document.getElementsByClassName("navigation");
  navi[0].addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      for (const item of navi[0].children) {
        item.classList.remove("selected");
      }
      e.target.classList.add("selected");
    }
  });
}
