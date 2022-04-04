# r_place

## Origin/Abstract

I created this repo for knowledgeable programmers to obtain a good foundation for creaiting fetch requests for reddit's r/place.

## Requirements

Built for browser environment or nodejs. If nodejs is used, you'll need to run `npm i node-fetch@2.6.1` because the newer versions screw up the `require()` function (unless, of course, you rename the main file to `index.js`)

You'll also need to obtain your session token by going to r/place and zooming in and moving around while the Network tab of your browser's developer panel is open. You can find your token in the request headers of the /query requests generated by doing this.
