import Image from "next/image";
import {SpreadFlipContainer, StackingCardSpreadFlip} from "./card-spread-flip";
import {StackingCardsWrapper} from "./wrapper";

const cards = [
    {
        title: "Flow",
        description:
            "Engineered for flow. Designed to move with you, not against you.",
        illustration: "/illustrations/illustration-01.png",
    },
    {
        title: "Silence",
        description:
            "Silence in motion. The kind of precision you feel before you hear.",
        illustration: "/illustrations/illustration-02.png",
    },
    {
        title: "Form",
        description:
            "Form follows force. Every line drawn by the same invisible hand.",
        illustration: "/illustrations/illustration-03.png",
    },
];

interface CardBackProps {
    title: string;
    description: string;
    illustration: string;
}

interface CardFrontProps {
    index: number;
}

const CardFront = ({index}: CardFrontProps) => (
    <div className="absolute inset-0 overflow-hidden backface-hidden">
        <Image
            src="/images/photo-04.png"
            alt=""
            width={1920}
            height={1076}
            className="absolute top-0 bottom-0 h-full w-[300%] max-w-none object-cover"
            style={{left: `${-index * 100}%`}}
        />
    </div>
);

const CardBack = ({title, description, illustration}: CardBackProps) => (
    <div className="absolute inset-0 flex rotate-y-180 flex-col justify-between gap-y-5 overflow-hidden bg-white px-8 py-10 backface-hidden">
        <p className="text-3xl leading-tight font-semibold tracking-tight text-neutral-900">
            {description}
        </p>

        <div className="relative ml-auto aspect-square w-1/3 overflow-hidden">
            <Image
                src={illustration}
                alt={title}
                fill
                className="object-cover"
            />
        </div>
    </div>
);

const SpreadFlipDemo = () => (
    <StackingCardsWrapper container={SpreadFlipContainer}>
        {cards.map(({title, description, illustration}, index) => (
            <StackingCardSpreadFlip
                key={index}
                index={index}
                className="flex-1">
                <CardFront index={index} />

                <CardBack
                    title={title}
                    description={description}
                    illustration={illustration}
                />
            </StackingCardSpreadFlip>
        ))}
    </StackingCardsWrapper>
);

export {SpreadFlipDemo};
