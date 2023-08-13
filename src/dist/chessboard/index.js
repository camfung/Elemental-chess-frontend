import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { Board } from "./components/Board";
import { ChessboardProvider } from "./context/chessboard-context";
import { CustomDragLayer } from "./components/CustomDragLayer";
import { ErrorBoundary } from "./components/ErrorBoundary";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
export const Chessboard = forwardRef((props, ref) => {
  const { customDndBackend, customDndBackendOptions } = props,
    otherProps = __rest(props, ["customDndBackend", "customDndBackendOptions"]);
  const [clientWindow, setClientWindow] = useState();
  const [backendSet, setBackendSet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [boardWidth, setBoardWidth] = useState(props.boardWidth);
  const boardRef = useRef(null);
  useEffect(() => {
    setIsMobile("ontouchstart" in window);
    setBackendSet(true);
    setClientWindow(window);
  }, []);
  useEffect(() => {
    var _a;
    if (
      props.boardWidth === undefined &&
      ((_a = boardRef.current) === null || _a === void 0
        ? void 0
        : _a.offsetWidth)
    ) {
      const resizeObserver = new ResizeObserver(() => {
        var _a;
        setBoardWidth(
          (_a = boardRef.current) === null || _a === void 0
            ? void 0
            : _a.offsetWidth
        );
      });
      resizeObserver.observe(boardRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [boardRef.current, clientWindow]);
  const backend = customDndBackend || (isMobile ? TouchBackend : HTML5Backend);
  return backendSet && clientWindow
    ? _jsx(ErrorBoundary, {
        children: _jsxs("div", {
          style: { display: "flex", flexDirection: "column", width: "100%" },
          children: [
            _jsx("div", { ref: boardRef, style: { width: "100%" } }),
            _jsx(DndProvider, {
              backend: backend,
              context: clientWindow,
              options: customDndBackend ? customDndBackendOptions : undefined,
              children:
                boardWidth &&
                _jsxs(
                  ChessboardProvider,
                  Object.assign({ boardWidth: boardWidth }, otherProps, {
                    ref: ref,
                    children: [_jsx(CustomDragLayer, {}), _jsx(Board, {})],
                  })
                ),
            }),
          ],
        }),
      })
    : null;
});
