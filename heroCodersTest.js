
function getAreaOfCircle(radius) {
    return  Math.PI * Math.pow(radius, 2);
}

const circle = getAreaOfCircle(5);

console.log("circle: ", circle);
// technically its units squared but I think the above works just fine for now.

function checkFirstCapitalLetter(stringToTest) {
    const capTestRegex = /[A-Z]/;
    const answer = capTestRegex.test(stringToTest[0]);
    return answer;
}

const foundCapital = checkFirstCapitalLetter("Apple");
console.log("foundCapital: ", foundCapital);

const noCapital = checkFirstCapitalLetter("apple");
console.log("noCapital: ", noCapital);