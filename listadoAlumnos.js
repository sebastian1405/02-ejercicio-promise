const fs = require("fs");

const obj = {};
obj.students = [];
for (let i = 1; i <= 5; i++) {
  fs.readFile(`./files/alumnos${i}.json`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      a = JSON.parse(data);
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
