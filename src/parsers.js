import {YT_LINK_KEY, TWITCH_LINK_KEY} from "./statics";

export function parseYTVideoId() {
    const url = localStorage.getItem(YT_LINK_KEY);
    if (!url)
        return null;
    try {
        return ytVideoIdParser(url);
    } catch (e) {
        console.warn(e);
        return null;
    }
};

export function parseTwitchChannelCode() {
    const url = localStorage.getItem(TWITCH_LINK_KEY);
    if (!url)
        return null;
    try {
        return twitchChannelCodeParser(url);
    } catch (e) {
        console.warn(e);
        return null;
    }
};

function twitchChannelCodeParser(url) {
    let codes = [];

    const pattern1 = /twitch.tv\/([\w\d-]*)/g;
    if (url.match(pattern1)) {
        const channelCode = pattern1.exec(url)[1];
        codes.push(channelCode);
    }

    if (codes.length === 0)
        return null;

    if (new Set(codes).size !== 1) {
        throw new Error(`multiple interpretations for twitch channel code: \n\tcould be: ${JSON.stringify(new Set(codes))} \n\tfrom url: ${url}`);
    }

    return codes[0];
}

function ytVideoIdParser(url) {
    let ids = [];

    const pattern1 = /youtube.com\/live\/([\w\d-]*)/g;
    if (url.match(pattern1)) {
        const videoId = pattern1.exec(url)[1];
        ids.push(videoId);
    }

    if (ids.length === 0)
        return null;

    if (new Set(ids).size !== 1) {
        throw new Error(`multiple interpretations for youtube video id: \n\tcould be: ${JSON.stringify(new Set(ids))} \n\tfrom url: ${url}`);
    }

    return ids[0];
}