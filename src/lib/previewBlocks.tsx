import CodeBlockTab from "@/components/layouts/animationcontent/CodeBlockTab";
import DemoContainer from "@/components/layouts/demotab/DemoContainer";
import Square from "@/components/layouts/demotab/Square";
import {
    FadeUp,
    FadeDown,
    FadeRight,
    FadeLeft,
    FadeUpRight,
    FadeUpLeft,
    FadeDownRight,
    FadeDownLeft,
    ZoomIn,
    ZoomOut,
    ZoomInUp,
    ZoomInDown,
    ZoomInLeft,
    ZoomInRight,
    ZoomOutUp,
    ZoomOutDown,
    ZoomOutLeft,
    ZoomOutRight,
    FlipUp,
    FlipDown,
    FlipRight,
    FlipLeft
} from "@/components/animations/animationExports";

const previewBlocks = {
    fadeUp: <CodeBlockTab
        blockId="fade-up"
        jsxFilePath="src/components/animations/fade/jsx/FadeUp.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeUp.tsx"
        preview={<DemoContainer
            className="from-red-700 to-red-600"
            animationElement={<FadeUp><Square /></FadeUp>}
        />}
    />,
    fadeDown: <CodeBlockTab
        blockId="fade-down"
        jsxFilePath="src/components/animations/fade/jsx/FadeDown.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeDown.tsx"
        preview={<DemoContainer
            className="from-orange-600 to-orange-600"
            animationElement={<FadeDown><Square /></FadeDown>}
        />}
    />,
    fadeRight: <CodeBlockTab
        blockId="fade-right"
        jsxFilePath="src/components/animations/fade/jsx/FadeRight.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeRight.tsx"
        preview={<DemoContainer
            className="from-amber-600 to-amber-500"
            animationElement={<FadeRight><Square /></FadeRight>}
        />}
    />,
    fadeLeft: <CodeBlockTab
        blockId="fade-left"
        jsxFilePath="src/components/animations/fade/jsx/FadeLeft.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeLeft.tsx"
        preview={<DemoContainer
            className="from-yellow-600 to-yellow-500"
            animationElement={<FadeLeft><Square /></FadeLeft>}
        />}
    />,
    fadeUpRight: <CodeBlockTab
        blockId="fade-up-right"
        jsxFilePath="src/components/animations/fade/jsx/FadeUpRight.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeUpRight.tsx"
        preview={<DemoContainer
            className="from-lime-600 to-lime-500"
            animationElement={<FadeUpRight><Square /></FadeUpRight>}
        />}
    />,
    fadeUpLeft: <CodeBlockTab
        blockId="fade-up-left"
        jsxFilePath="src/components/animations/fade/jsx/FadeUpLeft.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeUpLeft.tsx"
        preview={<DemoContainer
            className="from-green-600 to-green-500"
            animationElement={<FadeUpLeft><Square /></FadeUpLeft>}
        />}
    />,
    fadeDownRight: <CodeBlockTab
        blockId="fade-down-right"
        jsxFilePath="src/components/animations/fade/jsx/FadeDownRight.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeDownRight.tsx"
        preview={<DemoContainer
            className="from-emerald-600 to-emerald-500"
            animationElement={<FadeDownRight><Square /></FadeDownRight>}
        />}
    />,
    fadeDownLeft: <CodeBlockTab
        blockId="fade-down-left"
        jsxFilePath="src/components/animations/fade/jsx/FadeDownLeft.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeDownLeft.tsx"
        preview={<DemoContainer
            className="from-teal-600 to-teal-500"
            animationElement={<FadeDownLeft><Square /></FadeDownLeft>}
        />}
    />,
    zoomIn: <CodeBlockTab
        blockId="zoom-in"
        jsxFilePath="src/components/animations/zoom/jsx/ZoomIn.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomIn.tsx"
        preview={<DemoContainer
            className="from-cyan-600 to-cyan-500"
            animationElement={<ZoomIn><Square /></ZoomIn>}
        />}
    />,
    zoomOut: <CodeBlockTab
        blockId="zoom-out"
        jsxFilePath="src/components/animations/zoom/jsx/ZoomOut.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomOut.tsx"
        preview={<DemoContainer
            className="from-sky-600 to-sky-500"
            animationElement={<ZoomOut><Square /></ZoomOut>}
        />}
    />,
    zoomInUp: <CodeBlockTab
        blockId="zoom-in-up"
        jsxFilePath="src/components/animations/zoom/jsx/ZoomInUp.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomInUp.tsx"
        preview={<DemoContainer
            className="from-blue-600 to-blue-500"
            animationElement={<ZoomInUp><Square /></ZoomInUp>}
        />}
    />,
    zoomInDown: <CodeBlockTab
        blockId="zoom-in-down"
        jsxFilePath="src/components/animations/zoom/jsx/ZoomInDown.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomInDown.tsx"
        preview={<DemoContainer
            className="from-indigo-600 to-indigo-500"
            animationElement={<ZoomInDown><Square /></ZoomInDown>}
        />}
    />,
    zoomInLeft: <CodeBlockTab
        blockId="zoom-in-left"
        jsxFilePath="src/components/animations/zoom/jsx/ZoomInLeft.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomInLeft.tsx"
        preview={<DemoContainer
            className="from-violet-600 to-violet-500"
            animationElement={<ZoomInLeft><Square /></ZoomInLeft>}
        />}
    />,
    zoomInRight: <CodeBlockTab
        blockId="zoom-in-right"
        jsxFilePath="src/components/animations/zoom/jsx/ZoomInRight.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomInRight.tsx"
        preview={<DemoContainer
            className="from-purple-600 to-purple-500"
            animationElement={<ZoomInRight><Square /></ZoomInRight>}
        />}
    />,
    zoomOutUp: <CodeBlockTab
        blockId="zoom-out-up"
        jsxFilePath="src/components/animations/zoom/jsx/ZoomOutUp.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomOutUp.tsx"
        preview={<DemoContainer
            className="from-fuchsia-600 to-fuchsia-500"
            animationElement={<ZoomOutUp><Square /></ZoomOutUp>}
        />}
    />,
    zoomOutDown: <CodeBlockTab
        blockId="zoom-out-down"
        jsxFilePath="src/components/animations/zoom/jsx/ZoomOutDown.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomOutDown.tsx"
        preview={<DemoContainer
            className="from-pink-600 to-pink-500"
            animationElement={<ZoomOutDown><Square /></ZoomOutDown>}
        />}
    />,
    zoomOutLeft: <CodeBlockTab
        blockId="zoom-out-left"
        jsxFilePath="src/components/animations/zoom/jsx/ZoomOutLeft.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomOutLeft.tsx"
        preview={<DemoContainer
            className="from-rose-600 to-rose-500"
            animationElement={<ZoomOutLeft><Square /></ZoomOutLeft>}
        />}
    />,
    zoomOutRight: <CodeBlockTab
        blockId="zoom-out-right"
        jsxFilePath="src/components/animations/zoom/jsx/ZoomOutRight.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomOutRight.tsx"
        preview={<DemoContainer
            className="from-red-700 to-red-600"
            animationElement={<ZoomOutRight><Square /></ZoomOutRight>}
        />}
    />,
    flipUp: <CodeBlockTab
        blockId="flip-up"
        jsxFilePath="src/components/animations/flip/jsx/FlipUp.jsx"
        tsxFilePath="src/components/animations/flip/tsx/FlipUp.tsx"
        preview={<DemoContainer
            className="from-orange-600 to-orange-600"
            animationElement={<FlipUp><Square /></FlipUp>}
        />}
    />,
    flipDown: <CodeBlockTab
        blockId="flip-down"
        jsxFilePath="src/components/animations/flip/jsx/FlipDown.jsx"
        tsxFilePath="src/components/animations/flip/tsx/FlipDown.tsx"
        preview={<DemoContainer
            className="from-amber-600 to-amber-500"
            animationElement={<FlipDown><Square /></FlipDown>}
        />}
    />,
    flipRight: <CodeBlockTab
        blockId="flip-right"
        jsxFilePath="src/components/animations/flip/jsx/FlipRight.jsx"
        tsxFilePath="src/components/animations/flip/tsx/FlipRight.tsx"
        preview={<DemoContainer
            className="from-yellow-600 to-yellow-500"
            animationElement={<FlipRight><Square /></FlipRight>}
        />}
    />,
    flipLeft: <CodeBlockTab
        blockId="flip-left"
        jsxFilePath="src/components/animations/flip/jsx/FlipLeft.jsx"
        tsxFilePath="src/components/animations/flip/tsx/FlipLeft.tsx"
        preview={<DemoContainer
            className="from-lime-600 to-lime-500"
            animationElement={<FlipLeft><Square /></FlipLeft>}
        />}
    />,
};

export default previewBlocks;
