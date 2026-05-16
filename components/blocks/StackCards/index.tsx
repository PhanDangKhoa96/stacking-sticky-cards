import {FanDemo} from "./demo-fan";
import {FloatDemo} from "./demo-float";
import {OffsetDemo} from "./demo-offset";
import {ScaleDemo} from "./demo-scale";
import {SpreadFlipDemo} from "./demo-spread-flip";

const DemoHeading = ({name}: {name: string}) => (
    <section className="flex h-[20vh] items-center justify-center px-6">
        <h2 className="font-syne border-b border-white/20 text-5xl font-bold text-white md:text-7xl">
            {name}
        </h2>
    </section>
);

const MobileUpdating = () => (
    <div className="flex h-[30vh] items-center justify-center">
        <p className="font-dm-sans text-lg text-white/30">Updating...</p>
    </div>
);

const StackedCards = () => {
    return (
        <>
            <section id="demo-scale">
                <DemoHeading name="Scale" />
                <ScaleDemo />
            </section>
            <section id="demo-offset">
                <DemoHeading name="Offset" />
                <OffsetDemo />
            </section>
            <section id="demo-fan">
                <DemoHeading name="Fan" />
                <FanDemo />
            </section>
            <section id="demo-float">
                <DemoHeading name="Float" />
                <div className="md:hidden"><MobileUpdating /></div>
                <div className="hidden md:block"><FloatDemo /></div>
            </section>
            <section id="demo-spread-flip">
                <DemoHeading name="Spread Flip" />
                <div className="md:hidden"><MobileUpdating /></div>
                <div className="hidden md:block"><SpreadFlipDemo /></div>
            </section>
        </>
    );
};

export default StackedCards;
