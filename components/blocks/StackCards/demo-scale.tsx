import {StackingCardScale} from "./card-scale";
import {StackingCardsWrapper} from "./wrapper";

type EventCard = {type: "event"; tags: string[]; title: string; author: string; cta: string};
type ComingSoonCard = {type: "coming-soon"; time: string; title: string; placeholder: string; cta: string};
type GuideCard = {type: "guide"; tag: string; subtitle: string; title: string; duration: string; timestamp: string};
type Card = EventCard | ComingSoonCard | GuideCard;

const cards: Card[] = [
    {
        type: "event",
        tags: ["soft", "guide"],
        title: "Premier Pro tips & tricks",
        author: "with Luis Denlonsen",
        cta: "About event",
    },
    {
        type: "coming-soon",
        time: "8:30 PM",
        title: "Coming soon",
        placeholder: "Email address",
        cta: "Notify me",
    },
    {
        type: "guide",
        tag: "guide",
        subtitle: "How to create",
        title: "All about Sequencing",
        duration: "1:23:11",
        timestamp: "45:34",
    },
];

type ArcPosition = "top-right" | "bottom-right" | "bottom-left";

const ARC_COORDS: Record<ArcPosition, {cx: number; cy: number}> = {
    "top-right":    {cx: 520, cy: -30},
    "bottom-right": {cx: 520, cy: 370},
    "bottom-left":  {cx: 80,  cy: 370},
};

const ArcDecoration = ({position}: {position: ArcPosition}) => {
    const {cx, cy} = ARC_COORDS[position];
    return (
        <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
            viewBox="0 0 600 340"
            fill="none"
            preserveAspectRatio="xMidYMid slice">
            {[220, 340, 440].map((r, i) => (
                <circle key={r} cx={cx} cy={cy} r={r} stroke="white" strokeWidth={[60, 40, 30][i]} />
            ))}
        </svg>
    );
};

const EventCard = ({card}: {card: EventCard}) => (
    <div className="relative flex h-full w-full flex-col justify-between bg-[#111] p-4 md:p-7">
        <ArcDecoration position="top-right" />
        <div className="flex gap-2">
            {card.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/20 px-3 py-1 font-dm-sans text-[11px] text-white/50">
                    {tag}
                </span>
            ))}
        </div>
        <h3 className="font-syne text-lg font-bold leading-tight text-white md:text-2xl">{card.title}</h3>
        <div className="flex items-center justify-between">
            <p className="font-dm-sans text-xs text-white/40">{card.author}</p>
            <button className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 font-dm-sans text-xs text-white/70 transition-colors hover:border-white/40 hover:text-white">
                {card.cta}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6M5.5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    </div>
);

const ComingSoonCard = ({card}: {card: ComingSoonCard}) => (
    <div className="relative flex h-full w-full flex-col justify-between bg-[#131313] p-4 md:p-7">
        <ArcDecoration position="bottom-right" />
        <p className="font-dm-sans text-xs text-white/30">{card.time}</p>
        <div className="flex flex-col gap-1">
            <div className="mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="font-dm-sans text-xs text-white/40">Upcoming</span>
            </div>
            <h3 className="font-syne text-2xl font-bold text-white">{card.title}</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
            <input
                type="email"
                placeholder={card.placeholder}
                className="flex-1 bg-transparent font-dm-sans text-xs text-white placeholder-white/30 outline-none"
            />
            <button className="rounded-full bg-white px-4 py-1.5 font-dm-sans text-[11px] font-medium text-black transition-opacity hover:opacity-80">
                {card.cta}
            </button>
        </div>
    </div>
);

const GuideCard = ({card}: {card: GuideCard}) => (
    <div className="relative flex h-full w-full flex-col justify-between bg-[#161616] p-4 md:p-7">
        <ArcDecoration position="bottom-left" />
        <div className="flex items-center justify-between">
            <span className="rounded-full border border-white/20 px-3 py-1 font-dm-sans text-[11px] text-white/50">
                {card.tag}
            </span>
            <span className="font-dm-sans text-xs tabular-nums text-white/30">{card.timestamp}</span>
        </div>
        <div>
            <p className="mb-1 font-dm-sans text-xs text-white/30">{card.subtitle}</p>
            <h3 className="font-syne text-lg font-bold leading-tight text-white md:text-2xl">{card.title}</h3>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M2 1.5l4 2.5-4 2.5V1.5z" fill="white" />
                    </svg>
                </span>
                <span className="font-dm-sans text-xs text-white/40">Watch guide</span>
            </div>
            <span className="font-dm-sans text-xs tabular-nums text-white/25">{card.duration}</span>
        </div>
    </div>
);

const ScaleDemo = () => (
    <StackingCardsWrapper className="">
        {cards.map((card, index) => (
            <StackingCardScale
                key={card.type}
                index={index}
                className="aspect-video w-[85vw] overflow-hidden rounded-2xl border border-white/10 md:w-1/2">
                {card.type === "event" && <EventCard card={card} />}
                {card.type === "coming-soon" && <ComingSoonCard card={card} />}
                {card.type === "guide" && <GuideCard card={card} />}
            </StackingCardScale>
        ))}
    </StackingCardsWrapper>
);

export {ScaleDemo};
