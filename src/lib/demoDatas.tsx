import FadeUp from "@/components/animations/fade/tsx/FadeUp";
import FadeDown from "@/components/animations/fade/tsx/FadeDown";
import FadeRight from "@/components/animations/fade/tsx/FadeRight";
import FadeLeft from "@/components/animations/fade/tsx/FadeLeft";
import FadeUpRight from "@/components/animations/fade/tsx/FadeUpRight";
import FadeUpLeft from "@/components/animations/fade/tsx/FadeUpLeft";
import FadeDownRight from "@/components/animations/fade/tsx/FadeDownRight";
import FadeDownLeft from "@/components/animations/fade/tsx/FadeDownLeft";
import DemoContainer from "@/components/ui/demo-objects/DemoContainer";
import Square from "@/components/ui/demo-objects/Square";
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
        animation={<FadeUp><Square /></FadeUp>}
    />,
    fadeDown: <DemoContainer
        className="from-orange-600 to-orange-600"
        animation={<FadeDown><Square /></FadeDown>}
    />,
    fadeRight: <DemoContainer
        className="from-amber-600 to-amber-500"
        animation={<FadeRight><Square /></FadeRight>}
    />,
    fadeLeft: <DemoContainer
        className="from-yellow-600 to-yellow-500"
        animation={<FadeLeft><Square /></FadeLeft>}
    />,
    fadeUpRight: <DemoContainer
        className="from-lime-600 to-lime-500"
        animation={<FadeUpRight><Square /></FadeUpRight>}
    />,
    fadeUpLeft: <DemoContainer
        className="from-green-600 to-green-500"
        animation={<FadeUpLeft><Square /></FadeUpLeft>}
    />,
    fadeDownRight: <DemoContainer
        className="from-emerald-600 to-emerald-500"
        animation={<FadeDownRight><Square /></FadeDownRight>}
    />,
    fadeDownLeft: <DemoContainer
        className="from-cyan-600 to-cyan-500"
        animation={<FadeDownLeft><Square /></FadeDownLeft>}
    />,
    zoomIn: <DemoContainer
        className="from-sky-600 to-sky-500"
        animation={<ZoomIn><Square /></ZoomIn>}
    />,
    zoomOut: <DemoContainer
        className="from-blue-600 to-blue-500"
        animation={<ZoomOut><Square /></ZoomOut>}
    />,
    zoomInUp: <DemoContainer
        className="from-indigo-600 to-indigo-500"
        animation={<ZoomInUp><Square /></ZoomInUp>}
    />,
    zoomInDown: <DemoContainer
        className="from-violet-600 to-violet-500"
        animation={<ZoomInDown><Square /></ZoomInDown>}
    />,
    zoomInLeft: <DemoContainer
        className="from-purple-600 to-purple-500"
        animation={<ZoomInLeft><Square /></ZoomInLeft>}
    />,
    zoomInRight: <DemoContainer
        className="from-fuchsia-600 to-fuchsia-500"
        animation={<ZoomInRight><Square /></ZoomInRight>}
    />,
    zoomOutUp: <DemoContainer
        className="from-pink-600 to-pink-500"
        animation={<ZoomOutUp><Square /></ZoomOutUp>}
    />,
    zoomOutDown: <DemoContainer
        className="from-rose-600 to-rose-500"
        animation={<ZoomOutDown><Square /></ZoomOutDown>}
    />,
    zoomOutLeft: <DemoContainer
        className="from-red-600 to-red-500"
        animation={<ZoomOutLeft><Square /></ZoomOutLeft>}
    />,
    zoomOutRight: <DemoContainer
        className="from-orange-600 to-orange-500"
        animation={<ZoomOutRight><Square /></ZoomOutRight>}
    />,
    flipUp: <DemoContainer
        className="from-amber-600 to-amber-500"
        animation={<FlipUp><Square /></FlipUp>}
    />,
    flipDown: <DemoContainer
        className="from-yellow-600 to-yellow-500"
        animation={<FlipDown><Square /></FlipDown>}
    />,
    flipRight: <DemoContainer
        className="from-lime-600 to-lime-500"
        animation={<FlipRight><Square /></FlipRight>}
    />,
    flipLeft: <DemoContainer
        className="from-green-600 to-green-500"
        animation={<FlipLeft><Square /></FlipLeft>}
    />,
};

export default demoDatas;
