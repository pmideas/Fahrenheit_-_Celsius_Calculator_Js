var button = document.getElementById("form").addEventListener("submit", function (e) {
	e.preventDefault()
	// console.log("clicked")
	var textinput = Number(document.getElementById("textinput").value);
	var selection = document.getElementById("selection");

	var selection = selection.options[selection.selectedIndex].value;
	// console.log(selection)


	if (selection === "fahrenheit") {
		let output = Math.round((textinput - 32) * 5 / 9);
		document.getElementById("demo").innerHTML = output + '°' + 'fahrenheit';

	} else if (selection === "celsius") {
		let output = Math.round(textinput * (9 / 5) + 32);
		document.getElementById("demo").innerHTML = output + '°' + 'celsius';
	} else {
		document.getElementById("demo").innerHTML = "please enter a number";
	}
	var textinput = document.getElementById("textinput").value = ""

})