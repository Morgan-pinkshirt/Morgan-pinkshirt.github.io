document.getElementById("clickImage").style.visibility = 'hidden';
document.getElementById("clickText").style.visibility = 'hidden';
document.getElementById("clickCartoon").style.visibility = 'hidden';
document.getElementById("clickFour").style.visibility = 'hidden';

function displayImage() {
    const x = document.getElementById("clickImage");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
      x.style.display = "inline-block";
    } else {
      x.style.visibility = "hidden";
    }
  }

function displayText() {
  const y = document.getElementById("clickText");
  if (y.style.visibility === "hidden") {
    y.style.visibility = "visible";
    y.style.display = "inline-block";
  } else {
    y.style.visibility = "hidden";
  }
}

function displayCartoon() {
  const z = document.getElementById("clickCartoon");
  if (z.style.visibility === "hidden") {
    z.style.visibility = "visible";
    z.style.display = "inline-block";
  } else {
    z.style.visibility = "hidden";
  }
}

function displayFour() {
  const w = document.getElementById("clickFour");
  if (w.style.visibility === "hidden") {
    w.style.visibility = "visible";
    w.style.display = "inline-block";
  } else {
    w.style.visibility = "hidden";
  }
}
//Figure out the hover part !!!!!!!

//let citeId = document.element.attr('id');
document.getSelection().onmouseover = function() {mouseOver()};
document.getSelection().onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getSelection().style.color = "red";
  document.getElementById("citation").style.display = "inline-block";
}

function mouseOut() {
  document.getSelection().style.color = "black";
  document.getElementById("citation").style.display = "none";
}
//const paragraph2 = document.getElementById("paragraph2");
//const imageFdC = document.getElementById("FdCImage");
//const heightLenght = paragraph2.getAttribute("height");
//imageFdC.setAttribute = heightLenght;