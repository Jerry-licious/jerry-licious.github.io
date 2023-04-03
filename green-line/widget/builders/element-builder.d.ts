export declare class ElementBuilder {
    tag: string;
    namespace: string;
    styleClasses: string[];
    children: Element[];
    text: string;
    href: string;
    title: string;
    onclick: EventListener;
    attributes: Map<string, string>;
    styleRules: Map<string, string>;
    eventListeners: Map<string, EventListener>;
    constructor({ tag, namespace, styleClasses, children, text, href, title, onclick }: {
        tag: string;
        namespace?: string;
        styleClasses?: string[];
        children?: Element[];
        text?: string;
        href?: string;
        title?: string;
        onclick?: EventListener;
    });
    withStyleClasses(...classes: string[]): ElementBuilder;
    withAttribute(attribute: string, value: string): ElementBuilder;
    withEventListener(event: string, listener: EventListener): ElementBuilder;
    build(): Element;
}
