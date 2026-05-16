"use client";

import {cn} from "@/lib/utilities/cn";
import {getSymmetricOffset} from "@/lib/utilities/get-symmetric-offset";
import {motion, useTransform} from "motion/react";
import {useStackingCardsContext, type StackingCardProps} from "./context";

const TRANSLATE_X_RANGE = 80;
const TRANSLATE_Y_RANGE = 20;
const ROTATE_RANGE = 12;

// Cards fan out like a hand of cards — spread by x, arced by y, rotated by angle
const StackingCardFan = ({
    index,
    className,
    children,
    ...props
}: StackingCardProps) => {
    const {progress, totalCards = 0} = useStackingCardsContext();
    const rangeScale = [index * (1 / totalCards), 1];
    const x = useTransform(progress, rangeScale, [
        0,
        getSymmetricOffset(index, totalCards, TRANSLATE_X_RANGE),
    ]);
    const y = useTransform(progress, rangeScale, [
        0,
        Math.abs(getSymmetricOffset(index, totalCards, TRANSLATE_Y_RANGE)),
    ]);
    const rotate = useTransform(progress, rangeScale, [
        0,
        getSymmetricOffset(index, totalCards, ROTATE_RANGE),
    ]);

    return (
        <div
            data-slot="stacking-card-fan"
            className={cn("sticky top-0 grid h-screen place-items-center")}>
            <motion.div
                className={cn("relative", className)}
                style={{x, y, rotate}}
                {...props}>
                {children}
            </motion.div>
        </div>
    );
};

export {StackingCardFan};
