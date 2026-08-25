// Printing out different departments and the different people in them.
// I will create an array which contains objects and loop through it to find those in thesame department. When looping, if the department of one person has not been defined, it's going to be defined and the person's name will be placed in that department but if the department had been defined, the person's name will be placed in that department and the result will be printed.
//The challenge I think I will face will be to access one object at a time and add them to their departments
let people =[
    {name : "ferd", department : "Software Engineering"},
    {name : "Blessing", department : "Data science"},
    {name : "Bless", department : "Software Engineering"},
    {name : "Miriam", department : "Medcine"},
    {name : "Brian", department : "Medcine"}
];
const departments = {};
for (let person of people) {
    if (!departments[person.department]) {
        departments[person.department] = [];
    }
    departments[person.department].push(person.name);
};
console.log(departments);

//Printing out items with cost greater than 500.
//I will create an array containing objects and loop through it to find items with cost greater than 500 and store the names of the items in a variable and print it out.
//The challenge I think I will face will be to access one object at a time and to check their cost.
let foodstuff =[
    {Items: "Tomatoes", cost : 700},
    {Items: "Onions", cost : 300},
    {Items: "Ginger", cost : 500},
    {Items: "Groundnut", cost : 750},
    {Items: "Beans", cost : 800}
];
const expensiveItems = foodstuff.filter(item => item.cost > 500).map(item => item.Items);
console.log(expensiveItems)

//Printing out items with thesame cost of 1000.
//I will create an array containing objects and loop through it to find items with thesame cost of 1000 store the names of the items in a variable and print it out.
let items =[
    {Items: "Tomatoes", cost : 1000},
    {Items: "Onions", cost : 300},
    {Items: "Ginger", cost : 500},
    {Items: "Groundnut", cost : 1000},
    {Items: "Beans", cost : 1000}
];
const rareItems = items.filter(item => item.cost === 1000).map(item => item.Items);
console.log(rareItems)
