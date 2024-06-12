import websiteDatas from "@/lib/consts/WebsiteDatas";

export default function GeneratePageAnimations({ animationCategory }: {
    animationCategory: string;
}) {
    const animations = websiteDatas.filter(item => item.category.toLowerCase() === animationCategory.toLowerCase())[0];
    console.log("Animations~ ", animations)
    return animations.subCategories.map(animation => (
        <>
            <h2>{animation.title}</h2>
            {animation.component}
        </>
    ));
}
