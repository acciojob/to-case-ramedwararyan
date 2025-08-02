function toCase(text) {
  // write your code here
	if (text.length === 0) return "-";
  
  // Convert to lowercase and uppercase and join with '-'
  return text.toLowerCase() + "-" + text.toUpperCase();
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
