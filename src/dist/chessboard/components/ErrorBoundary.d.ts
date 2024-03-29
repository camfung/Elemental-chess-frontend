import { PropsWithChildren } from "react";
type ErrorBoundaryProps = PropsWithChildren;
export declare function ErrorBoundary({ children }: ErrorBoundaryProps): JSX.Element;
export declare function WhiteKing({ showError }: {
    showError?: boolean | undefined;
}): JSX.Element;
export {};
