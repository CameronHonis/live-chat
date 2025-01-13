import React from "react";

export default function usePersistantState(
    key,
    initState,
    stringer,
    parser,
    persistsAfterSession
) {
    const [state, setState] = React.useState(() => {
        try {
            const rawVal = persistsAfterSession ? localStorage.getItem(key) : sessionStorage.getItem(key);
            if (!rawVal)
                return initState;
            return parser(rawVal);
        } catch (e) {
            console.warn("parser error", e);
            return initState;
        }
    });

    React.useEffect(() => {
        if (persistsAfterSession) {
            localStorage.setItem(key, stringer(state));
        } else {
            sessionStorage.setItem(key, stringer(state));
        }
    }, [key, persistsAfterSession, stringer, state]);

    return [state, setState];
}