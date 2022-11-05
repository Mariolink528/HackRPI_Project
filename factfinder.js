
facts = ["Due to a lack of atmosphere, there is no sound in space.",
 "99% of the solar system's mass is in the sun.",
 "On mars, a sunset would look blue.",
 "A year on Venus is 18 earth days less than a day on Venus is.",
 "Halley's comet won't appear until 2061.",
 "The footprint on the moon could stay for millions of years due to a lack of atmosphere on the moon.",
 "If two pieces of the same metal touch in space, they will permanently bond.",
 "Floating water has been found in space.",
 "The largest asteroid is 600 miles wide.",
 "There's a theory that the moon was originally part of the earth.",
 "There is a volcano on mars three times the size of Mt. Everest.",
 "Saturn has 82 known moons.",
 "Jupiter is the same materials as the sun, meaning it is likely a failed star.",
 "Uranus orbits on its side.",
 "The most similar in size moon to its planet is Charon and Pluto, meaning they could be two orbiting dwarf planets.",
 "At the moment, there are five recognized dwarf planets in the solar system.",
 "Enceladus, one of Saturn's moons, is the most reflective known body in the solar system.",
 "There are more stars in the universe than grains of sand on earth.",
 "In five billion years, the sun will engulf the earth.",
 "Light from stars can be from up to years ago.",
 "The sun's light takes 8.5 minutes to reach earth. This means the sun could have exploded and you wouldn't know yet.",
 "Galaxies are spiral, elliptical, or irregular.",
 "There are 2,000,000,000,000 galaxies in the observable universe.",
 "There are black holes in the centers of most galaxies.",
 "The boundary of the solar system ends in a spherical cloud known as the Oort cloud.",
 "The International space station is about as wide as a soccer field.",
 "Astronauts grow taller while in space.",
 "The closest star system is 4.25 light years away.",
 "Shooting stars are burning space debris.",
 "Space is cold, at -454.75 °F (-270.42 °C)."
];
i = facts.length;
j = Math.floor(Math.random()*i);
k = facts[j];
document.getElementById("fact").innerHTML = k;
