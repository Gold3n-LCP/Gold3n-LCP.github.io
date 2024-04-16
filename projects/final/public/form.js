const submitAlbum = (e) => {
  e.preventDefault();

  const results = document.getElementById("results");
  results.classList.remove("hidden");

  const form = document.getElementById("form-album");
  const albumName = form.elements["album-name"].value;

  const imgInput = document.getElementById("img");
  const imgFile = imgInput.files[0]
    ? imgInput.files[0].name
    : "No Image Selected";

  const bandName = form.elements["band-name"].value;
  const link = form.elements["link"].value;
  const date = form.elements["release-date"].value;
  const songs = getSongs();
  const genre = getRadioValue();
  const members = getMembers();
  const description = form.elements["description"].value;
  const termsChecked = form.elements["terms"].checked;

  results.innerHTML = "SUCCESS! Thank you for submitting an album";
  setTimeout(() => {
    results.innerHTML = "album" + albumName;
    results.append(document.createElement("br"));
    results.append(document.createElement("br"));
    results.append("band" + bandName);
    results.append(document.createElement("br"));
    results.append(document.createElement("br"));
    members.forEach((member) => {
      results.append(`${member.name} (${member.instrument})`);
      results.append(document.createElement("br"));
    });
    results.append(document.createElement("br"));
    results.append(date);
    results.append(document.createElement("br"));
    results.append(document.createElement("br"));
    results.append(genre);
    results.append(document.createElement("br"));
    results.append(document.createElement("br"));
    results.append(link);
    results.append(document.createElement("br"));
    results.append(document.createElement("br"));
    songs.forEach((song) => {
      results.append(song);
      results.append(document.createElement("br"));
    });
    results.append(document.createElement("br"));
    results.append(imgFile);
    results.append(document.createElement("br"));
    results.append(document.createElement("br"));
    results.append(description);
    results.append(document.createElement("br"));
    results.append(document.createElement("br"));
    results.append(termsChecked);
  }, 2000);
};

const getRadioValue = (radioName) => {
  let radios = document.getElementsByName(radioName);

  let selectedValue = "";

  // Loop through each radio button in the NodeList
  radios.forEach((radio) => {
    if (radio.checked) {
      selectedValue = radio.value;
    }
  });

  return selectedValue;
};

const getSongs = () => {
  const songList = document.querySelectorAll("#song-list input[type='text']");
  let songs = [];

  songList.forEach((songInput) => {
    songs.push(songInput.value);
  });

  return songs;
};

const setupSongButtons = () => {
  const addSongBtn = document.getElementById("add-song-btn");
  const removeSongBtn = document.getElementById("remove-song-btn");
  const songList = document.getElementById("song-list");
  let songCount = songList.children.length; // Initial song count based on existing inputs

  addSongBtn.addEventListener("click", function () {
    const newSongInput = document.createElement("input");
    newSongInput.type = "text";
    newSongInput.name = `song-${songCount}`;
    newSongInput.placeholder = "Enter song name";
    newSongInput.required = true; // HTML5 form validation

    songList.appendChild(newSongInput);
    songCount++;
  });

  removeSongBtn.addEventListener("click", function () {
    if (songCount > 1) {
      songList.removeChild(songList.lastElementChild);
      songCount--;
    }
  });
};

const getMembers = () => {
  const memberList = document.querySelectorAll(
    "#member-list input[name^='member']"
  );
  const instrumentList = document.querySelectorAll(
    "#member-list input[name^='instrument']"
  );
  let members = [];

  memberList.forEach((memberInput, index) => {
    const memberName = memberInput.value;

    if (index < instrumentList.length) {
      const instrument = instrumentList[index].value;
      members.push({ name: memberName, instrument: instrument });
    } else {
      // Handle case where instrument data is missing
      members.push({ name: memberName, instrument: "Unknown" });
    }
  });

  return members;
};
const setupMemberButtons = () => {
  const addMemberBtn = document.getElementById("add-member-btn");
  const removeMemberBtn = document.getElementById("remove-member-btn");
  const memberList = document.getElementById("member-list");
  let memberCount = memberList.children.length / 2; // Initial song count based on existing inputs

  addMemberBtn.addEventListener("click", function () {
    const newMemberInput = document.createElement("input");
    newMemberInput.type = "text";
    newMemberInput.name = `member-${memberCount + 1}`;
    newMemberInput.placeholder = "Enter member name";
    newMemberInput.required = true; // HTML5 form validation

    const newInstrumentInput = document.createElement("input");
    newInstrumentInput.type = "text";
    newInstrumentInput.name = `instrument-${memberCount + 2}`;
    newInstrumentInput.placeholder = "Enter instrument";
    newInstrumentInput.required = true; // HTML5 form validation
    memberList.append(document.createElement("br"));
    memberList.append(memberCount + 0.5);
    memberList.appendChild(newMemberInput);
    memberList.appendChild(newInstrumentInput);
    memberCount++;
  });

  removeMemberBtn.addEventListener("click", function () {
    if (memberCount > 1) {
      memberList.removeChild(memberList.lastElementChild);
      memberList.removeChild(memberList.lastElementChild);
      memberCount--;
    }
  });
};

setupMemberButtons();
setupSongButtons();
document.getElementById("form-album").onsubmit = submitAlbum;
