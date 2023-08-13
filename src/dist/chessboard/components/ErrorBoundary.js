import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { errorImage } from "../media/error";
export function ErrorBoundary({ children }) {
    try {
        return _jsx(_Fragment, { children: children });
    }
    catch (error) {
        console.log(error);
        return _jsx(WhiteKing, { showError: true });
    }
}
export function WhiteKing({ showError = false }) {
    return (_jsxs("div", { style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }, children: [_jsx("div", { style: {
                    width: 250,
                    height: 250,
                    transform: "rotate(90deg)",
                }, children: errorImage.whiteKing }), showError && _jsx("h1", { children: "Something went wrong" })] }));
}
