class Character {
  constructor(title, level, stats, weapons, armor, quote, build, pic) {
    this.title = title;
    this.level = level;
    this.stats = stats;
    this.weapons = weapons;
    this.armor = armor;
    this.quote = quote;
    this.build = build;
    this.pic = pic;
  }

  get sect() {
    const section = document.createElement("section");
    section.classList.add("character");

    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    section.append(h3);

    const imageSection = document.createElement("section");
    section.append(imageSection);
    imageSection.append(this.picture(this.pic));

    return section;
  }

  get expandedSect() {
    const exSection = document.createElement("section");
    exSection.classList.add("character");

    const columns = document.createElement("section");
    columns.classList.add("columns");
    exSection.append(columns);

    const textSection = document.createElement("section");
    textSection.classList.add("one");
    textSection.innerHTML =
      "Class: " +
      this.title +
      "<br>" +
      "<br>" +
      "Starting Level:" +
      "  " +
      this.level +
      "<br>" +
      "<br>" +
      "Starting Stats:" +
      "  " +
      this.stats +
      "<br>" +
      "<br>" +
      "Starting Weapons:" +
      "  " +
      this.weapons +
      "<br>" +
      "<br>" +
      "Starting Armor:" +
      "  " +
      this.armor +
      "<br>" +
      "<br>" +
      "Quote: " +
      this.quote +
      "<br>" +
      "<br>" +
      "Recommended Build:" +
      "  " +
      this.build;

    columns.append(textSection);

    return exSection;
  }

  picture(info) {
    const pic = document.createElement("img");
    pic.src = "images/" + info;
    return pic;
  }
}

const characters = [];
characters.push(
  new Character(
    "Hero",
    7,
    "V:14, M:9, E:12, S:16, D:9, I:7, F:8, A:11",
    "Battle Axe, Large Leather Shield",
    "Headband, Pauldron, Bracers, Gaiters",
    "A stalwart Hero, at home with a battleaxe, descended from a badlands chieftain",
    "Pure Strength",
    "heroClass.jpg"
  )
);
characters.push(
  new Character(
    "Bandit",
    5,
    "V:10, M:11, E:10, S:9, D:13, I:9, F:8, A:14",
    "Great Knife, Shortbow, Bone Arrows, Buckler",
    "Mask, Garb, Manchettes, Boots",
    "A dangerous bandit who strikes for weak points. Excels at ranged combat.",
    "Dexterity/Arcane",
    "banditClass.jpg"
  )
);
characters.push(
  new Character(
    "Astrologer",
    6,
    "V:9, M:15, E:9, S:8, D:12, I:16, F:7, A:9",
    "Glintstone Pebble&Arc, Short Sword, Staff, Wooden Shield",
    "Hood, Robe, Gloves, Trousers",
    "A scholar who reads fate in the stars. Heir to the school of glintstone sorcery.",
    "Pure Intelligence",
    "astroClass.jpg"
  )
);
characters.push(
  new Character(
    "Prophet",
    7,
    "V:10, M:14, E:8, S:11, D:10, I:7, F:16, A:10",
    "Heal, Catch Flame, Short Spear, Finger Seal, Shield",
    "Blindfold, Robe, Trousers",
    "A seer ostracized for inauspicious prophecies. Well versed in healing incantations.",
    "Faith/Dexterity",
    "prophetClass.jpg"
  )
);
characters.push(
  new Character(
    "Samurai",
    9,
    "V:12, M:11, E:13, S:12, D:15, I:9, F:8, A:8",
    "Uchigatana, Longbow, Roundshield",
    "Helm, Armor, Gauntlets, Greaves",
    "A capable fighter from the distant land of reeds. Handy with Katana and Longbows.",
    "Pure Dexterity",
    "samuraiClass.jpg"
  )
);
characters.push(
  new Character(
    "Wretch",
    1,
    "V:10, M:10, E:10, S:10, D:10, I:10, F:10, A:10",
    "Club",
    "None",
    "As poor, purposeless and naked as the day they were born. A nice club is all they have.",
    "PvP optimization",
    "wretchClass.jpg"
  )
);

characters.forEach((character) => {
  const charList = document.getElementById("char-list");
  const characterSection = character.sect;
  characterSection.character = character;
  charList.append(characterSection);
});

//https://www.w3schools.com/w3css/w3css_modal.asp
document.querySelectorAll("section").forEach((section) => {
  section.onclick = (e) => {
    const character = e.currentTarget.character;
    const dialog = document.getElementById("dialog");

    dialog.style.display = "block";

    document.querySelector("#dialog-content img").src =
      e.currentTarget.querySelector("img").src;

    const dialogDetails = document.querySelector("#dialog-details");

    dialogDetails.innerHTML = "";
    dialogDetails.append(character.expandedSect);
  };
});
