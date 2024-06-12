# Contributing to FMAOS

Thank you for your interest in contributing to FMAOS! We welcome contributions from the community and are excited to collaborate with you. Before you start, please take a moment to read the following guidelines.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure that you adhere to these standards in all your interactions.

## How Can I Contribute?

### Reporting Bugs

If you encounter any bugs or issues, please report them by opening a [GitHub Issue](https://github.com/webdevsalmann/fmaos/issues). When reporting a bug, please include:

- A clear and descriptive title.
- A detailed description of the problem.
- Steps to reproduce the issue.
- Any relevant screenshots or code snippets.

### Suggesting Enhancements

We welcome suggestions for new features and enhancements. To suggest an enhancement, please open a [GitHub Issue](https://github.com/webdevsalmann/fmaos/issues) and include:

- A clear and descriptive title.
- A detailed description of the enhancement.
- Any relevant examples or mockups.

### Submitting Pull Requests

If you want to contribute code to FMAOS, please follow these steps:

1. **Fork the Repository**: Fork the FMAOS repository to your GitHub account.
2. **Create a Branch**: Create a new branch for your feature or bugfix (`git checkout -b feature/your-feature` or `git checkout -b bugfix/your-bugfix`).
3. **Make Changes**: Make your changes in the new branch.
4. **Commit Changes**: Commit your changes with a clear and descriptive commit message (`git commit -m "Add feature/fix bug"`)
5. **Push to Branch**: Push your changes to your forked repository (`git push origin feature/your-feature` or `git push origin bugfix/your-bugfix`).
6. **Create Pull Request**: Open a pull request against the `main` branch of the original repository.

### Adding New Animation

If you want to add a new animation to FMAOS, follow these detailed steps:

#### 1. Create a New Folder (if necessary)

- If you want to add an animation to an existing animation category, skip this step.
- To add a new category of animation, navigate to the `@/components/animations` directory in the repository.
- Create a new folder for your animation. Name the folder descriptively based on the animation.
- Inside this new folder, create subfolders named `jsx` and `tsx`.

#### 2. Add Animation Files

- Inside your selected animation category folder, add your animation files. These files should be named in capitalized camel case and saved in the appropriate subfolders (`.tsx` format in the `tsx` folder and `.jsx` format in the `jsx` folder).
- For example, if you're adding an example animation, create a file named `Example.tsx` inside the `tsx` folder and `Example.jsx` inside the `jsx` folder.

#### 3. Define the Animation
- In your new `.tsx` or `.jsx` file, define your animation using Framer Motion.
- Example for `Example.tsx`:
  ```tsx
    "use client";
    import { motion, MotionProps } from 'framer-motion';
    import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';

    interface ExampleProps extends MotionProps {
        children: React.ReactNode;
    }

    const variants = (initialOffset: number) => ({
        hidden: { opacity: 0, y: initialOffset },
        visible: { opacity: 1, y: 0 }
    });

    export default function Example({ children, ...props }: ExampleProps) {
        const { fmaosConfig } = useFmaosConfig();
        return (
            <motion.div
                variants={variants(fmaosConfig.initialOffset)}
                initial={props.initial ?? "hidden"}
                whileInView={props.whileInView ?? "visible"}
                transition={props.transition ?? fmaosConfig.transition}
                viewport={props.viewport ?? fmaosConfig.viewport}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
  ```

#### 4. Update the Animation Data

- Navigate to the `@/lib/consts/WebsiteDatas.tsx` file.
- Import your new animation component and add it to the `websiteDatas` array accordingly.
- Example:
  ```WebsiteDatas.tsx
    import Example from "@/components/animations/example/tsx/Example";

    const websiteDatas: Category[] = [
        // Previous Datas
        {
            id: "example",
            category: "Example",
            href: "/example",
            subCategories: [
                {
                    id: "example",
                    title: "example",
                    href: "/example#example",
                    component: <CodeBlockTab
                        blockId="example"
                        jsxFilePath="src/components/animations/example/jsx/example.jsx"
                        tsxFilePath="src/components/animations/example/tsx/example.tsx"
                        className={colorGradiant.amber}
                        animationElement={<Example><Square /></Example>}
                    />,
                },
            ]
        }
    ];
  ```

#### 5. Add new page (if necessary)

- If you are adding an animation to an existing category, you don't need to add a new page.
If you are creating a new category of animation, create a new folder inside `@/src/app/(client)/(animations)` with an appropriate name matching the newly added category name in websiteDatas.
Then, add a new `page.mdx` file (refer to `@/src/app/(client)/(animations)/fade/page.mdx` for an example).
  
#### 6. Test Your Animation

- Test your animation in browser.
- Ensure that it works as expected and make any necessary adjustments.

#### 7. Commit and Push

- Commit your changes with a clear message (`git commit -m "Add Example animation"`) and push them to your branch (`git push origin feature/your-feature`).

#### 8. Create a Pull Request

- Open a pull request against the main branch of the original repository.
- Provide a clear description of the animation you added and any relevant details.

### Code Style and Guidelines

- Follow the existing code style and conventions.
- Write clear, concise, and descriptive commit messages.
- Ensure that your code passes all tests and linting checks.

### Reviewing and Merging Pull Requests

- All pull requests will be reviewed by the project me.
- Pull requests must pass all tests and checks before they can be merged.
- Please be patient and responsive to feedback during the review process.

## Thank You!

Thank you for contributing to FMAOS! Your support and involvement are greatly appreciated. If you have any questions or need assistance, feel free to reach out to the project me.