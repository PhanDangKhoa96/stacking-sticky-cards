import Image from "next/image";
import {FloatContainer, StackingCardFloat} from "./card-float";
import {StackingCardsWrapper} from "./wrapper";

const cards = [
    {
        title: "Flow",
        tagline: "Natural. Effortless. Yours.",
        image: "/images/image-1.png",
        heading: "A Design Built for Effortless Flow",
        body: "Every surface is shaped to disappear beneath your hands. No resistance, no friction — just pure, uninterrupted motion from the first touch.",
        detail: "Studio Series · Limited Edition · Handcrafted in Japan",
        monogram: "F",
    },
    {
        title: "Silence",
        tagline: "Quiet precision. Infinite clarity.",
        image: "/images/image-4.png",
        heading: "Silence is the Sound of Precision",
        body: "Engineered to eliminate noise at its source. What remains is clarity — the kind you feel in every keystroke, and hear in none.",
        detail: "Studio Series · Limited Edition · Handcrafted in Japan",
        monogram: "S",
    },
    {
        title: "Form",
        tagline: "Structure born from force.",
        image: "/images/image-24.png",
        heading: "Form That Follows Every Force",
        body: "Drawn from invisible forces and refined through thousands of iterations. Structure that speaks before you even touch it.",
        detail: "Studio Series · Limited Edition · Handcrafted in Japan",
        monogram: "F",
    },
];

interface CardFrontProps {
    image: string;
}

interface CardBackProps {
    heading: string;
    body: string;
    detail: string;
    monogram: string;
}

const CardFront = ({image}: CardFrontProps) => (
    <div className="absolute inset-0 overflow-hidden backface-hidden">
        <Image src={image} alt={""} fill className="object-cover" />
    </div>
);

const CardBack = ({heading, body, detail, monogram}: CardBackProps) => (
    <div className="absolute inset-0 flex rotate-y-180 flex-col justify-between overflow-hidden bg-neutral-100 px-7 py-8 backface-hidden">
        <div className="flex flex-col gap-4">
            <h3 className="font-syne text-2xl leading-tight font-bold tracking-tight text-neutral-800">
                {heading}
            </h3>
            <p className="text-md leading-relaxed text-neutral-500">{body}</p>
        </div>

        <p className="pr-8 text-[10px] leading-relaxed tracking-wide text-neutral-400">
            {detail}
        </p>
    </div>
);

const FloatDemo = () => (
    <StackingCardsWrapper container={FloatContainer}>
        {cards.map(({image, heading, body, detail, monogram}, index) => (
            <StackingCardFloat
                key={index}
                index={index}
                className="aspect-3/4 w-[42vw] md:w-[25vw]">
                <CardFront image={image} />
                <CardBack
                    heading={heading}
                    body={body}
                    detail={detail}
                    monogram={monogram}
                />
            </StackingCardFloat>
        ))}
    </StackingCardsWrapper>
);

export {FloatDemo};
