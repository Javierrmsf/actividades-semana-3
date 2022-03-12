var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
//adding canis major to the beginning of the array

constellations.unshift("Canis Major")
console.log(constellations)

//removing venus from the end of the array

planets.pop()
console.log(planets)

//creating galaxy array and joining planets and constellations

var Galaxy = planets.concat(constellations)
console.log(Galaxy)

//Polaris in capital letters stored in a new variable
var capitalletterspolaris = star.toUpperCase()
console.log(capitalletterspolaris)