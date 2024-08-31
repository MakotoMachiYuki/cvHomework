const logoGroupDiv1 = document.getElementById("logoGroupDiv1");
const logoGroupDiv2 = document.getElementById("logoGroupDiv2");
const logoGroupDiv3 = document.getElementById("logoGroupDiv3");

//fungsi untuk bisa menggunakan scroll wheel dalam container logoGroupDiv
const scrollFunction = function (e) {
  const targetContainer = e.currentTarget;
  if (e.deltaY > 0) {
    targetContainer.scrollLeft += 250;
    e.preventDefault();
  } else {
    targetContainer.scrollLeft -= 250;
    e.preventDefault();
  }
};
logoGroupDiv1.addEventListener("wheel", scrollFunction, false);
logoGroupDiv2.addEventListener("wheel", scrollFunction, false);
logoGroupDiv3.addEventListener("wheel", scrollFunction, false);

const assets1 = document.getElementById("assets1");
const assets2 = document.getElementById("assets2");

const openFunction = function () {
  var sources = document.getElementById("sources");
  var assets1 = document.getElementById("assets1");
  var assets2 = document.getElementById("assets2");

  if (sources.style.display === "none" || sources.style.opacity === "0") {
    assets1.style.display = "none";
    assets2.style.display = "block";
    sources.style.display = "block";

    setTimeout(() => {
      sources.style.height = "auto";
      sources.style.opacity = "1";
    }, 10);
  } else {
    assets1.style.display = "block";
    assets2.style.display = "none";

    sources.style.height = "0";
    sources.style.opacity = "0";

    sources.style.display = "none";
  }
};

const caretColorOver = function () {
  var caret1 = document.getElementById("caret1");
  var caret2 = document.getElementById("caret2");

  caret1.style.color = "#f3c7fa";
  caret2.style.color = "#f3c7fa";
};

const caretColorOut = function () {
  var caret1 = document.getElementById("caret1");
  var caret2 = document.getElementById("caret2");

  caret1.style.color = "#eeeeee";
  caret2.style.color = "#eeeeee";
};

assets1.addEventListener("click", openFunction, false);
assets2.addEventListener("click", openFunction, false);
assets1.addEventListener("mouseover", caretColorOver, false);
assets2.addEventListener("mouseover", caretColorOver, false);
assets1.addEventListener("mouseout", caretColorOut, false);
assets2.addEventListener("mouseout", caretColorOut, false);

const background = document.getElementById("background");
const backgroundNoBlur = document.getElementById("backgroundNoBlur");
const showBackground = document.getElementById("showBackground");

const downBackground = function () {
  var background = document.getElementById("background");
  var content = document.getElementById("content");

  content.style.zIndex = "-1";
  background.style.zIndex = "-2";
};

const upBackground = function () {
  var background = document.getElementById("background");
  var content = document.getElementById("content");

  content.style.zIndex = "1";
  background.style.zIndex = "2";
};

background.addEventListener("mousedown", downBackground, false);
background.addEventListener("mouseup", upBackground, false);
backgroundNoBlur.addEventListener("mouseup", upBackground, false);
backgroundNoBlur.addEventListener("mouseup", upBackground, false);
showBackground.addEventListener("click", downBackground, false);
