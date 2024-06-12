import CodeBlockTab from "@/components/layouts/animationcontent/CodeBlockTab";
import Square from "@/components/layouts/animationcontent/Square";

import FadeUp from "@/components/animations/fade/tsx/FadeUp";
import FadeDown from "@/components/animations/fade/tsx/FadeDown";
import FadeRight from "@/components/animations/fade/tsx/FadeRight";
import FadeLeft from "@/components/animations/fade/tsx/FadeLeft";
import FadeUpRight from "@/components/animations/fade/tsx/FadeUpRight";
import FadeUpLeft from "@/components/animations/fade/tsx/FadeUpLeft";
import FadeDownRight from "@/components/animations/fade/tsx/FadeDownRight";
import FadeDownLeft from "@/components/animations/fade/tsx/FadeDownLeft";

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

const colorGradiant: {
    red: string;
    amber: string;
    orange: string;
    yellow: string;
    lime: string;
    green: string;
    emerald: string;
    teal: string;
    cyan: string;
    sky: string;
    blue: string;
    indigo: string;
    violet: string;
    purple: string;
    fuchsia: string;
    pink: string;
    rose: string;

} = {
    red: "from-red-700 to-red-600",
    amber: "from-amber-600 to-amber-500",
    orange: "from-orange-600 to-orange-600",
    yellow: "from-yellow-600 to-yellow-500",
    lime: "from-lime-600 to-lime-500",
    green: "from-green-600 to-green-500",
    emerald: "from-emerald-600 to-emerald-500",
    teal: "from-teal-600 to-teal-500",
    cyan: "from-cyan-600 to-cyan-500",
    sky: "from-sky-600 to-sky-500",
    blue: "from-blue-600 to-blue-500",
    indigo: "from-indigo-600 to-indigo-500",
    violet: "from-violet-600 to-violet-500",
    purple: "from-purple-600 to-purple-500",
    fuchsia: "from-fuchsia-600 to-fuchsia-500",
    pink: "from-pink-600 to-pink-500",
    rose: "from-rose-600 to-rose-500",
}

interface SubCategory {
    id: string;
    title: string;
    href: string;
    component?: JSX.Element;
}

interface Category {
    id: string;
    category: string;
    href: string;
    subCategories: SubCategory[];
}

