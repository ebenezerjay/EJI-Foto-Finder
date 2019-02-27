var searchInput = document.querySelector('#search');
var titleInput = document.querySelector('#foto-title');
var captionInput = document.querySelector('#foto-caption');
var fileInput = document.querySelector('#image-input');
var favoritesButton = document.querySelector('.view-favorites-button');
var addAlbumsButton = document.querySelector('.add-to-albums-button');
var cardSection = document.querySelector('section');
// var changedTitleInput = document.querySelector('.changed-title');
// var changedCaptionInput = document.querySelector('.changed-caption');
var reader = new FileReader();

var fotoArray = JSON.parse(localStorage.getItem('photo-card')) || [];
// var photoInstance = new Photo();

addAlbumsButton.addEventListener('click', createCard);
window.addEventListener('load', loadPreviousCards());
cardSection.addEventListener('keydown', editTitle);
// changedCaptionInput.addEventListener('keydown', editCaption);
console.log(titleInput.cardSection);


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
  	`<article class="appended-photo-card" data-id="${id}">
  		<p class="changed-title" contenteditable="true">${title}</p>
  		<img class="appended-image" src=${file}>
  		<p class="changed-caption" contenteditable="true">${caption}</p>
  		<div class="card-buttons">
  		  <img class="delete-button" src="delete.svg" width="35px" height="35px">
  		  <img class="favorite-button" src="favorite.svg" width="35px" height="35px">
  		</div>
  	</article> ` + cardSection.innerHTML

}

function editTitle(e) {
  var photoInstance = new Photo();
  var indexFound = e.target.parentElement.dataset.id
  var editedTitle = e.target.innerText;
  // var editedCaption = e.target.innerText;
  var changedTitle = fotoArray.map(photo => photo.id).indexOf(parseInt(indexFound));
  fotoArray.map(photo => photo.id).indexOf(parseInt(indexFound));
  photoInstance.updatePhoto(parseInt(indexFound), editedTitle);

  console.log(indexFound);
}

function editCaption(e) {
	var photoInstance = new Photo();
  	var indexFound = e.target.parentElement.dataset.id
  	var editedCaption = e.target.innerText;
    var changedCaption = fotoArray.map(photo => photo.id).indexOf(parseInt(indexFound));
    fotoArray.map(photo => photo.id).indexOf(parseInt(indexFound));
    photoInstance.updatePhoto(parseInt(indexFound), editedCaption);
 	
     console.log(editedCaption);
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
