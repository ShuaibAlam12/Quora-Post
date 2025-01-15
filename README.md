# REST API with Express and EJS

This is a simple REST API project built with Express.js and EJS templating engine. It allows users to create, read, update, and delete posts.

## Project Structure

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ShuaibAlam12/Quora-Post.git
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    node index.js
    ```
2. Open your browser and navigate to `http://localhost:8080/posts` to view the posts.

## Endpoints

- `GET /posts` - View all posts
- `GET /posts/new` - Form to create a new post
- `POST /posts` - Create a new post
- `GET /posts/:id` - View a specific post
- `GET /posts/:id/edit` - Form to edit a specific post
- `PATCH /posts/:id` - Update a specific post
- `DELETE /posts/:id` - Delete a specific post

## Dependencies

- express: ^4.21.2
- ejs: ^3.1.10
- method-override: ^3.0.0
- uuid: ^11.0.5

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

Shuaib Alam
