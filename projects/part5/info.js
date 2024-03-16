const getJson = async () => {
  const url = "songs.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showInfo = async () => {
  let info = await getJson();
  let infoSection = document.getElementById("info-section");

  let index = infoSection.getAttribute("index-id");
  let album = info[index];

  infoSection.append(getInfo(album));
};

const getInfo = (album) => {
  let superSection = document.createElement("section");

  let head = document.createElement("section");

  let h1 = document.createElement("h1");
  h1.innerText = album.album_name;
  let h2 = document.createElement("h2");
  h2.innerText = "By:  " + album.band_name;

  head.append(h1);
  head.append(h2);
  superSection.append(head);

  let section = document.createElement("section");
  section.setAttribute("id", "infoSection");
  section.setAttribute("class", "columns");
  section.classList.add("album");

  let img = document.createElement("img");
  img.src = "images/" + album.img_name;
  section.append(img);

  const iframe = document.createElement(`iframe`);
  iframe.src = album.link;
  iframe.width = "80%";
  iframe.height = "80%";
  iframe.title = "Dynamic Iframe";
  section.append(iframe);

  let h3 = document.createElement("h3");
  h3.innerText =
    "Album : " +
    album.album_name +
    "\n\nBand Name: " +
    album.band_name +
    "\n\nDescription: " +
    album.description +
    "\n\n";
  for (let [role, name] of Object.entries(album.band_members)) {
    h3.append(`${role}:  ${name}`);
    h3.appendChild(document.createElement("br"));
  }
  section.append(h3);

  superSection.append(section);

  let section2 = document.createElement("section");
  section2.setAttribute("class", "columns");
  let songsSection = document.createElement("section");

  let songs = Object.values(album.song_list);
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
