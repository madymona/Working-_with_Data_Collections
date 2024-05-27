// Part_1 Refactoring

const csv ='ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
const rows = csv.split('\n')

// for (row of rows) {
//   const cells = row.split(',');
//   const cell1 = cells[0];
//   const cell2 = cells[1];
//   const cell3 = cells[2];
//   const cell4 = cells[3];
//   console.log(cell1, cell2, cell3, cell4);
// }

// Part_2 Initializing  two-dimensional array

const dataArray = []

// for (let row of rows) {
// dataArray.push(row.split(','));
// }
// console.log(dataArray)

// part_3 Transforming Data


// Spliting the first row to get the headings
let headings = rows[0].split(',')

// Converting headings to lowercase
for (let i = 0; i < headings.length; i++) {
  headings[i] = headings[i].toLowerCase()
}

//spliting the current row into values and crete empty object
for (let i = 1; i < rows.length; i++) {
  const row = rows[i].split(',')
  const obj = {}
  
  // Assigning the value to the object with the heading as the key
  for (let j = 0; j < row.length; j++) {
    obj[headings[j]] = row[j]
  }
  dataArray.push(obj)  //Add the object to the dataArray
}

console.log(dataArray)

// part_4 Sorting and Manipulating Data
dataArray.pop()
dataArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
dataArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(dataArray)

//part_5 Transforming  the final set of data back into CSV format

let csvResult = headings.join(',') + '\n'

for (let i = 0; i < dataArray.length; i++) {
  const row = []
  for (let j = 0; j < headings.length; j++) {
    row.push(dataArray[i][headings[j]])
  }
  csvResult += row.join(',') + '\n'
}

console.log(csvResult)




