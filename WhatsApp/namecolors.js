function selectColor(colorNum, colors)
{
    if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
    return "hsl(" + (colorNum * (360 / colors) % 360) + ",90%,45%)";
}

function getColorName(name, i, len)
{
  let newLine = document.createElement("span");
  newLine.textContent = name;
  newLine.style.color = selectColor(i, len);
  newLine.style.fontWeight = "bold";
  newLine.style.display = "block";
  
  newLine.style.filter = "hue-rotate(-30deg)";
  return (newLine);
}

var items = new Object();
var outgoing_sections = document.querySelectorAll(".in[name]");

//get all names
for (let i = 0; i < outgoing_sections.length; i++) {
  let name = outgoing_sections[i].getAttributeNode("name").value;
  if (!items[name]) {
    items[name] = undefined;
  }
}

// names to colors
var len = Object.keys(items).length;
var i = 0;

Object.keys(items).forEach(function(k){
      items[k] = getColorName(k, i++, len);
});

console.log(items);

//set names
for (let i = 0; i < outgoing_sections.length; i++) {
  let name = outgoing_sections[i].getAttributeNode("name").value;
  let where = outgoing_sections[i].querySelector(":scope dd:first-of-type");
  where.prepend(items[name].cloneNode(true));
}
