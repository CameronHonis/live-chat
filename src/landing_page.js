import React, { useState } from "react";
import usePersistantState from "./hooks/use_persistent_state";
import {parseTwitchChannelCode, parseYTVideoId } from "./parsers";
import { YT_LINK_KEY, TWITCH_LINK_KEY } from "./statics";

export function LandingPage({ onSubmit }) {
    const [ytLink, setYTLink] = usePersistantState(YT_LINK_KEY, "", e => e, e => e, true);
    const [twitchLink, setTwitchLink] = usePersistantState(TWITCH_LINK_KEY, "", e => e, e => e, true);
    const [ytVideoId, setYtVideoId] = useState();
    const [twitchChannelCode, setTwitchChannelCode] = useState();

    React.useEffect(() => {
        const ytVideoId = parseYTVideoId();
        setYtVideoId(ytVideoId);
    }, [ytLink]);

    React.useEffect(() => {
        const twitchChannelCode = parseTwitchChannelCode();
        setTwitchChannelCode(twitchChannelCode);
    }, [twitchLink]);

    return <form onSubmit={() => {
        console.log("form submitted");
        onSubmit();
    }}>
        <div>
            <p>Youtube Video Share Link:</p>
            <input value={ytLink} onChange={e => setYTLink(e.target.value)}></input>
            {ytVideoId && <div>parsed ID: {ytVideoId}</div>}
        </div>
        <div>
            <p>Twitch Channel URL:</p>
            <input value={twitchLink} onChange={e => setTwitchLink(e.target.value)}></input>
            {twitchChannelCode && <div>parsed ID: {twitchChannelCode}</div>}
        </div>
        <button>DONE</button>
    </form>
}