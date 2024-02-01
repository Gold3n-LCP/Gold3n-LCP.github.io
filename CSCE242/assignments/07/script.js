document.addEventListener('DOMContentLoaded', function () {
    var starBlock = document.getElementById('starBlock');
    // Add a click event listener
    starBlock.addEventListener('click', function () {
      // Replace the content with an image
    var starImage = document.createElement('img');

    starImage.src = 'images/starIcon.png';

    starBlock.appendChild(starImage);
    });

    var switchBlock = document.getElementById('switchBlock');
    var imageToSwitch = document.getElementById('imageToSwitch');
    switchBlock.addEventListener('click',function () {
        if(imageToSwitch.src.includes('images/galaxy2.jpg')) {
            imageToSwitch.src = 'images/galaxy1.jpg';
        }
        else {
            imageToSwitch.src = 'images/galaxy2.jpg';
        }
    });

    var Slider = document.getElementById('Slider');
    var spinImage = document.getElementById('spinImage');
    Slider.addEventListener('input', function() {
        var spinValue = Slider.value;
        spinImage.style.transform = 'rotate(' + spinValue + 'deg)';
    });
});
