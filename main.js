let blu = document.getElementById("f1");
let brg = document.getElementById("f2");
let con = document.getElementById("f3");
let grs = document.getElementById("f4");
let hur = document.getElementById("f5");
let saR = document.getElementById("f6");
let sep = document.getElementById("f7");

let up = document.getElementById("up");
let img = document.querySelector("#mImg");

let can = document.querySelector("canvas");
let conT = can.getContext("2d");

up.onchange = () => {
  let file = new FileReader();
  file.readAsDataURL(up.files[0]);
  file.onload = () => {
    reset();
    img.src = file.result;
  };
  img.onload = () => {
    can.width = img.width;
    can.height = img.height;
    conT.drawImage(img, 0, 0, can.width, can.height);
    img.style.display = "none";
    can.style.display = "block";
  };
};

let filters = document.querySelectorAll(".filter-side input");
filters.forEach((f) => {
  f.addEventListener("input", () => {
    conT.filter = `
    blur(${blu.value}px)
    brightness(${brg.value}%)
    contrast(${con.value}%)
    grayscale(${grs.value})
    hue-rotate(${hur.value}deg)
    saturate(${saR.value}%)
    sepia(${sep.value}%)
    `;
    conT.drawImage(img, 0, 0, can.width, can.height);
  });
});
function reset() {
  conT.filter = "none";
  saR.value = "100";
  blu.value = "0";
  sep.value = "0";
  grs.value = "0";
  con.value = "100";
  brg.value = "100";
  hur.value = "0";
  conT.drawImage(img, 0, 0, can.width, can.height);
}
let donV = document.getElementById("donV");
donV.onclick = () => {
  donV.href = can.toDataURL("image/jpeg");
};
