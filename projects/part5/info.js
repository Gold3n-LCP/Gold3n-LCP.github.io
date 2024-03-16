const getInfo = async () => {
  const url = "json/songs.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showInfo = async () => {
  let info = await getInfo();
  let infoSection = document.getElementById("info");
  info.forEach((album) => infoSection.append(getInfo(album)));
};

const getinfo = (album) => {
  let superSection = document.createElement("section");
  superSection.setAttribute("id", "superSection");

  let head = document.createElement("section");
  head.classList.add("album");

  let h1 = document.createElement("h1");
  h1.innerText = album.name;
  head.append(h1);
  superSection.append(head);

  let section = document.createElement("section");
  section.setAttribute("id", "infoSection");
  section.setAttribute("class", "columns");
  section.classList.add("album");

  let img = document.createElement("img");
  img.src = "images/" + info.img_name;
  section.append(img);

  let h3 = document.createElement("h3");
  h3.innerText =
    "Album : " +
    album.album_name +
    "\n\nBand Name: " +
    album.band_name +
    "\n\nDescription: " +
    album.description +
    "\n\n";
  album.band_members.forEach((member) => {
    h3.append("* " + member + " ");
    console.log(member);
  });
  section.append(h3);

  superSection.append(section);

  let section2 = document.createElement("section");
  section2.setAttribute("class", "columns");
  let songsSection = document.createElement("section");

  let songs = album.song_list;
  songs.forEach((song) => {
    let songsSection = document.createElement("div"); // Create a new div for each floorPlan
    //songsSection.classList.add("level-section");

    let h1 = document.createElement("h1");
    h1.innerText = song;
    songsSection.append(h1);
  });

  superSection.append(section2);
  console.log(superSection);

  return superSection;
};

showInfo();
