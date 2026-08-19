let fellows = [
    {
        name: "Ferd",
        role: "Leader",
        points: 100
    },
    {
        name: "Blessing",
        role: "Worker",
        points: 85
    },
    {
        name: "Bless",
        role: "Worker",
        points: 90
    },
    {
        name: "Brian",
        role: "Worker",
        points: 70
    },
    {
        name: "Agu",
        role: "Worker",
        points: 76
    }
];
let named = ""
let roles = ""
let point = 0
for (let person of fellows) {
    named = person.name
    roles = person.role
    point = person.points
    console.log("My name is " + named + " and I am a " + roles + " with " + point + " points")
}
