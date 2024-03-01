class Dog {
  constructor(title, breed, color, age, size, pic) {
    this.title = title;
    this.breed = breed;
    this.color = color;
    this.age = age;
    this.size = size;
    this.pic = pic;
  }

  get item() {
    const section = document.createElement("section");
    section.classList.add("dog");

    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    section.append(h3);

    const arrow = document.createElement("a");
    arrow.href = "#";
    arrow.innerHTML = "&#x2945;";
    arrow.classList.add("arrow");
    h3.append(arrow);
    arrow.onclick = this.expandContract;

    const columns = document.createElement("section");
    columns.classList.add("columns");
    section.append(columns);

    const imageSection = document.createElement("section");
    columns.append(imageSection);
    const image = document.createElement("img");
    image.src = "images/" + this.pic;
    imageSection.append(image);

    const moreSection = document.createElement("section");
    //moreSection.classList.add("hidden", "more");
    moreSection.append(this.paragraph("Breed", this.breed));
    moreSection.append(this.paragraph("Color", this.color));
    moreSection.append(this.paragraph("Age", this.age));
    columns.append(moreSection);

    return section;
  }

  expandContract(e) {
    const section = e.currentTarget
      .closest("section .dog")
      .querySelector("more");

    if (section.classList.contains("hidden")) {
      e.currentTarget.innerHTML = "&#x2956;";
    } else {
      e.currentTarget.innerHTML = "&#x2945;";
    }
  }

  paragraph(title, info) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${title}:</strong> ${info}`;
    return p;
  }
}

const dogs = [];
dogs.push(new Dog("CoCo", "Yorkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(
  new Dog(
    "Braxter",
    "Golden Retriever",
    "Yellow",
    1,
    "medium",
    "golden-retriever.jpg"
  )
);
dogs.push(new Dog("Gerald", "Pit Bull", "white", 3, "large", "pitt-bull.jpg"));

dogs.forEach((dog) => {
  document.getElementById("dog-list").append(dog.item);
});
