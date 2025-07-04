# HackerRank React Challenge: Blog Post

## [simplest solution AT](./solution.md)
## [live version vercel-app](https://hackerrank-react-blog.vercel.app/)

Your task is to create a React application called "Blog Post" that allows users to create, display, and delete blog posts. The application requirements are detailed below, and the finished application must pass all of the unit tests.


# Detailed Requirements

    The "Blog Post" component should have two input fields: one for the post title and another for the post description (textarea).
    The application should display a "Create" button that, when clicked, adds a new blog post to the list of existing posts.
    The "Create" button should only add a post if both the title and description fields have values. If either field is empty, the button should not create a post.
    Once a post is successfully created, both the title and description fields should be cleared.
    The list of created blog posts should be displayed in a grid layout, with each post appearing inside a box.
    Each box should include:
        The post's title.
        The post's description.
        A "Delete" button to remove the specific post from the list.


# Sample Interaction

Initial State

    The title and description fields are empty.
    No blog posts are displayed.

User Action 1

    User enters a title and description in the respective input fields.
    User clicks the "Create" button.
    The new post is added to the grid with the entered title and description.
    The input fields are cleared.

User Action 2

    User clicks the "Delete" button next to a blog post.
    The selected blog post is removed from the grid.


### [HackerRank Web Page: Blog Post Challenge](https://www.hackerrank.com/challenges/blog-post/)

![screenshot-sample](./public/images/Screenshot.jpg)