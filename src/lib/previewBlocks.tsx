import GetCodeExample from "@/components/helpers/GetCodeExample";
import CodeBlockTab from "@/components/ui/CodeBlockTab";
import demoDatas from "./demoDatas";

const previewBlocks = {
    fadeUp: <CodeBlockTab
        blockId="fade-up"
        preview={demoDatas.fadeUp}
        jsx={<GetCodeExample filePath="src/components/animations/fade/jsx/FadeUp.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/fade/tsx/FadeUp.tsx" />}
    />,
    fadeDown: <CodeBlockTab
        blockId="fade-down"
        preview={demoDatas.fadeDown}
        jsx={<GetCodeExample filePath="src/components/animations/fade/jsx/FadeDown.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/fade/tsx/FadeDown.tsx" />}
    />,
    fadeRight: <CodeBlockTab
        blockId="fade-right"
        preview={demoDatas.fadeRight}
        jsx={<GetCodeExample filePath="src/components/animations/fade/jsx/FadeRight.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/fade/tsx/FadeRight.tsx" />}
    />,
    fadeLeft: <CodeBlockTab
        blockId="fade-left"
        preview={demoDatas.fadeLeft}
        jsx={<GetCodeExample filePath="src/components/animations/fade/jsx/FadeLeft.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/fade/tsx/FadeLeft.tsx" />}
    />,
    fadeUpRight: <CodeBlockTab
        blockId="fade-up-right"
        preview={demoDatas.fadeUpRight}
        jsx={<GetCodeExample filePath="src/components/animations/fade/jsx/FadeUpRight.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/fade/tsx/FadeUpRight.tsx" />}
    />,
    fadeUpLeft: <CodeBlockTab
        blockId="fade-up-left"
        preview={demoDatas.fadeUpLeft}
        jsx={<GetCodeExample filePath="src/components/animations/fade/jsx/FadeUpLeft.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/fade/tsx/FadeUpLeft.tsx" />}
    />,
    fadeDownRight: <CodeBlockTab
        blockId="fade-down-right"
        preview={demoDatas.fadeDownRight}
        jsx={<GetCodeExample filePath="src/components/animations/fade/jsx/FadeDownRight.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/fade/tsx/FadeDownRight.tsx" />}
    />,
    fadeDownLeft: <CodeBlockTab
        blockId="fade-down-left"
        preview={demoDatas.fadeDownLeft}
        jsx={<GetCodeExample filePath="src/components/animations/fade/jsx/FadeDownLeft.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/fade/tsx/FadeDownLeft.tsx" />}
    />,
    zoomIn: <CodeBlockTab
        blockId="zoom-in"
        preview={demoDatas.zoomIn}
        jsx={<GetCodeExample filePath="src/components/animations/zoom/jsx/ZoomIn.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/zoom/tsx/ZoomIn.tsx" />}
    />,
    zoomOut: <CodeBlockTab
        blockId="zoom-out"
        preview={demoDatas.zoomOut}
        jsx={<GetCodeExample filePath="src/components/animations/zoom/jsx/ZoomOut.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/zoom/tsx/ZoomOut.tsx" />}
    />,
    zoomInUp: <CodeBlockTab
        blockId="zoom-in-up"
        preview={demoDatas.zoomInUp}
        jsx={<GetCodeExample filePath="src/components/animations/zoom/jsx/ZoomInUp.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/zoom/tsx/ZoomInUp.tsx" />}
    />,
    zoomInDown: <CodeBlockTab
        blockId="zoom-in-down"
        preview={demoDatas.zoomInDown}
        jsx={<GetCodeExample filePath="src/components/animations/zoom/jsx/ZoomInDown.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/zoom/tsx/ZoomInDown.tsx" />}
    />,
    zoomInLeft: <CodeBlockTab
        blockId="zoom-in-left"
        preview={demoDatas.zoomInLeft}
        jsx={<GetCodeExample filePath="src/components/animations/zoom/jsx/ZoomInLeft.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/zoom/tsx/ZoomInLeft.tsx" />}
    />,
    zoomInRight: <CodeBlockTab
        blockId="zoom-in-right"
        preview={demoDatas.zoomInRight}
        jsx={<GetCodeExample filePath="src/components/animations/zoom/jsx/ZoomInRight.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/zoom/tsx/ZoomInRight.tsx" />}
    />,
    zoomOutUp: <CodeBlockTab
        blockId="zoom-out-up"
        preview={demoDatas.zoomOutUp}
        jsx={<GetCodeExample filePath="src/components/animations/zoom/jsx/ZoomOutUp.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/zoom/tsx/ZoomOutUp.tsx" />}
    />,
    zoomOutDown: <CodeBlockTab
        blockId="zoom-out-down"
        preview={demoDatas.zoomOutDown}
        jsx={<GetCodeExample filePath="src/components/animations/zoom/jsx/ZoomOutDown.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/zoom/tsx/ZoomOutDown.tsx" />}
    />,
    zoomOutLeft: <CodeBlockTab
        blockId="zoom-out-left"
        preview={demoDatas.zoomOutLeft}
        jsx={<GetCodeExample filePath="src/components/animations/zoom/jsx/ZoomOutLeft.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/zoom/tsx/ZoomOutLeft.tsx" />}
    />,
    zoomOutRight: <CodeBlockTab
        blockId="zoom-out-right"
        preview={demoDatas.zoomOutRight}
        jsx={<GetCodeExample filePath="src/components/animations/zoom/jsx/ZoomOutRight.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/zoom/tsx/ZoomOutRight.tsx" />}
    />,
    flipUp: <CodeBlockTab
        blockId="flip-up"
        preview={demoDatas.flipUp}
        jsx={<GetCodeExample filePath="src/components/animations/flip/jsx/FlipUp.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/flip/tsx/FlipUp.tsx" />}
    />,
    flipDown: <CodeBlockTab
        blockId="flip-down"
        preview={demoDatas.flipDown}
        jsx={<GetCodeExample filePath="src/components/animations/flip/jsx/FlipDown.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/flip/tsx/FlipDown.tsx" />}
    />,
    flipRight: <CodeBlockTab
        blockId="flip-right"
        preview={demoDatas.flipRight}
        jsx={<GetCodeExample filePath="src/components/animations/flip/jsx/FlipRight.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/flip/tsx/FlipRight.tsx" />}
    />,
    flipLeft: <CodeBlockTab
        blockId="flip-left"
        preview={demoDatas.flipLeft}
        jsx={<GetCodeExample filePath="src/components/animations/flip/jsx/FlipLeft.jsx" />}
        tsx={<GetCodeExample filePath="src/components/animations/flip/tsx/FlipLeft.tsx" />}
    />,
};

export default previewBlocks;
