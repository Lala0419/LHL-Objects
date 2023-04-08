const raisinAlarm = function (cookie) {
	let result = cookie.includes("🍇");
	if (result) {
		return "Raisin alert!";
	}
	return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"])); //Raisin alert!
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"])); //Raisin alert!
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); //All good!

//STRETCH
const raisinAlarmArray = function (cookies) {
	result = [];
	for (let i = 0; i < cookies.length; i++) {
		let raisins = cookies[i].includes("🍇");
		if (raisins) {
			result.push("Raisin alert!");
		} else {
			result.push("All good!");
		}
	}
	return result;
};

console.log(
	raisinAlarmArray([
		["🍫", "🍫", "🍇", "🍫"],
		["🍫", "🍇", "🍫", "🍫", "🍇"],
		["🍫", "🍫", "🍫"],
	])
); //["Raisin alert!", "Raisin alert!", "All good!"]
