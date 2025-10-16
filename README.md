This is a base node js project template, which can be used by anyone as it has been prepared by keeping some of the most code principles and project management recommendations.

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder).

Lets take a look inside the `src` folder.

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. FOr example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is dn=one in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> they are kind of the last middleware as post them you call business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

- `services` -> contains the business logic and interacts with repositories for data from the database.
- `utils` -> contains helper methods, error classes etc.

### Setup the project

- Download this template from github nad open it in your favorite text editor.
- Go inside the following path and execute the following command:
```
npm install
```
- In the root directory create a `.env` file and add the following env variables.

```
 PORT=<port of ur choice> 
```

ex: 
```
    PORT = 3000
```
go inside the `src` folder and execute the following command:
   ```
      npx sequelize init
   ```
  - To run the server execute
  ```
  npm run dev

<!-- Inside the `src/config` folder create a file names as `config.json` and write this code:
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
- If you are setting up the dev environment, then write the username of your db, password of your db and in dialect mention whatever d you are using for ex: mysql, mariadb etc
- If tou're setting up test or prod env, make sure you also replace the host with the hosted db url. -->