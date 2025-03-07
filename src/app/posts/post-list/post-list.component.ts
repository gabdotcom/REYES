import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../posts.model";
import { PostsService } from "../posts.service";

@Component({
    selector: "app-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit, OnDestroy {
    posts: Post[] = [];
    private postsSub!: Subscription;

    constructor(public postsService: PostsService) { }

    ngOnInit() {
        this.postsService.getPosts();  // Fetch posts without assignment
        this.postsSub = this.postsService.getPostUpdatedListener()
            .subscribe((posts: Post[]) => {
                this.posts = posts;
            });
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }
}
