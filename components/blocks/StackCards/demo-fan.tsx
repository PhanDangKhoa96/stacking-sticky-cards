import Image from "next/image";
import {StackingCardFan} from "./card-fan";
import {StackingCardsWrapper} from "./wrapper";

const cards = [
    {src: "/images/image-108.png", alt: "Image 108"},
    {src: "/images/image-109.png", alt: "Image 109"},
    {src: "/images/image-117.png", alt: "Image 117"},
    {src: "/images/image-132.png", alt: "Image 132"},
    {src: "/images/image-158.png", alt: "Image 158"},
];

const FanDemo = () => (
    <StackingCardsWrapper className="">
        {cards.map((card, index) => (
            <StackingCardFan
                key={index}
                index={index}
                className="aspect-3/4 w-[38vw] md:w-[20vw]">
                <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover grayscale"
                />
            </StackingCardFan>
        ))}
    </StackingCardsWrapper>
);

export {FanDemo};
