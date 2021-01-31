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

### Requirements
* ReactJS

### Steps

- [x] bootstrap React and development
- [/] Complete each feature in order

### Improvements

* Finish requested features
* Populate with real data - The data is fake. Setup a server the frontend can call to get the required data. The server can use the access token provided by the challenge and alter the data to fit the needs of the UI
* Tests - there aren't any and we should test the React components and server functionality to ensure help insure quality
* Apply better looking and maintainable styling
* Address audit warnings from npm

### Notes

* [Server-sent events](https://developers.facebook.com/docs/graph-api/server-sent-events)