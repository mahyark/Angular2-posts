"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var PostListComponent = (function () {
    function PostListComponent(postService) {
        this.postService = postService;
        this.commentsFound = new core_1.EventEmitter();
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPosts().subscribe(function (data) { return _this.posts = data; });
        this.comments = [];
    };
    PostListComponent.prototype.getComments = function (index) {
        var _this = this;
        var id = index + 1;
        this.postService.getCommentsForPost(id).subscribe(function (data) { return _this.comments = data; });
        this.printComments(this.comments);
    };
    PostListComponent.prototype.printComments = function (comments) {
        for (var i = comments.length - 1; i >= 0; i--) {
            console.log(comments[i]);
        }
    };
    return PostListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PostListComponent.prototype, "commentsFound", void 0);
PostListComponent = __decorate([
    core_1.Component({
        selector: 'post-list',
        templateUrl: './post-list.component.html'
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostListComponent);
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=post-list.component.js.map