const websiteDatas: Category[] = [
    {
        id: "getting-started",
        category: "Getting Started",
        href: "/introduction",
        subCategories: [
            {
                id: "introduction",
                title: "Introduction",
                href: "/introduction",
            },
            {
                id: "installation",
                title: "Installation",
                href: "/installation",
            },
        ]
    },
    {
        id: "fade",
        category: "Fade",
        href: "/fade",
        subCategories: [
            {
                id: "fade-up",
                title: "Fade Up",
                href: "/fade#fade-up",
                component: <CodeBlockTab
                    blockId="fade-up"
                    jsxFilePath="src/components/animations/fade/jsx/FadeUp.jsx"
                    tsxFilePath="src/components/animations/fade/tsx/FadeUp.tsx"
                    className={colorGradiant.red}
                    animationElement={<FadeUp><Square /></FadeUp>}
                />,
            },
            {
                id: "fade-down",
                title: "Fade Down",
                href: "/fade#fade-down",
                component: <CodeBlockTab
                    blockId="fade-down"
                    jsxFilePath="src/components/animations/fade/jsx/FadeDown.jsx"
                    tsxFilePath="src/components/animations/fade/tsx/FadeDown.tsx"
                    className={colorGradiant.amber}
                    animationElement={<FadeDown><Square /></FadeDown>}
                />,
            },
            {
                id: "fade-right",
                title: "Fade Right",
                href: "/fade#fade-right",
                component: <CodeBlockTab
                    blockId="fade-right"
                    jsxFilePath="src/components/animations/fade/jsx/FadeRight.jsx"
                    tsxFilePath="src/components/animations/fade/tsx/FadeRight.tsx"
                    className={colorGradiant.orange}
                    animationElement={<FadeDown><Square /></FadeDown>}
                />,
            },
            {
                id: "fade-left",
                title: "Fade Left",
                href: "/fade#fade-left",
                component: <CodeBlockTab
                    blockId="fade-left"
                    jsxFilePath="src/components/animations/fade/jsx/FadeLeft.jsx"
                    tsxFilePath="src/components/animations/fade/tsx/FadeLeft.tsx"
                    className={colorGradiant.yellow}
                    animationElement={<FadeLeft><Square /></FadeLeft>}
                />,
            },
            {
                id: "fade-up-right",
                title: "Fade Up Right",
                href: "/fade#fade-up-right",
                component: <CodeBlockTab
                    blockId="fade-up-right"
                    jsxFilePath="src/components/animations/fade/jsx/FadeUpRight.jsx"
                    tsxFilePath="src/components/animations/fade/tsx/FadeUpRight.tsx"
                    className={colorGradiant.lime}
                    animationElement={<FadeUpRight><Square /></FadeUpRight>}
                />,
            },
            {
                id: "fade-up-left",
                title: "Fade Up Left",
                href: "/fade#fade-up-left",
                component: <CodeBlockTab
                    blockId="fade-up-left"
                    jsxFilePath="src/components/animations/fade/jsx/FadeUpLeft.jsx"
                    tsxFilePath="src/components/animations/fade/tsx/FadeUpLeft.tsx"
                    className={colorGradiant.green}
                    animationElement={<FadeUpLeft><Square /></FadeUpLeft>}
                />,
            },
            {
                id: "fade-down-right",
                title: "Fade Down Right",
                href: "/fade#fade-down-right",
                component: <CodeBlockTab
                    blockId="fade-down-right"
                    jsxFilePath="src/components/animations/fade/jsx/FadeDownRight.jsx"
                    tsxFilePath="src/components/animations/fade/tsx/FadeDownRight.tsx"
                    className={colorGradiant.emerald}
                    animationElement={<FadeDownRight><Square /></FadeDownRight>}
                />,
            },
            {
                id: "fade-down-left",
                title: "Fade Down Left",
                href: "/fade#fade-down-left",
                component: <CodeBlockTab
                    blockId="fade-down-left"
                    jsxFilePath="src/components/animations/fade/jsx/FadeDownLeft.jsx"
                    tsxFilePath="src/components/animations/fade/tsx/FadeDownLeft.tsx"
                    className={colorGradiant.teal}
                    animationElement={<FadeDownLeft><Square /></FadeDownLeft>}
                />,
            },
        ]
    },
    {
        id: "zoom",
        category: "Zoom",
        href: "/zoom",
        subCategories: [
            {
                id: "zoom-in",
                title: "Zoom In",
                href: "/zoom#zoom-in",
                component: <CodeBlockTab
                    blockId="zoom-in"
                    jsxFilePath="src/components/animations/zoom/jsx/ZoomIn.jsx"
                    tsxFilePath="src/components/animations/zoom/tsx/ZoomIn.tsx"
                    className={colorGradiant.cyan}
                    animationElement={<ZoomIn><Square /></ZoomIn>}
                />,
            },
            {
                id: "zoom-out",
                title: "Zoom Out",
                href: "/zoom#zoom-out",
                component: <CodeBlockTab
                    blockId="zoom-out"
                    jsxFilePath="src/components/animations/zoom/jsx/ZoomOut.jsx"
                    tsxFilePath="src/components/animations/zoom/tsx/ZoomOut.tsx"
                    className={colorGradiant.sky}
                    animationElement={<ZoomOut><Square /></ZoomOut>}
                />,
            },
            {
                id: "zoom-in-up",
                title: "Zoom In Up",
                href: "/zoom#zoom-in-up",
                component: <CodeBlockTab
                    blockId="zoom-in-up"
                    jsxFilePath="src/components/animations/zoom/jsx/ZoomInUp.jsx"
                    tsxFilePath="src/components/animations/zoom/tsx/ZoomInUp.tsx"
                    className={colorGradiant.blue}
                    animationElement={<ZoomInUp><Square /></ZoomInUp>}
                />,
            },
            {
                id: "zoom-in-down",
                title: "Zoom In Down",
                href: "/zoom#zoom-in-down",
                component: <CodeBlockTab
                    blockId="zoom-in-down"
                    jsxFilePath="src/components/animations/zoom/jsx/ZoomInDown.jsx"
                    tsxFilePath="src/components/animations/zoom/tsx/ZoomInDown.tsx"
                    className={colorGradiant.indigo}
                    animationElement={<ZoomInDown><Square /></ZoomInDown>}
                />,
            },
            {
                id: "zoom-in-left",
                title: "Zoom In Left",
                href: "/zoom#zoom-in-left",
                component: <CodeBlockTab
                    blockId="zoom-in-left"
                    jsxFilePath="src/components/animations/zoom/jsx/ZoomInLeft.jsx"
                    tsxFilePath="src/components/animations/zoom/tsx/ZoomInLeft.tsx"
                    className={colorGradiant.violet}
                    animationElement={<ZoomInLeft><Square /></ZoomInLeft>}
                />,
            },
            {
                id: "zoom-in-right",
                title: "Zoom In Right",
                href: "/zoom#zoom-in-right",
                component: <CodeBlockTab
                    blockId="zoom-in-right"
                    jsxFilePath="src/components/animations/zoom/jsx/ZoomInRight.jsx"
                    tsxFilePath="src/components/animations/zoom/tsx/ZoomInRight.tsx"
                    className={colorGradiant.purple}
                    animationElement={<ZoomInRight><Square /></ZoomInRight>}
                />,
            },
            {
                id: "zoom-out-up",
                title: "Zoom Out Up",
                href: "/zoom#zoom-out-up",
                component: <CodeBlockTab
                    blockId="zoom-out-up"
                    jsxFilePath="src/components/animations/zoom/jsx/ZoomOutUp.jsx"
                    tsxFilePath="src/components/animations/zoom/tsx/ZoomOutUp.tsx"
                    className={colorGradiant.fuchsia}
                    animationElement={<ZoomOutUp><Square /></ZoomOutUp>}
                />,
            },
            {
                id: "zoom-out-down",
                title: "Zoom Out Down",
                href: "/zoom#zoom-out-down",
                component: <CodeBlockTab
                    blockId="zoom-out-down"
                    jsxFilePath="src/components/animations/zoom/jsx/ZoomOutDown.jsx"
                    tsxFilePath="src/components/animations/zoom/tsx/ZoomOutDown.tsx"
                    className={colorGradiant.pink}
                    animationElement={<ZoomOutDown><Square /></ZoomOutDown>}
                />,
            },
            {
                id: "zoom-out-left",
                title: "Zoom Out Left",
                href: "/zoom#zoom-out-left",
                component: <CodeBlockTab
                    blockId="zoom-out-left"
                    jsxFilePath="src/components/animations/zoom/jsx/ZoomOutLeft.jsx"
                    tsxFilePath="src/components/animations/zoom/tsx/ZoomOutLeft.tsx"
                    className={colorGradiant.rose}
                    animationElement={<ZoomOutLeft><Square /></ZoomOutLeft>}
                />,
            },
            {
                id: "zoom-out-right",
                title: "Zoom Out Right",
                href: "/zoom#zoom-out-right",
                component: <CodeBlockTab
                    blockId="zoom-out-right"
                    jsxFilePath="src/components/animations/zoom/jsx/ZoomOutRight.jsx"
                    tsxFilePath="src/components/animations/zoom/tsx/ZoomOutRight.tsx"
                    className={colorGradiant.red}
                    animationElement={<ZoomOutRight><Square /></ZoomOutRight>}
                />,
            },
        ]
    },
    {
        id: "flip",
        category: "Flip",
        href: "/flip",
        subCategories: [
            {
                id: "flip-up",
                title: "Flip Up",
                href: "/flip#flip-up",
                component: <CodeBlockTab
                    blockId="flip-up"
                    jsxFilePath="src/components/animations/flip/jsx/FlipUp.jsx"
                    tsxFilePath="src/components/animations/flip/tsx/FlipUp.tsx"
                    className={colorGradiant.amber}
                    animationElement={<FlipUp><Square /></FlipUp>}
                />,
            },
            {
                id: "flip-down",
                title: "Flip Down",
                href: "/flip#flip-down",
                component: <CodeBlockTab
                    blockId="flip-down"
                    jsxFilePath="src/components/animations/flip/jsx/FlipDown.jsx"
                    tsxFilePath="src/components/animations/flip/tsx/FlipDown.tsx"
                    className={colorGradiant.orange}
                    animationElement={<FlipDown><Square /></FlipDown>}
                />,
            },
            {
                id: "flip-right",
                title: "Flip Right",
                href: "/flip#flip-right",
                component: <CodeBlockTab
                    blockId="flip-right"
                    jsxFilePath="src/components/animations/flip/jsx/FlipRight.jsx"
                    tsxFilePath="src/components/animations/flip/tsx/FlipRight.tsx"
                    className={colorGradiant.yellow}
                    animationElement={<FlipRight><Square /></FlipRight>}
                />,
            },
            {
                id: "flip-left",
                title: "Flip Left",
                href: "/flip#flip-left",
                component: <CodeBlockTab
                    blockId="flip-left"
                    jsxFilePath="src/components/animations/flip/jsx/FlipLeft.jsx"
                    tsxFilePath="src/components/animations/flip/tsx/FlipLeft.tsx"
                    className={colorGradiant.lime}
                    animationElement={<FlipLeft><Square /></FlipLeft>}
                />,
            },
        ]
    },
    // Add other categories here
];

export default websiteDatas;
