const submitAlbum = (e) => {
  e.preventDefault();

  document.getElementById("results").classList.remove("hidden");

  const form = document.getElementById("form-album");
  const albumName = form.elements["album-name"].value;
  const imgName = form.elements["img_name"].value;
  const bandName = form.elements["band_name"].value;
  const link = form.elements["link"].value;
  const description = form.elements["description"].value;
  const termsChecked = form.elements["terms"].checked;

  console.log(albumName);
  console.log(getRadioValue("size"));
  console.log(link);
  console.log(termsChecked);
};

const getRadioValue = (radioName) => {
  let radios = document.getElementsByName(radioName);

  for (let i in radios) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return "";
};

document.getElementById("form-album").onsubmit = submitAlbum;
