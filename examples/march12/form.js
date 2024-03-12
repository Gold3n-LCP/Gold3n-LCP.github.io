const submitRacoonForm = (e) => {
  e.preventDefault(); //Dont refresh the page

  const form = e.target;
  const racoonName = form.elements["raccoon-name"].value;
  const demeanor = form.elements["demeanor"].value;
  const termsChecked = form.elements["terms"].checked;
  const size = getRadioValue("size");
  console.log(racoonName);
  console.log(demeanor);
  console.log(termsChecked);
  console.log(size);
};

const getRadioValue = (radioName) => {
  const radios = document.getElementsByName(radioName);
  for (let i in radios) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return "";
};

document.getElementById("form-raccoon").onsubmit = submitRacoonForm;
