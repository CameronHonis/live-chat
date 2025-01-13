import React from "react";
import { LandingPage } from "./landing_page";
import { LiveChats } from "./live_chats";

export function App() {
    const [isLanding, setIsLanding] = React.useState(true);

    return isLanding ? <LandingPage onSubmit={() => setIsLanding(false)} /> : <LiveChats />;
}