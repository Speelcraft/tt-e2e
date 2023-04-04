# Development

## Front-end
It runs on port 3030 and proxies unknown requests to the back-end, which is running on port 4567.

```sh
# Install packages (once)
$ yarn install

# Start development server on port 3030
# Make sure to have the back-end running separately
$ yarn start

# Build the app when development is done
# Optional: needed for testing purposes with sinatra as the entry point
$ yarn build
```

## Front-end (Tests)
```sh
# Install packages (once)
$ yarn install

# Make sure to have the front-end and the back-end running separately

# Run the tests in headless mode
$ yarn test

# Open cypress to run the tests in interactive mode
$ yarn runner
```

## Back-end
It runs on port 4567 and serves static assets (including the default route) from front-end's `build` directory.

```sh
# Move to the base-folder for the back-end
$ cd backend

# Install packages (once)
$ bundle install

# Start the server
$ bundle exec ruby server.rb
```

## Back-end (Tests)

```sh
# Move to the base-folder for the back-end
$ cd backend

# Install packages (once)
$ bundle install

# Move to the test folder
$ cd test

# Run the tests
# Make sure to have the back-end running separately
$ rspec

# After running you can access the test results in the results folder
$ cd results

# There will be 2 files, the .json and the .html that can be visualized in any browser
```


# Dockerization
In case you don't need to make changes in the app itself, you can just use Docker.

```sh
# Build the Docker image
$ docker build -t todo-lists .

# Run the container on localhost:4567
$ docker run --rm  -p 4567:4567 todo-lists
```
