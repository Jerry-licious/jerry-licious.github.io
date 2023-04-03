import { ElementBuilder } from './element-builder';
export declare class Div extends ElementBuilder {
    static simple(text: string, styleClasses: string[]): Div;
    constructor({ styleClasses, children, text, href, title, onclick }: {
        styleClasses?: string[];
        children?: Element[];
        text?: string;
        href?: string;
        title?: string;
        onclick?: EventListener;
    });
}
export declare class Span extends ElementBuilder {
    static simple(text: string, styleClasses: string[]): Span;
    constructor({ styleClasses, children, text, href, title, onclick }: {
        styleClasses?: string[];
        children?: Element[];
        text?: string;
        href?: string;
        title?: string;
        onclick?: EventListener;
    });
}
export declare class GameIcon extends ElementBuilder {
    constructor(icon: string, { styleClasses, children, href, title, onclick }?: {
        styleClasses?: string[];
        children?: Element[];
        href?: string;
        title?: string;
        onclick?: EventListener;
    });
}
export declare class GameIconButton extends ElementBuilder {
    constructor(icon: string, { styleClasses, children, href, title, onclick }?: {
        styleClasses?: string[];
        children?: Element[];
        href?: string;
        title?: string;
        onclick?: EventListener;
    });
}
export declare class MaterialIcon extends ElementBuilder {
    constructor(icon: string, { styleClasses, children, href, title, onclick }?: {
        styleClasses?: string[];
        children?: Element[];
        href?: string;
        title?: string;
        onclick?: EventListener;
    });
}
