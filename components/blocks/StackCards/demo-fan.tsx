import Image from "next/image";
import {StackingCardFan} from "./card-fan";
import {StackingCardsWrapper} from "./wrapper";

const cards = [
    {src: "/images/photo-05.png", alt: "Photo 05"},
    {src: "/images/photo-06.png", alt: "Photo 06"},
    {src: "/images/photo-07.png", alt: "Photo 07"},
    {src: "/images/photo-08.png", alt: "Photo 08"},
    {src: "/images/photo-09.png", alt: "Photo 09"},
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
