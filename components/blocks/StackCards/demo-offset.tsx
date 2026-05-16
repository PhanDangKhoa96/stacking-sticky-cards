import Image from "next/image";
import {StackingCardOffset} from "./card-offset";
import {StackingCardsWrapper} from "./wrapper";

const cards = [
    {
        year: "2026",
        category: "UGC Agency",
        brand: "Pandawa™",
        heading: "Scaling Pandawa's SaaS Operations with Automation",
        description:
            "Helping Pandawa automate customer onboarding and internal workflows to scale faster without adding more operational overhead.",
        cta: "View Case Study",
        stats: [
            {value: "40%", label: "Faster Customer Onboarding"},
            {value: "18+", label: "Hours Saved Weekly"},
        ],
        image: "/images/photo-05.png",
    },
    {
        year: "2025",
        category: "E-Commerce",
        brand: "Velour™",
        heading: "Rebuilding Velour's Checkout Experience for Global Scale",
        description:
            "Streamlining the purchase flow to reduce drop-off and support multi-currency transactions across 30+ markets.",
        cta: "View Case Study",
        stats: [
            {value: "62%", label: "Checkout Completion Rate"},
            {value: "30+", label: "Markets Reached"},
        ],
        image: "/images/photo-06.png",
    },
    {
        year: "2025",
        category: "Creative Studio",
        brand: "Forme™",
        heading: "Launching Forme's Digital Brand Presence from Zero",
        description:
            "Building a full design system and web presence that communicates Forme's premium positioning to new audiences.",
        cta: "View Case Study",
        stats: [
            {value: "3×", label: "Increase in Inbound Leads"},
            {value: "12wk", label: "From Concept to Launch"},
        ],
        image: "/images/photo-07.png",
    },
];

const OffsetDemo = () => (
    <StackingCardsWrapper className="">
        {cards.map((card, index) => (
            <StackingCardOffset
                key={index}
                index={index}
                className="aspect-3/5 w-[85vw] overflow-hidden rounded-2xl border border-white/10 md:aspect-video md:w-1/2">
                <div className="flex h-full w-full flex-col md:flex-row">
                    <div className="relative h-2/5 w-full shrink-0 md:h-full md:w-1/2">
                        <Image
                            src={card.image}
                            alt={card.brand}
                            fill
                            className="object-cover grayscale"
                        />
                    </div>

                    <div className="flex h-3/5 w-full flex-col justify-between bg-[#0e0e0e] p-4 md:h-full md:w-1/2 md:p-6">
                        <div className="flex flex-col gap-1">
                            <p className="font-dm-sans text-[10px] font-light tracking-widest text-white/40 uppercase">
                                {card.year} &bull; {card.category}
                            </p>
                            <p className="font-syne text-sm font-semibold text-white/90">
                                {card.brand}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="font-syne text-base leading-snug font-bold text-white">
                                {card.heading}
                            </h3>
                            <p className="font-dm-sans text-[11px] leading-relaxed font-light text-white/50">
                                {card.description}
                            </p>
                            <button className="font-dm-sans flex w-fit items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-1.5 text-[11px] text-white/80 transition-colors hover:border-white/50 hover:text-white">
                                {card.cta}
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 5h6M5.5 2l3 3-3 3"
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Bottom — stats */}
                        <div className="flex gap-6 border-t border-white/10 pt-4">
                            {card.stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="flex flex-col gap-0.5">
                                    <span className="font-syne text-base font-bold text-white md:text-xl">
                                        {stat.value}
                                    </span>
                                    <span className="font-dm-sans text-[9px] tracking-widest text-white/40 uppercase">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StackingCardOffset>
        ))}
    </StackingCardsWrapper>
);

export {OffsetDemo};
