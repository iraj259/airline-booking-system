This is a base node js project template, which can be used by anyone as it has been prepared by keeping some of the most code principles and project management recommendations.

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder).

Lets take a look inside the `src` folder.

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. FOr example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is dn=one in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> they are kind of the last middleware as post them you call business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.