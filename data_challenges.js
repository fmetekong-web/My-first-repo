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

let foodstuff =[
    {Items: "Tomatoes", cost : 700},
    {Items: "Onions", cost : 300},
    {Items: "Ginger", cost : 500},
    {Items: "Groundnut", cost : 750},
    {Items: "Beans", cost : 800}
];
const expensiveItems = foodstuff.filter(item => item.cost > 500).map(item => item.Items);
console.log(expensiveItems)

let items =[
    {Items: "Tomatoes", cost : 1000},
    {Items: "Onions", cost : 300},
    {Items: "Ginger", cost : 500},
    {Items: "Groundnut", cost : 1000},
    {Items: "Beans", cost : 1000}
];
const rareItems = items.filter(item => item.cost === 1000).map(item => item.Items);
console.log(rareItems)
