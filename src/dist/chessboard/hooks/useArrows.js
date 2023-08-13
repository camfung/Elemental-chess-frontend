import { useState, useEffect } from "react";
const toSet = (arrows) => new Set(arrows === null || arrows === void 0 ? void 0 : arrows.map((arrow) => arrow.join(",")));
const toArray = (arrowsSet) => Array.from(arrowsSet).map((arrow) => arrow.split(","));
export const useArrows = (customArrows, areArrowsAllowed = true, onArrowsChange) => {
    // current arrows
    const [arrows, setArrows] = useState(new Set());
    // arrow which we draw while user dragging mouse
    const [newArrow, setNewArrow] = useState();
    // handle external arrows change
    useEffect(() => {
        if (customArrows && (customArrows.length !== 0 || arrows.size > 0)) {
            setArrows(toSet(customArrows));
        }
    }, [customArrows]);
    // callback when new arrows are set
    useEffect(() => {
        onArrowsChange === null || onArrowsChange === void 0 ? void 0 : onArrowsChange(toArray(arrows));
    }, [arrows]);
    function clearArrows() {
        setArrows(new Set());
        setNewArrow(undefined);
    }
    const removeArrow = (fromSquare, toSquare) => {
        let removedArrow;
        const arrowsArray = Array.from(arrows);
        for (const [i] of arrowsArray.entries()) {
            if (arrowsArray[i][0] === fromSquare && arrowsArray[i][1] === toSquare) {
                setArrows((oldArrows) => {
                    const newArrows = [...oldArrows];
                    newArrows.splice(i, 1);
                    return new Set(newArrows);
                });
                removedArrow = [fromSquare, toSquare];
            }
        }
        return Boolean(removedArrow);
    };
    const drawNewArrow = (fromSquare, toSquare) => {
        if (!areArrowsAllowed || fromSquare === toSquare)
            return;
        setNewArrow([fromSquare, toSquare]);
    };
    const onArrowDrawEnd = (fromSquare, toSquare) => {
        if (fromSquare === toSquare)
            return;
        // remove it if we already have same arrow in arrows set
        const newArrow = `${fromSquare},${toSquare}`;
        const arrowsSet = new Set(arrows);
        if (arrowsSet.has(newArrow)) {
            arrowsSet.delete(newArrow);
        } // add to arrows set  new arrow
        else {
            arrowsSet.add(newArrow);
        }
        setNewArrow(undefined);
        setArrows(arrowsSet);
    };
    return {
        arrows: toArray(arrows),
        newArrow,
        clearArrows,
        removeArrow,
        drawNewArrow,
        setArrows,
        onArrowDrawEnd,
    };
};
