"use client";

import {cn} from "@/lib/utilities/cn";
import {getSymmetricOffset} from "@/lib/utilities/get-symmetric-offset";
import {
    type MapInputRange,
    mix,
    motion,
    useMotionTemplate,
    useTransform,
} from "motion/react";
import {type PropsWithChildren} from "react";
import {useStackingCardsContext, type StackingCardProps} from "./context";

// Keyframes: idle → drop-in → settle → flip → done
const KF = [0, 0.4, 0.55, 0.68, 0.82] as MapInputRange;

const TRANSLATE_X_PERCENTAGE_RANGE = 100;
const TRANSLATE_Z_RANGE = 12;
const TRANSLATE_Z_ANIMATED_RANGE = 5;

// Cards fly in from the sides with a 3D flip, then idle with a floating bob
const StackingCardFloat = ({
    index,
    className,
    children,
    ...props
}: StackingCardProps) => {
    const {progress, totalCards = 0} = useStackingCardsContext();

    const zValue = getSymmetricOffset(index, totalCards, TRANSLATE_Z_RANGE);
    const zAnimatedValue = getSymmetricOffset(
        index,
        totalCards,
        TRANSLATE_Z_ANIMATED_RANGE
    );
    const xValue = getSymmetricOffset(
        index,
        totalCards,
        TRANSLATE_X_PERCENTAGE_RANGE
    );

    const staggeredProgress = useTransform(progress, (v) => v - index * 0.012);

    const x = useTransform(staggeredProgress, KF, [
        `${-xValue}%`,
        `${-xValue}%`,
        `${-xValue}%`,
        "0%",
        "0%",
    ]);
    const y = useTransform(staggeredProgress, KF, [
        "-45",
        "20vh",
        "0vh",
        "0vh",
        "0vh",
    ]);
    const scale = useTransform(staggeredProgress, KF, [0.4, 0.8, 0.8, 1, 1]);
    const rotateZ = useTransform(staggeredProgress, KF, [
        zValue,
        zAnimatedValue,
        zAnimatedValue,
        0,
        0,
    ]);
    const rotateX = useTransform(staggeredProgress, KF, [24, 0, 0, 0, 0]);
    const rotateY = useTransform(staggeredProgress, KF, [0, 0, 0, -190, -180]);
    const opacity = useTransform(staggeredProgress, KF, [0, 1, 1, 1, 1]);

    const transformValueString = useMotionTemplate`rotateX(${rotateX}deg) translate3d(${x}, ${y}, 0) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg) scale(${scale})`;

    return (
        <motion.div
            data-slot="stacking-card-float"
            className={cn("relative transform-3d", className)}
            style={{transform: transformValueString, opacity}}
            animate={{
                translate: ["0px -1%", "0px 1%"],
                transition: {
                    duration: mix(1.5, 2.5, Math.random()),
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: [0.37, 0, 0.63, 1],
                },
            }}
            {...props}>
            {children}
        </motion.div>
    );
};

// Default container used by StackingCardsWrapper for all non-spread-flip card types.
// Provides 3D perspective and sticky scroll behaviour.
const FloatContainer = ({children}: PropsWithChildren) => (
    <div className="h-[350vh]" data-slot="stacking-card-float-container">
        <div className="sticky top-0 grid h-screen place-items-center">
            <div className="flex gap-x-3 perspective-distant md:gap-x-10">{children}</div>
        </div>
    </div>
);

export {StackingCardFloat, FloatContainer};
