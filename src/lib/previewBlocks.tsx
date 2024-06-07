import CodeBlockTab from "@/components/ui/CodeBlockTab";
import demoDatas from "./demoDatas";
import getCodeFile from "@/components/helpers/getCodeFile";

const previewBlocks = {
    fadeUp: <CodeBlockTab
        blockId="fade-up"
        preview={demoDatas.fadeUp}
        jsxFilePath="src/components/animations/fade/jsx/FadeUp.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeUp.tsx"
    />,
    fadeDown: <CodeBlockTab
        blockId="fade-down"
        preview={demoDatas.fadeDown}
        jsxFilePath="src/components/animations/fade/jsx/FadeDown.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeDown.tsx"
    />,
    fadeRight: <CodeBlockTab
        blockId="fade-right"
        preview={demoDatas.fadeRight}
        jsxFilePath="src/components/animations/fade/jsx/FadeRight.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeRight.tsx"
    />,
    fadeLeft: <CodeBlockTab
        blockId="fade-left"
        preview={demoDatas.fadeLeft}
        jsxFilePath="src/components/animations/fade/jsx/FadeLeft.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeLeft.tsx"
    />,
    fadeUpRight: <CodeBlockTab
        blockId="fade-up-right"
        preview={demoDatas.fadeUpRight}
        jsxFilePath="src/components/animations/fade/jsx/FadeUpRight.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeUpRight.tsx"
    />,
    fadeUpLeft: <CodeBlockTab
        blockId="fade-up-left"
        preview={demoDatas.fadeUpLeft}
        jsxFilePath="src/components/animations/fade/jsx/FadeUpLeft.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeUpLeft.tsx"
    />,
    fadeDownRight: <CodeBlockTab
        blockId="fade-down-right"
        preview={demoDatas.fadeDownRight}
        jsxFilePath="src/components/animations/fade/jsx/FadeDownRight.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeDownRight.tsx"
    />,
    fadeDownLeft: <CodeBlockTab
        blockId="fade-down-left"
        preview={demoDatas.fadeDownLeft}
        jsxFilePath="src/components/animations/fade/jsx/FadeDownLeft.jsx"
        tsxFilePath="src/components/animations/fade/tsx/FadeDownLeft.tsx"
    />,
    zoomIn: <CodeBlockTab
        blockId="zoom-in"
        preview={demoDatas.zoomIn}
        jsxFilePath="src/components/animations/zoom/jsx/ZoomIn.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomIn.tsx"
    />,
    zoomOut: <CodeBlockTab
        blockId="zoom-out"
        preview={demoDatas.zoomOut}
        jsxFilePath="src/components/animations/zoom/jsx/ZoomOut.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomOut.tsx"
    />,
    zoomInUp: <CodeBlockTab
        blockId="zoom-in-up"
        preview={demoDatas.zoomInUp}
        jsxFilePath="src/components/animations/zoom/jsx/ZoomInUp.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomInUp.tsx"
    />,
    zoomInDown: <CodeBlockTab
        blockId="zoom-in-down"
        preview={demoDatas.zoomInDown}
        jsxFilePath="src/components/animations/zoom/jsx/ZoomInDown.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomInDown.tsx"
    />,
    zoomInLeft: <CodeBlockTab
        blockId="zoom-in-left"
        preview={demoDatas.zoomInLeft}
        jsxFilePath="src/components/animations/zoom/jsx/ZoomInLeft.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomInLeft.tsx"
    />,
    zoomInRight: <CodeBlockTab
        blockId="zoom-in-right"
        preview={demoDatas.zoomInRight}
        jsxFilePath="src/components/animations/zoom/jsx/ZoomInRight.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomInRight.tsx"
    />,
    zoomOutUp: <CodeBlockTab
        blockId="zoom-out-up"
        preview={demoDatas.zoomOutUp}
        jsxFilePath="src/components/animations/zoom/jsx/ZoomOutUp.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomOutUp.tsx"
    />,
    zoomOutDown: <CodeBlockTab
        blockId="zoom-out-down"
        preview={demoDatas.zoomOutDown}
        jsxFilePath="src/components/animations/zoom/jsx/ZoomOutDown.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomOutDown.tsx"
    />,
    zoomOutLeft: <CodeBlockTab
        blockId="zoom-out-left"
        preview={demoDatas.zoomOutLeft}
        jsxFilePath="src/components/animations/zoom/jsx/ZoomOutLeft.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomOutLeft.tsx"
    />,
    zoomOutRight: <CodeBlockTab
        blockId="zoom-out-right"
        preview={demoDatas.zoomOutRight}
        jsxFilePath="src/components/animations/zoom/jsx/ZoomOutRight.jsx"
        tsxFilePath="src/components/animations/zoom/tsx/ZoomOutRight.tsx"
    />,
    flipUp: <CodeBlockTab
        blockId="flip-up"
        preview={demoDatas.flipUp}
        jsxFilePath="src/components/animations/flip/jsx/FlipUp.jsx"
        tsxFilePath="src/components/animations/flip/tsx/FlipUp.tsx"
    />,
    flipDown: <CodeBlockTab
        blockId="flip-down"
        preview={demoDatas.flipDown}
        jsxFilePath="src/components/animations/flip/jsx/FlipDown.jsx"
        tsxFilePath="src/components/animations/flip/tsx/FlipDown.tsx"
    />,
    flipRight: <CodeBlockTab
        blockId="flip-right"
        preview={demoDatas.flipRight}
        jsxFilePath="src/components/animations/flip/jsx/FlipRight.jsx"
        tsxFilePath="src/components/animations/flip/tsx/FlipRight.tsx"
    />,
    flipLeft: <CodeBlockTab
        blockId="flip-left"
        preview={demoDatas.flipLeft}
        jsxFilePath="src/components/animations/flip/jsx/FlipLeft.jsx"
        tsxFilePath="src/components/animations/flip/tsx/FlipLeft.tsx"
    />,
};

export default previewBlocks;
