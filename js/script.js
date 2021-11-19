// start watch script
window.onload = function () {
  let date = new Date();

  let seconds = date.getSeconds(),
    minutes = date.getMinutes(),
    hours = date.getHours();

  if (hours > 12) {
    hours -= 12;
  }

  let secondMoveDeg = seconds * 6,
    minuteMoveDeg = minutes * 6 + seconds * (1 / 10),
    hourMoveDeg = hours * 30 + minutes * (1 / 2) + seconds * (1 / 120);

  let secondsDial = document.getElementById("seconds-dial"),
    minutesDial = document.getElementById("minutes-dial"),
    hoursDial = document.getElementById("hours-dial");

  let secondsMoveing = setInterval(secondMove, 1000);

  // the function that implement the dial style
  function setDialStyle(dial, dialMoveDeg) {
    dial.style["-webkit-transform-origin"] = "125px 125px";
    dial.style["-moz-transform-origin"] = "125px 125px";
    dial.style["-ms-transform-origin"] = "125px 125px";
    dial.style["-o-transform-origin"] = "125px 125px";
    dial.style.transformOrigin = "125px 125px";

    dial.style["-webkit-transform"] = "rotate(" + dialMoveDeg + "deg)";
    dial.style["-moz-transform"] = "rotate(" + dialMoveDeg + "deg)";
    dial.style["-ms-transform"] = "rotate(" + dialMoveDeg + "deg)";
    dial.style["-o-transform"] = "rotate(" + dialMoveDeg + "deg)";
    dial.style.transform = "rotate(" + dialMoveDeg + "deg)";
  }

  // the function that reset dialMoveDeg
  function resetDialMoveDeg(dialMoveDeg) {
    dialMoveDeg = dialMoveDeg > 360 ? 0 : dialMoveDeg;
  }

  // the function that controls the seconds-dial moveing
  function secondMove() {
    secondMoveDeg += 6;
    resetDialMoveDeg(secondMoveDeg);
    setDialStyle(secondsDial, secondMoveDeg);
    minuteMove();
    hourMove();
  }

  // the function that controls the minutes-dial moveing
  function minuteMove() {
    minuteMoveDeg += 1 / 10;
    resetDialMoveDeg(minuteMoveDeg);
    setDialStyle(minutesDial, minuteMoveDeg);
  }

  // the function that controls the hours-dial moveing
  function hourMove() {
    hourMoveDeg += 1 / 120;
    resetDialMoveDeg(hourMoveDeg);
    setDialStyle(hoursDial, hourMoveDeg);
  }
};
// end watch script
