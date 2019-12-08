/* *** DATABASE *** */
var africa = {
    path:  'assets/africa.jpg',
    title: 'Africa',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var basaar = {
    path:  'assets/basaar.jpg',
    title: 'Basaar of Jerusalem',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var beach = {
    path:  'assets/beach.jpg',
    title: 'Beach',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var desert = {
    path:  'assets/desert.jpg',
    title: 'Desert in Jordan',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var geishas = {
    path:  'assets/geishas.jpg',
    title: 'Geishas of Kyoto',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var japan = {
    path:  'assets/japan.jpg',
    title: 'Gate of Gods',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var montain = {
    path:  'assets/montain.jpg',
    title: 'Montain at Night',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

var morocco = {
    path:  'assets/morocco.jpg',
    title: 'Colorful Morocco',
    story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet. Cras ornare arcu dui vivamus arcu felis. Viverra accumsan in nisl nisi scelerisque.'
};

const listOfPictures = [africa, basaar, beach, desert, geishas, japan, montain, morocco];


/* *** GLOBAL VARIABLES *** */
var pictureToShow = document.getElementById('p789');
let counter = 0;
var rightArrow = document.getElementsByClassName('right')[0];
var leftArrow = document.getElementsByClassName('left')[0];
var title = document.getElementById('234');
var story = document.getElementById('345');


/* *** DEFAULT SETUP *** */
setPicture();
setTitleAndStory();
setSelectedThumbnail();


/* *** CLICK HANDLERS *** */
rightArrow.onclick = function increaseCounter() {
    counter++;
    if (counter >= listOfPictures.length) {
        counter = 0;
    }
    setPicture();
    setTitleAndStory();
    setSelectedThumbnail();
}

leftArrow.onclick = function decreaseCounter() {
    counter--;
    if (counter < 0) {
        counter = listOfPictures.length - 1;
    }
    setPicture();
    setTitleAndStory();
    setSelectedThumbnail();
}

clickEvenOnThumbnail();



/* ***  FUNCTIONS *** */
function defaultThumbnail () {
    var thumbnail = document.getElementsByTagName('li');
    for (let i = 0; i < thumbnail.length; i++) {
        thumbnail[i].style.transform = "scale(1, 1)";
        thumbnail[i].style.opacity = "0.5";
    }
}

function setSelectedThumbnail () {
    defaultThumbnail();
    var thumbnail = document.getElementById(counter);
    thumbnail.style.transform = "scale(1.2, 1.2)";
    thumbnail.style.opacity = "1";
}

function setPicture () {
    pictureToShow.setAttribute('src', listOfPictures[counter].path);
}

function setTitleAndStory () {
    title.innerText = listOfPictures[counter].title;
    story.innerText = listOfPictures[counter].story;
}

function clickEvenOnThumbnail () {
    var thumbnail = document.getElementsByTagName('li');
    for (let i = 0; i < thumbnail.length; i++) {
        thumbnail[i].addEventListener('click', function(){
            counter = thumbnail[i].id;
            setPicture();
            setTitleAndStory();
            setSelectedThumbnail();
        });
    }
}

