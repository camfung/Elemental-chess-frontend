/// <reference types="react" />
import { Square } from "../types";
type Arrow = Square[];
type Arrows = Arrow[];
export declare const useArrows: (customArrows?: Arrows, areArrowsAllowed?: boolean, onArrowsChange?: ((arrows: Arrows) => void) | undefined) => {
    arrows: Arrows;
    newArrow: Arrow | undefined;
    clearArrows: () => void;
    removeArrow: (fromSquare: Square, toSquare: Square) => boolean;
    drawNewArrow: (fromSquare: Square, toSquare: Square) => void;
    setArrows: import("react").Dispatch<import("react").SetStateAction<Set<string>>>;
    onArrowDrawEnd: (fromSquare: Square, toSquare: Square) => void;
};
export {};
