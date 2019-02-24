var searchInput = document.querySelector('#search');
var titleInput = document.querySelector('#foto-title');
var captionInput = document.querySelector('#foto-caption');
var fileInput = document.querySelector('#file-input');
var favoritesButton = document.querySelector('.view-favorites-button');
var addAlbumsButton = document.querySelector('.add-to-albums-button');


var fotoArray = JSON.parse(localStorage.getItem('card')) || [];
var fotoInstance = new foto();




