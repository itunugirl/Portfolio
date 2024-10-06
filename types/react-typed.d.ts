declare module 'react-typed' {
    import { Component } from 'react';

    interface TypedProps {
        /** Array of strings to be typed */
        strings: string[];
        /** Speed at which characters are typed (in milliseconds) */
        typeSpeed?: number;
        /** Speed at which characters are erased (in milliseconds) */
        backSpeed?: number;
        /** If true, the typing will loop */
        loop?: boolean;
        /** Function to call when typing is complete */
        onComplete?: () => void;
        /** Character for the cursor */
        cursorChar?: string;
        /** If true, skips to the next string when the last character is erased */
        smartBackspace?: boolean;
        /** Additional props can be added here if necessary */
        // Add any additional props here
    }

    export default class Typed extends Component<TypedProps> {}
}
