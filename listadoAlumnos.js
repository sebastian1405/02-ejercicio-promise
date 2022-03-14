const fs = require("fs");
const obj = {};
obj.students = [];
const alumnos = new Promise((resolve, reject) => {
  for (let i = 1; i <= 5; i++) {
    fs.readFile(`./files/alumnos${i}.json`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        a = resolve(JSON.parse(data));
        obj.students.push(a);
        json = JSON.stringify(obj, null, 2);
        fs.writeFile("./files/listadoAlumnos.json", json, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }
});

// const obj = {};
// obj.students = [];
// {
//   fs.readFile(`./files/alumnos${i}.json`, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       a = JSON.parse(data);
//       obj.students.push(a);
//       json = JSON.stringify(obj, null, 2);
//       fs.writeFile("./files/listadoAlumnos.json", json, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     }
//   });
// }
