let path = document.querySelector("path");
let pathLength = path.getTotalLength("path");

path.style.strokeDasharray = `${pathLength} ${pathLength}`;

path.style.strokeDashoffset = pathLength;

addEventListener("scroll", () => {
  // What % down is it?
  var scrollPercentage = (
    (document.documentElement.scrollTop +
    document.body.scrollTop) /
    (document.documentElement.scrollHeight +
    document.documentElement.clientHeight
    )
  );

  // Length to offset the dashes
  let drawLength = pathLength + scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
})