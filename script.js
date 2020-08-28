var input = document.querySelectorAll("input");
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("input", function () {
    var red = document.getElementById("red").value,
      green = document.getElementById("green").value,
      blue = document.getElementById("blue").value;
    var display = document.getElementById("display");
    display.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    outputValue(Number(red), Number(green), Number(blue));
  });
  const outputValue = (r, g, b) => {
    red = r;
    green = g;
    blue = b;
    const hex = document.querySelector(".hex");
    const rgb = document.querySelector(".rgb");
    hex.textContent = convertToHex(r, g, b);
    rgb.textContent = `(${r},${g},${b})`;
    return hex;
  };
  // rgb para hex
  const convertToHex = (r, g, b) => {
    let result =
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return result;
  };
}
