# PublicAPI_Hub_API

## Introduction

Welcome to the PublicAPI_Hub_API! This Node.js application, built with Express, serves a curated list of public APIs available across various categories. Explore different categories and discover the APIs within them.

## API Base URL

- Base URL: publicapi-hub-api.vercel.app/

## Technologies

* NodeJS
* Express

## Endpoints

1. Get All Categories

- Endpoint: /categories
- Description: Retrieve a list of all available categories.
- Example Request: GET /categories
- Example Response:

```json
{
  "entries": [
    {
        "name": "Animals",
        "slug": "animals"
    },
    {
        "name": "Anime",
        "slug": "anime"
    }
  ]
}
```

2. Get APIs by Category

- Endpoint: /categories/${catatory Name}
- Description: Retrieve all APIs available in a specific category.
- Example Request: GET /categories/animals
- Example Response:

```json
{
  "entries": [
    {
        "API": "AdoptAPet",
        "Description": "Resource to help get pets adopted",
        "Auth": "apiKey",
        "HTTPS": true,
        "Cors": "yes",
        "Link": "https://www.adoptapet.com/public/apis/pet_list.html",
        "Category": "Animals"
    }
  ]
}
```

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/PublicAPI_Hub_API.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

4. The API will be available at [http://localhost:8080]


## How to Use

1. Make a GET request to the desired endpoint using the provided base URL.
2. Explore available categories or retrieve APIs within a specific category.


## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## Issues and Support

[imsyntn@gmail.com]

## Acknowledgments

- Thanks to the creators and maintainers of the [public-apis](https://github.com/marcelscruz/public-apis/tree/main/db) for providing the data used in this project.
- Special thanks to [Vercel](https://vercel.com/) for providing hosting services for this project, making it accessible to users.
