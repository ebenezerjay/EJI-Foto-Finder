class Photo {
	constructor(id, title, caption, file, favorite) {
		this.id = id;
		this.title = title;
		this.caption = caption;
		this.file = file;
		this.favorite = false;
	}

	saveToStorage(array) {
    localStorage.setItem('photo-card', JSON.stringify(array));
	}

	// deleteFromStorage() {

	// }

	updatePhoto(id, title, caption) {
		var fotoArray = this.pullFromStorage();
    	fotoArray[this.getIndex(id)].title = title;
    	fotoArray[this.getIndex(id)].caption = caption;
    	this.saveToStorage(fotoArray);
	}


	getIndex(id) {
    	return this.pullFromStorage().map(photo => photo.id).indexOf(id);
  	}

	pullFromStorage() {
		return JSON.parse(localStorage.getItem('photo-card'));

	}
}