# dropbears live

## Requirements

* Java, Python, or Javascript

## Step 1

See [create-live-video](./create-live-video/README.md)

## Step 2

- [x] Stream video to stream url

Live Video Id: 2799266743649556

## Step 3

- [x] Add comments/replies/reactions/gifs/emojis

## Step 4

### Features

- [/] Display of post comments.
- [/] Display the users profile picture for each comment.
- [/] Display of reply threads for comments.
- [ ] Display of pictures within posts (gifs,images,emojis).
- [ ] Display of post reactions.
- [ ] Dynamic update of new posts. If someone makes new comments on your post after
the loading of your display page, your page should subsequently show these updates without requiring a browser reload.
  * [Server-sent events](https://developers.facebook.com/docs/graph-api/server-sent-events)

### Requirements
* ReactJS

### Steps

- [x] bootstrap React and development
- [/] Complete each feature in order

### Improvements

* Finish requested features
* Populate with real data
  * After bootstraping the project I went on to defining the fake data I'd be using. This fake data was a poor man's client/server contract and a way to work on the frontend without the backend.
  * A service should be setup for the frontend to call to get the required data. The server can use the access token provided by the challenge and alter the data format to fit the needs of the UI
  * When integrating the backend in the frontend, I would likely introduce Redux with the Fake data to manage the state, and then transition to using the backend via the relevant actions
* Tests - there aren't any and we should test the React components and server functionality to ensure help insure quality
* Apply better and maintainable styling
* Address audit warnings from npm
* Add linting