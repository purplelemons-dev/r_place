
// Comment this out if you run this in the browser.
const fetch = require('node-fetch'); // version @2.6.1 - otherwise cannot use require('node-fetch')

const URL="https://gql-realtime-2.reddit.com/query";

const TOKEN=null; // Obtained at login or page refresh

const COORDS={
    x:652,
    y:851
};

const colors={
    burgundy:0,
    dark_red:1,
    red:2,
    orange:3,
    yellow:4,
    pale_yellow:5,
    dark_green:6,
    green:7,
    light_green:8,
    dark_teal:9,
    teal:10,
    light_teal:11,
    dark_blue:12,
    blue:13,
    light_blue:14,
    indigo:15,
    periwinkle:16,
    lavender:17,
    dark_purple:18,
    purple:19,
    pale_purple:20,
    magenta:21,
    pink:22,
    light_pink:23,
    dark_brown:24,
    brown:25,
    beige:26,
    black:27,
    dark_gray:28,
    gray:29,
    light_gray:30,
    white:31
};

const canvas = {
    top_left: 0,
    top_right: 1,
    bottom_left: 2,
    bottom_right: 3
};

fetch(URL, {
    mode: 'cors',
    credentials: 'include',
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        'authorization':`Bearer ${TOKEN}`
    },
    body: JSON.stringify({
        "operationName": "setPixel",
        "variables": {
            "input": {
                "actionName": "r/replace:set_pixel",
                "PixelMessageData": {
                    "coordinate": {
                        "x": COORDS.x,
                        "y": COORDS.y
                    },
                    "colorIndex": colors.red,
                    "canvasIndex": canvas.bottom_right
                }
            }
        },
        // The following is the GraphQL query
        "query":"mutation setPixel($input: ActInput!) {\n act(input: $input) {\n data {\n ... on BasicMessage {\nid\ndata {\n... on GetUserCooldownResponseMessageData {\nnextAvailablePixelTimestamp\n__typename\n}\n... on SetPixelResponseMessageData {\ntimestamp\n__typename\n}\n__typename\n}\n__typename\n}\n__typename\n}\n__typename\n}\n}\n"
    })
})
.then(res => res.json())
.then(json => {
    console.log(json);
});
