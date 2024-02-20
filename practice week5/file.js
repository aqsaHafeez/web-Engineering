//array
var colors = ["red", "green", "blue"];
console.log(colors)
colors.push("black")
console.log(colors)
colors.pop()
console.log(colors)
colors.shift()
console.log(colors)
colors.unshift("ice-blue")
console.log(colors)

var light_colors = ["light blue", "light pink"]
var concat_colors = colors.concat(light_colors)

console.log(concat_colors)

var last_index = concat_colors.lastIndexOf("light blue")
console.log(last_index)

var index = concat_colors.indexOf("light blue")
console.log(index)

//object:
var person = {
    name: "John", age: 30, city: "New York" }

console.log(person.name)
console.log(person.age)
console.log(person.city)

var keys = Object.keys(person);
console.log(keys)

var val = Object.values(person);
console.log(val)

var entries = Object.entries(person);
console.log(entries)

var target={
    a:1,b:3, d:8
};
var source1={
    b:5, d:3
};
var source2={
    c:3, d:5
};
Object.assign(target, source1, source2);

console.log(target);

