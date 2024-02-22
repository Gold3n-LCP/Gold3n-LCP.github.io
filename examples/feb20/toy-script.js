let toys = ["drums", "ball", "rope", "ballon", "tire"];
let toyPrice = [];
toyPrice["barbie"] = 7.54;
toyPrice["doll house"] = 84.9;
toyPrice["slide"] = 129.32;
toyPrice["ken"] = 2.3;
toyPrice["bike"] = 409.76;

const showToys = () => {
  const resultDiv = document.getElementById("result");

  /*for (let i in toys) {
    console.log(toys[i]);
  }*/

  toys.forEach((toy) => {
    const p = document.createElement("p");
    p.innerHTML = toy;
    resultDiv.append(p);
  });
};

const addToy = () => {
  const toy = document.getElementById("txt-toy").ariaValueMax;
  toys.push(toy);
  showToys;
};

const showToysTable = () => {
  const toyTable = document.getElementById("toy-table");

  for (let toy in toyPrice) {
    const tr = document.getElementById("tr");
    const td = document.getElementById("td");
    td.innerHTML = toy;
    tr.append(td);
    toyTable.append(tr);

    tr.onclick = showPrice.bind(null, toy);
  }
};

const showPrice = (toy) => {};
showToys();
document.getElementById("button-add-toy").onclick = addToy;

showToysTable();
