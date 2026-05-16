import {Syne, DM_Sans} from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-syne",
    weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    weight: ["300", "400", "500"],
});

export {syne, dmSans};
