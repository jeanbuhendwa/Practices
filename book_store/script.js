const nav = document.getElementById("nav-bar");

const onScroll = (event) => {
  const scrollProstion = event.target.scrollingElement.scrollTop;

  if (scrollProstion > 10) {
    if (!nav.classList.contains("scrolled-down")) {
      nav.classList.add("scrolled-down");
    }
  } else {
    if (nav.classList.contains("scrolled-down")) {
      nav.classList.remove("scrolled-down");
    }
  }
};

window.addEventListener("scroll", onScroll);
