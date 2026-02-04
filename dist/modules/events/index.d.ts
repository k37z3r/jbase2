/**
 * @file src/modules/events/index.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * 🇬🇧: Central entry point for event handling. Aggregates binding, mouse, lifecycle, keyboard, form, and touch events.
 * * 🇩🇪: Zentraler Einstiegspunkt für Event-Handling. Aggregiert Binding-, Maus-, Lebenszyklus-, Tastatur-, Formular- und Touch-Events.
 * @requires ./binding
 * * 🇬🇧: General event binding (on, off).
 * * 🇩🇪: Generelle Event-Bindung (on, off).
 * @requires ./mouse
 * * 🇬🇧: Mouse interaction events (click, hover, etc.).
 * * 🇩🇪: Maus-Interaktions-Events (click, hover, etc.).
 * @requires ./lifecycle
 * * 🇬🇧: DOM lifecycle events (ready).
 * * 🇩🇪: DOM-Lebenszyklus-Events (ready).
 * @requires ./keyboard
 * * 🇬🇧: Keyboard interaction events (keydown, keyup).
 * * 🇩🇪: Tastatur-Interaktions-Events (keydown, keyup).
 * @requires ./form
 * * 🇬🇧: Form handling events (submit, change, input).
 * * 🇩🇪: Formular-Verarbeitungs-Events (submit, change, input).
 * @requires ./touch
 * * 🇬🇧: Touch interaction events.
 * * 🇩🇪: Touch-Interaktions-Events.
 */
/**
 * * 🇬🇧: Aggregated object of all event methods. Combines logic from various sub-modules into a single object. Used to extend the `jBase` prototype via `Object.assign`.
 * * 🇩🇪: Aggregiertes Objekt aller Event-Methoden. Vereint die Logik aus verschiedenen Sub-Modulen in einem einzigen Objekt. Wird genutzt, um den Prototypen der `jBase`-Klasse via `Object.assign` zu erweitern.
 */
export declare const eventMethods: {
    touchstart(this: import("../..").JBaseClass, handler: (event: TouchEvent) => void): import("../..").JBaseClass;
    touchend(this: import("../..").JBaseClass, handler: (event: TouchEvent) => void): import("../..").JBaseClass;
    touchmove(this: import("../..").JBaseClass, handler: (event: TouchEvent) => void): import("../..").JBaseClass;
    touchcancel(this: import("../..").JBaseClass, handler: (event: TouchEvent) => void): import("../..").JBaseClass;
    submit(this: import("../..").JBaseClass, handler: (event: SubmitEvent) => void): import("../..").JBaseClass;
    change(this: import("../..").JBaseClass, handler: (event: Event) => void): import("../..").JBaseClass;
    input(this: import("../..").JBaseClass, handler: (event: Event) => void): import("../..").JBaseClass;
    focus(this: import("../..").JBaseClass, handler?: (event: FocusEvent) => void): import("../..").JBaseClass;
    blur(this: import("../..").JBaseClass, handler?: (event: FocusEvent) => void): import("../..").JBaseClass;
    keydown(this: import("../..").JBaseClass, handler: (event: KeyboardEvent) => void): import("../..").JBaseClass;
    keyup(this: import("../..").JBaseClass, handler: (event: KeyboardEvent) => void): import("../..").JBaseClass;
    keypress(this: import("../..").JBaseClass, handler: (event: KeyboardEvent) => void): import("../..").JBaseClass;
    pressedKey(this: import("../..").JBaseClass, targetKey: string, handler: (event: KeyboardEvent) => void): import("../..").JBaseClass;
    ready(this: import("../..").JBaseClass, handler: () => void): import("../..").JBaseClass;
    click(this: import("../..").JBaseClass, handler?: (event: Event) => void): import("../..").JBaseClass;
    mousemove(this: import("../..").JBaseClass, handler: (event: MouseEvent) => void): import("../..").JBaseClass;
    mouseleave(this: import("../..").JBaseClass, handler: (event: MouseEvent) => void): import("../..").JBaseClass;
    mouseenter(this: import("../..").JBaseClass, handler: (event: MouseEvent) => void): import("../..").JBaseClass;
    mousedown(this: import("../..").JBaseClass, handler: (event: MouseEvent) => void): import("../..").JBaseClass;
    mouseup(this: import("../..").JBaseClass, handler: (event: MouseEvent) => void): import("../..").JBaseClass;
    dblclick(this: import("../..").JBaseClass, handler?: (event: MouseEvent) => void): import("../..").JBaseClass;
    mouseout(this: import("../..").JBaseClass, handler: (event: MouseEvent) => void): import("../..").JBaseClass;
    mouseover(this: import("../..").JBaseClass, handler: (event: MouseEvent) => void): import("../..").JBaseClass;
    on(this: import("../..").JBaseClass, event: string, handler: EventListenerOrEventListenerObject): import("../..").JBaseClass;
    off(this: import("../..").JBaseClass, event: string, handler: EventListenerOrEventListenerObject): import("../..").JBaseClass;
};
//# sourceMappingURL=index.d.ts.map