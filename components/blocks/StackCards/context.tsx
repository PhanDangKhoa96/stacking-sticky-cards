"use client";

import {type HTMLMotionProps, type MotionValue} from "motion/react";
import {createContext, useContext} from "react";

export interface StackingCardProps extends HTMLMotionProps<"div"> {
    index: number;
}

export const StackingCardsContext = createContext<{
    progress: MotionValue<number>;
    totalCards?: number;
} | null>(null);

export const useStackingCardsContext = () => {
    const context = useContext(StackingCardsContext);
    if (!context)
        throw new Error(
            "StackingCard must be used within StackingCardsWrapper"
        );
    return context;
};
