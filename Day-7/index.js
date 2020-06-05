const peoples = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks

// Array.prototype.some()
const anyAdult = peoples.some(people => (new Date()).getFullYear() - people.year > 18);
console.log(anyAdult);

// Array.prototype.every()
const allAdult = peoples.every(people => (new Date()).getFullYear() - people.year > 18);
console.log(allAdult);

// Array.prototype.find()
const find = comments.find(comment => comment.id === 2039842);
console.log(find);

// Array.prototype.findIndex()
const elemIndex = comments.findIndex(comment => comment.id === 2039842);
console.log(elemIndex);

// Array.prototype.splice()
comments.splice(elemIndex, 1)
console.table(comments);