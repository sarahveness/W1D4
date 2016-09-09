var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//sort by name
students.sort(function(a, b) {

  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }

  //names are the same
  if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  }

  return 0;//names are the same and the ages are the same

});

console.log(students);