import Square from "@/components/ui/demo-objects/Square";
import FadeUp from "@/components/animations/fade/tsx/FadeUp";
import FadeDown from "@/components/animations/fade/tsx/FadeDown";
import FadeRight from "@/components/animations/fade/tsx/FadeRight";
import FadeLeft from "@/components/animations/fade/tsx/FadeLeft";
import FadeUpRight from "@/components/animations/fade/tsx/FadeUpRight";
import FadeUpLeft from "@/components/animations/fade/tsx/FadeUpLeft";
import FadeDownRight from "@/components/animations/fade/tsx/FadeDownRight";
import FadeDownLeft from "@/components/animations/fade/tsx/FadeDownLeft";
import DemoContainer from "@/components/ui/demo-objects/DemoContainer";
import ZoomIn from "@/components/animations/zoom/tsx/ZoomIn";
import ZoomOut from "@/components/animations/zoom/tsx/ZoomOut";
import ZoomInUp from "@/components/animations/zoom/tsx/ZoomInUp";
import ZoomInDown from "@/components/animations/zoom/tsx/ZoomInDown";
import ZoomInLeft from "@/components/animations/zoom/tsx/ZoomInLeft";
import ZoomInRight from "@/components/animations/zoom/tsx/ZoomInRight";
import ZoomOutUp from "@/components/animations/zoom/tsx/ZoomOutUp";
import ZoomOutDown from "@/components/animations/zoom/tsx/ZoomOutDown";
import ZoomOutLeft from "@/components/animations/zoom/tsx/ZoomOutLeft";
import ZoomOutRight from "@/components/animations/zoom/tsx/ZoomOutRight";
import FlipUp from "@/components/animations/flip/tsx/FlipUp";
import FlipDown from "@/components/animations/flip/tsx/FlipDown";
import FlipRight from "@/components/animations/flip/tsx/FlipRight";
import FlipLeft from "@/components/animations/flip/tsx/FlipLeft";

const demoDatas = {
    fadeUp: <DemoContainer
        className="from-red-700 to-red-600"
        animationElement={<FadeUp><Square /></FadeUp>}
    />,
    fadeDown: <DemoContainer
        className="from-orange-600 to-orange-600"
        animationElement={<FadeDown><Square /></FadeDown>}
    />,
    fadeRight: <DemoContainer
        className="from-amber-600 to-amber-500"
        animationElement={<FadeRight><Square /></FadeRight>}
    />,
    fadeLeft: <DemoContainer
        className="from-yellow-600 to-yellow-500"
        animationElement={<FadeLeft><Square /></FadeLeft>}
    />,
    fadeUpRight: <DemoContainer
        className="from-lime-600 to-lime-500"
        animationElement={<FadeUpRight><Square /></FadeUpRight>}
    />,
    fadeUpLeft: <DemoContainer
        className="from-green-600 to-green-500"
        animationElement={<FadeUpLeft><Square /></FadeUpLeft>}
    />,
    fadeDownRight: <DemoContainer
        className="from-emerald-600 to-emerald-500"
        animationElement={<FadeDownRight><Square /></FadeDownRight>}
    />,
    fadeDownLeft: <DemoContainer
        className="from-cyan-600 to-cyan-500"
        animationElement={<FadeDownLeft><Square /></FadeDownLeft>}
    />,
    zoomIn: <DemoContainer
        className="from-sky-600 to-sky-500"
        animationElement={<ZoomIn><Square /></ZoomIn>}
    />,
    zoomOut: <DemoContainer
        className="from-blue-600 to-blue-500"
        animationElement={<ZoomOut><Square /></ZoomOut>}
    />,
    zoomInUp: <DemoContainer
        className="from-indigo-600 to-indigo-500"
        animationElement={<ZoomInUp><Square /></ZoomInUp>}
    />,
    zoomInDown: <DemoContainer
        className="from-violet-600 to-violet-500"
        animationElement={<ZoomInDown><Square /></ZoomInDown>}
    />,
    zoomInLeft: <DemoContainer
        className="from-purple-600 to-purple-500"
        animationElement={<ZoomInLeft><Square /></ZoomInLeft>}
    />,
    zoomInRight: <DemoContainer
        className="from-fuchsia-600 to-fuchsia-500"
        animationElement={<ZoomInRight><Square /></ZoomInRight>}
    />,
    zoomOutUp: <DemoContainer
        className="from-pink-600 to-pink-500"
        animationElement={<ZoomOutUp><Square /></ZoomOutUp>}
    />,
    zoomOutDown: <DemoContainer
        className="from-rose-600 to-rose-500"
        animationElement={<ZoomOutDown><Square /></ZoomOutDown>}
    />,
    zoomOutLeft: <DemoContainer
        className="from-red-600 to-red-500"
        animationElement={<ZoomOutLeft><Square /></ZoomOutLeft>}
    />,
    zoomOutRight: <DemoContainer
        className="from-orange-600 to-orange-500"
        animationElement={<ZoomOutRight><Square /></ZoomOutRight>}
    />,
    flipUp: <DemoContainer
        className="from-amber-600 to-amber-500"
        animationElement={<FlipUp><Square /></FlipUp>}
    />,
    flipDown: <DemoContainer
        className="from-yellow-600 to-yellow-500"
        animationElement={<FlipDown><Square /></FlipDown>}
    />,
    flipRight: <DemoContainer
        className="from-lime-600 to-lime-500"
        animationElement={<FlipRight><Square /></FlipRight>}
    />,
    flipLeft: <DemoContainer
        className="from-green-600 to-green-500"
        animationElement={<FlipLeft><Square /></FlipLeft>}
    />,
};

export default demoDatas;
