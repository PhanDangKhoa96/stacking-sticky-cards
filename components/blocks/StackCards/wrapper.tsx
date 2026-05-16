"use client";

import {cn} from "@/lib/utilities/cn";
import {useScroll, type UseScrollOptions} from "motion/react";
import {
    Children,
    useRef,
    type ComponentType,
    type HTMLAttributes,
    type PropsWithChildren,
} from "react";
import {StackingCardsContext} from "./context";

interface StackingCardsWrapperProps
    extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
    scrollOptons?: UseScrollOptions;
    container?: ComponentType<PropsWithChildren>;
}

function StackingCardsWrapper({
    children,
    className,
    scrollOptons,
    container: Container,
    ...props
}: StackingCardsWrapperProps) {
    const totalCards = Children.count(children);
    const targetRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        offset: ["start start", "end end"],
        ...scrollOptons,
        target: targetRef,
    });

    return (
        <StackingCardsContext.Provider
            value={{
                progress: scrollYProgress,
                totalCards,
            }}>
            <div className={cn(className)} ref={targetRef} {...props}>
                {Container ? <Container>{children}</Container> : children}
            </div>
        </StackingCardsContext.Provider>
    );
}

export {StackingCardsWrapper};
export type {StackingCardsWrapperProps};
