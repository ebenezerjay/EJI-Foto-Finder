var searchInput = document.querySelector('#search');
var titleInput = document.querySelector('#foto-title');
var captionInput = document.querySelector('#foto-caption');
var fileInput = document.querySelector('#image-input');
var favoritesButton = document.querySelector('.view-favorites-button');
var addAlbumsButton = document.querySelector('.add-to-albums-button');
var cardSection = document.querySelector('section');
var reader = new FileReader();
var fotoArray = JSON.parse(localStorage.getItem('photo-card')) || [];
// var fotoInstance = new Photo();

addAlbumsButton.addEventListener('click', createCard);
window.addEventListener('load', loadPreviousCards());
// addAlbumsButton.addEventListener('click', loadPhoto());
// reader.addEventListener('onload', loadPhoto());

function createCard(e) {
  var timeStamp = Math.floor(Date.now());
  var photoTitle = titleInput.value;
  var photoCaption = captionInput.value;
  var newImage = fileInput.files[0]; 
  reader.readAsDataURL(newImage); 
  reader.onload = function(){
  	addPhotoCard(timeStamp, photoTitle, photoCaption, reader.result);
  	  var newPhoto = new Photo(timeStamp, photoTitle, photoCaption, reader.result);
  	  console.log(newPhoto);
  	  fotoArray.push(newPhoto);
  	  console.log(fotoArray);   
      newPhoto.saveToStorage(fotoArray);
 		if (!photoTitle || !photoCaption) {
    	return;
  		}  
	}
   	e.preventDefault();
 }

function addPhotoCard(id, title, caption, file) {
  cardSection.innerHTML =
  	`<article class="appended-photo" data-id="${id}">
  		<p contenteditable="true">${title}</p>
  		<img src=${file}>
  		<p contenteditable="true">${caption}</p>
  		<div class="card-buttons">
  		  <img src="delete.svg" width="20px" height="20px">
  		  <img src="favorite.svg" width="20px" height="20px">
  		</div>
  	</article> ` + cardSection.innerHTML

}

function loadPreviousCards(e) {
  if (fotoArray.length > 10) {
   var slicedFotoArr = fotoArray.slice(fotoArray.length - 10);
    for (var i = 0; i < slicedFotoArr.length; i++) {
      addPhotoCard(slicedFotoArr[i].id, slicedFotoArr[i].title, slicedFotoArr[i].caption, slicedFotoArr[i].file, slicedFotoArr.favorite);
    }
  } else {
      for (var i = 0; i < fotoArray.length; i++) {
      addPhotoCard(fotoArray[i].id, fotoArray[i].title, fotoArray[i].caption, fotoArray[i].file, fotoArray[i].favorite);
      }
    }
}
