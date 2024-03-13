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
  let superSection = document.createElement("section");
  superSection.setAttribute("id", "superSection");

  let head = document.createElement("section");
  head.classList.add("house");

  let h1 = document.createElement("h1");
  h1.innerText = house.name;
  head.append(h1);
  superSection.append(head);

  let section = document.createElement("section");
  section.setAttribute("id", "infoSection");
  section.setAttribute("class", "columns");
  section.classList.add("house");

  let img = document.createElement("img");
  img.src =
    "https://portiaportia.github.io/json/images/house-plans/" +
    house.main_image;
  section.append(img);

  let h3 = document.createElement("h3");
  h3.innerText =
    "Size: " +
    house.size +
    "\n\nBedrooms: " +
    house.bedrooms +
    "\n\nBathrooms: " +
    house.bathrooms +
    "\n\n";
  house.features.forEach((feat) => {
    h3.append("* " + feat + " ");
    console.log(feat);
  });
  section.append(h3);

  superSection.append(section);

  let section2 = document.createElement("section");
  section2.setAttribute("class", "columns");
  let levelSection = document.createElement("section");

  let floorPlans = house.floor_plans;
  floorPlans.forEach((floorPlan) => {
    let levelSection = document.createElement("div"); // Create a new div for each floorPlan
    levelSection.classList.add("level-section");

    let h1 = document.createElement("h1");
    h1.innerText = floorPlan.name;
    levelSection.append(h1);

    let img = document.createElement("img");
    img.src =
      "https://portiaportia.github.io/json/images/house-plans/" +
      floorPlan.image;
    levelSection.append(img);
    section2.append(levelSection);
  });

  superSection.append(section2);
  console.log(superSection);

  return superSection;
};

showHouses();
