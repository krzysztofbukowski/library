# Library
Project of digital library for primary school in Pieniezno.

## Prerequisites

1. This app uses nodejs so you need to have it installed locally. You can use nvm for this purpose
2. Clone this repository
3. Run `npm ci` to install all node dependencies
4. Copy `.env.dist` to `.env`. This contains variables for your local environment, i.e database password

## API

The API endpoints are available under `/api` path. 

Available endpoints:

#### `/api/books` - get the list of all books
#### `/api/books/{id}` - get the details of a single book

### Development

#### Docker

**DB**

Create `.env` file with `MYSQL_ROOT_PASSWORD` entry for initial mysql root password.

The API is built using nodejs and typescript and the source code is available under `./back-end` path.

Running the API

#### `watch:server` - Run the server and automatically reload on every code change
#### `start:server` - Run the server
