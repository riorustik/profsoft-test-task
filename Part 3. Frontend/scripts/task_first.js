const hidden_bar = document.querySelector(".hidden-bar");
const body = document.querySelector("body");
const links = document.querySelectorAll(".menu-top__links-anchor");

document.querySelector(".bloсk-home-bar-media").onclick = () => {
  hidden_bar.style.display = "block";
  window.scrollTo(0, 0);
  //  body.style.position = 'fixed';
  //  body.style.overflowY = 'scroll';
};

document.querySelector(".hidden-bar-close").onclick = () => {
  hidden_bar.style.display = "none";
  //  body.style.position = 'static';
  //  body.style.overflowY = 'visible';
};

for (let elem of links) {
  elem.onclick = () => {
    //body.style.position = 'static';
    //body.style.overflowY = 'visible';
    hidden_bar.style.display = "none";
  };
}
