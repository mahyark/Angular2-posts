"use strict";
var Post = (function () {
    function Post(userID, id, title, body) {
        this.userID = userID;
        this.id = id;
        this.title = title;
        this.body = body;
    }
    Post.prototype.toForm = function () {
        return "UserID=" + this.userID + "&ID=" + this.id + "&Title=" + this.title + "&Body=" + this.body;
    };
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map