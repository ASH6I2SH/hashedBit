const text = document.getElementById("text-container");
const colorInput = document.getElementById("colorbox");
const colorBtn = document.getElementById("colorchange");
const fontSizeSlider = document.getElementById("fontsize");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
const fontSelect = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssOutput = document.getElementById("css-props");

// Change color
colorBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();
  if (color) {
    text.style.color = color;
  }
});

// Change font size
fontSizeSlider.addEventListener("input", () => {
  text.style.fontSize = fontSizeSlider.value + "px";
});

// Toggle italic
italicBtn.addEventListener("click", () => {
  text.style.fontStyle =
    text.style.fontStyle === "italic" ? "normal" : "italic";
});

// Toggle underline
underlineBtn.addEventListener("click", () => {
  text.style.textDecoration =
    text.style.textDecoration === "underline" ? "none" : "underline";
});

// Toggle bold
boldBtn.addEventListener("click", () => {
  text.style.fontWeight =
    text.style.fontWeight === "bold" ? "normal" : "bold";
});

// Change font family
fontSelect.addEventListener("change", () => {
  text.style.fontFamily = fontSelect.value;
});

// Get and display applied CSS styles
getStyleBtn.addEventListener("click", () => {
  const computed = window.getComputedStyle(text);
  const color = text.style.color || computed.color;
  const fontSize = text.style.fontSize || computed.fontSize;
  const fontStyle = text.style.fontStyle || computed.fontStyle;
  const fontWeight = text.style.fontWeight || computed.fontWeight;
  const textDecoration =
    text.style.textDecoration || computed.textDecorationLine;
  const fontFamily = text.style.fontFamily || computed.fontFamily;

  let cssString = "";

  if (color) cssString += `color: ${color}; `;
  if (textDecoration !== "none")
    cssString += `text-decoration: ${textDecoration}; `;
  if (fontStyle === "italic") cssString += `font-style: italic; `;
  if (fontWeight === "bold" || parseInt(fontWeight) >= 700)
    cssString += `font-weight: bold; `;
  if (fontSize) cssString += `font-size: ${parseInt(fontSize)}px; `;
  if (fontFamily) cssString += `font-family: ${fontFamily.split(",")[0]};`;

  cssOutput.textContent = cssString.trim();
});
