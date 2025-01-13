import React from "react";
import { parseTwitchChannelCode, parseYTVideoId } from "./parsers";

export function LiveChats() {
    const twitchChannelCode = parseTwitchChannelCode();
    const ytVideoId = parseYTVideoId();

    return <div style={{ display: "flex", minHeight: "95vh" }}>
        <iframe
            title="Youtube Chat Window"
            src={`https://www.youtube.com/live_chat?v=${ytVideoId}&amp;embed_domain=${window.location.hostname}`}
            style={{ flex: 1, padding: "5px" }}
        ></iframe>
        <iframe
            title="Twitch Chat Window"
            src={`https://www.twitch.tv/embed/${twitchChannelCode}/chat?parent=${window.location.hostname}`}
            style={{ flex: 1, padding: "5px" }}
        >
        </iframe>
    </div>
}