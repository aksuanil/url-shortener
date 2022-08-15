# URL Shortening Service

## Table of Contents
+ [About](#about)
+ [Installation](#install)
+ [Usage](#usage)

## About  <a name = "about"></a>

This is a simple URL shortener RESTful API service build with node.js. It can be used to shorten and store the given URL and access it later any time.

## Project Structure 

There is a very basic project structure and it looks like this:

```sh
url-shortener
        |
        +-- controllers     # controller functions, crud operations etc.
        |
        +-- db              # contains embedded leveldb folders
        |
        +-- helpers         # shared helper functions
        |
        +-- routers         # defining route paths to access related controllers
```


### Prerequisites <a name = "install"></a>

Make sure to install up-to-date versions of;

* node.js

### Installing <a name = "install"></a>

1. Clone the repo
   ```sh
   git clone https://github.com/aksuanil/url-shortener.git
   ```

2. Start server application with 'npm start' command in the project's root directory.
   ```sh
   npm start
   ```

## Usage <a name = "usage"></a>

If an invalid request is submitted, or some other error occurs, API returns a JSON response in the following format. However, successfull calls return the JSON representation of the resources created or fetched:

```http
POST /api/url-shortener/
```

Response:

```javascript
{
  "url" : string,
  "id" : string,
}
```

```http
GET /api/url-shortener/:id
```
Response:

```
Redirects to matched URL
```

```http
POST /api/custom-shortener/
```
Response:

```javascript
{
  "url": string,
  "id": string,
}
```

This app returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |