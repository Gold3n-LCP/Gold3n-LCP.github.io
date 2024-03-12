const getHouses = async () => {
  const url = "https://portiaportia.github.io/json/house-plans.json";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const showHouses = async () => {
  let houses = await getHouses();
  let housesSection = document.getElementById("houses");
  houses.forEach((house) => housesSection.append(getHouse(house)));
};

const getHouse = (house) => {
  let section = document.createElement("section");
  section.classList.add("house");

  let h1 = document.createElement("h1");
  h1.innerText = house.name;
  section.append(h1);

  let h3 = document.createElement("h3");
  h3.innerText =
    "Size: " +
    house.size +
    "\n\nBedrooms: " +
    house.bedrooms +
    "\n\nBathrooms: " +
    house.bathrooms +
    "\n";
  for (let feature in house.features) {
    h3.append(feature);
    console.log(feature);
  }
  section.append(h3);

  let img = document.createElement("img");
  img.src =
    "https://portiaportia.github.io/json/images/house-plans/" +
    house.main_image;
  console.log(img.src);
  section.append(img);

  return section;
};

showHouses();
