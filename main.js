var searchInput = document.querySelector('#search');
var titleInput = document.querySelector('#foto-title');
var captionInput = document.querySelector('#foto-caption');
var fileInput = document.querySelector('#file-input');
var favoritesButton = document.querySelector('.view-favorites-button');
var addAlbumsButton = document.querySelector('.add-to-albums-button');
var cardSection = document.querySelector('.append-img-section');

var fotoArray = JSON.parse(localStorage.getItem('photo-card')) || [];
// var fotoInstance = new Photo();

addAlbumsButton.addEventListener('click', createCard);


//click event listener for addAlbumsButtom, when button is clicked
//the uploaded photo from inputFile should be put into local storage and
//an appended photo card should appear in <section>.


function createCard(event) {
  var timeStamp = Math.floor(Date.now());
  var photoTitle = titleInput.value;
  var photoCaption = captionInput.value;

  addPhotoCard(timeStamp, photoTitle, photoCaption);
  var newPhoto = new Photo(timeStamp, titleInput, captionInput);
  fotoArray.push(newPhoto);;
  newPhoto.saveToStorage(fotoArray);
  titleInput.value = '';
  captionInput.value = '';
  event.preventDefault();
}

function addPhotoCard(id, title, caption, file, favorite) {
  cardSection.innerHTML =
  	`<article class="appened-photo" data-id "${id}">
  		<h2 class="h2-card">${title}</h2>
  		<img src="${id}">
  		<h2 class="h2-card">${caption}</h2>
  		<div>
  		  <img src="delete.svg" width="20px" height="20px">
  		  <img src="favorite.svg" width="20px" height="20px">
  		</div>
  	</article>` + cardSection.innerHTML
}