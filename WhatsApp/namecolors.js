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

function extractNames(outgoing_sections)
{
	var items = new Object();
	outgoing_sections.forEach(function(element){
		let name = element.getAttributeNode("name").value;
		if (!items[name]) {
			items[name] = undefined;
		}
	});
	return (items);
}

function setNames(outgoing_sections, items)
{
	outgoing_sections.forEach(function(element){
		let name = element.getAttributeNode("name").value;
		let where = element.querySelector(":scope dd:first-of-type");
		where.prepend(items[name].cloneNode(true));
	});
}

document.addEventListener("DOMContentLoaded", function(){
	var outgoing_sections = document.querySelectorAll(".whatsapp.grouptext .in[name]");
	var items = extractNames(outgoing_sections);

	// names to colors
	var len = Object.keys(items).length;
	Object.keys(items).forEach(function(k, index){
				items[k] = getColorName(k, index, len);
	});
	
	setNames(outgoing_sections, items);
})
