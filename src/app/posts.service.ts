import { Post } from './shared/post.model'

export class PostsService {
    public posts: Array<Post> = [
        {
            id: 1,
            title: "Title 1",
            author: "Rodrigo Franco",
            date: "09/11/2019",
            content: "Lorem ipsum sit dolor amet...........",
            numberComments: 2
        },
        {
            id: 2,
            title: "Title 2",
            author: "Rodrigo Franco",
            date: "08/11/2019",
            content: "Lorem ipsum sit dolor amet...........",
            numberComments: 1
        },
        {
            id: 2,
            title: "Title 2",
            author: "Rodrigo Franco",
            date: "07/11/2019",
            content: "Lorem ipsum sit dolor amet...........",
            numberComments: 4
        },
    ]

    public getPosts(): Array<Post> {
        return this.posts
    }
}