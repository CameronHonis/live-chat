import React from "react";
import { parseTwitchChannelCode, parseYTVideoId } from "./parsers";

export function LiveChats() {
    const twitchChannelCode = parseTwitchChannelCode();
    const ytVideoId = parseYTVideoId();

    const ytEmbedUrl = `https://www.youtube.com/live_chat?v=${ytVideoId}&embed_domain=${window.location.hostname}`;
    const twitchEmbedUrl = `https://www.twitch.tv/embed/${twitchChannelCode}/chat?parent=${window.location.hostname}`;

    console.log({
        ytEmbedUrl,
        twitchEmbedUrl
    });

    return <div style={{ display: "flex", minHeight: "95vh" }}>
        <iframe
            title="Youtube Chat Window"
            src={ytEmbedUrl}
            style={{ flex: 1, padding: "5px" }}
        ></iframe>
        <iframe
            title="Twitch Chat Window"
            src={twitchEmbedUrl}
            style={{ flex: 1, padding: "5px" }}
        >
        </iframe>
    </div>
}