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

	// updatePhoto() {

	// }

	pullFromStorage() {
		return JSON.parse(localStorage.getItem('photo-card'));

	}
}