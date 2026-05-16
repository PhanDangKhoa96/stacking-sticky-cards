"use client";

import {cn} from "@/lib/utilities/cn";
import {useEffect, useState} from "react";

const demos = [
    {name: "Scale", id: "demo-scale"},
    {name: "Offset", id: "demo-offset"},
    {name: "Fan", id: "demo-fan"},
    {name: "Float", id: "demo-float"},
    {name: "Spread Flip", id: "demo-spread-flip"},
];

const DemoNav = () => {
    const [active, setActive] = useState(demos[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const trigger = window.scrollY + window.innerHeight * 0.4;
            let current = demos[0].id;
            for (const {id} of demos) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= trigger) current = id;
            }
            setActive(current);
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <nav className="fixed top-24 right-6 z-50 flex flex-col gap-3 md:right-12 lg:right-16">
            {demos.map(({name, id}) => {
                const isActive = active === id;
                return (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className="group flex items-center justify-between w-24 gap-2.5">
                        <span
                            className={cn(
                                "h-px transition-all origin-left w-6 duration-300 ease-out",
                                isActive
                                    ? " bg-orange-400"
                                    : "scale-x-50 bg-white/25 group-hover:bg-white/50"
                            )}
                        />
                        <span
                            className={cn(
                                "font-dm-sans text-[11px] transition-colors duration-300",
                                isActive
                                    ? "text-orange-400"
                                    : "text-white/30 group-hover:text-white/60"
                            )}>
                            {name}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
};

export {DemoNav};
