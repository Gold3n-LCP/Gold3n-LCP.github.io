let array = [
  {
    image: `images/golden.jpg`,
    source: {
      url: `https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4`,
      text: `Image by vecstock on Freepik`,
    },
  },

  {
    image: `images/mountain-lake.jpg`,
    source: {
      url: `https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7`,
      text: `Image by vecstock on Freepik`,
    },
  },

  {
    image: `images/garden.jpg`,
    source: {
      url: `https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4`,
      text: `Image by vecstock on Freepik`,
    },
  },

  {
    image: `images/small-house.jpg`,
    source: {
      url: `https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4`,
      text: `Image by vecstock on Freepik`,
    },
  },

  {
    image: `images/snow.jpg`,
    source: {
      url: `https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4`,
      text: `Image by vecstock on Freepik`,
    },
  },
];

const showImages = () => {
  let display = document.getElementById("array-show");
  display.innerHTML = "";

  for (let i in array) {
    let imageContainer = document.createElement("div");
    const br = document.createElement(`br`);
    let img = document.createElement("img");
    img.src = array[i].image;
    imageContainer.appendChild(img);
    imageContainer.appendChild(br);
    let source = document.createElement("a");
    source.href = array[i].source.url;
    source.textContent = array[i].source.text;
    imageContainer.appendChild(source);

    display.appendChild(imageContainer);
  }
};

showImages();
