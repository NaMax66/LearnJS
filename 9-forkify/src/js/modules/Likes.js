export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img){
        const like = { id, title, author, img};
        this.likes.push(like);
        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1); //mutate original array
    }

    isLiked(id) { //if we have recipe in like list
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        this.likes.length;
    }
}
