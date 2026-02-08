/**
 * @file src/modules/events/mouse.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * Methods for handling mouse events (click, dblclick, hover, mouseenter, mouseleave).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */

import { jBase } from '../../core';

/**
 * * Binds an event handler to the 'click' event or triggers the event manually.
 * - With handler: Registers the function.
 * - Without handler: Simulates a click on all selected elements.
 * - Mit Handler: Registriert die Funktion.
 * - Ohne Handler: Simuliert einen Klick auf alle selektierten Elemente.
 * @param handler
 * * (Optional) The callback function executed on click.
 * @returns
 * * The current jBase instance.
 */
export function click(this: jBase, handler?: (event: Event) => void): jBase {
    if (handler) {
        return this.on('click', handler);
    } else {
        this.forEach(el => {
            if (el instanceof HTMLElement) el.click();
        });
        return this;
    }
}

/**
 * * Binds an event handler to the 'mousemove' event. Fires continuously while the pointer moves inside the element.
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export function mousemove(this: jBase, handler: (event: MouseEvent) => void): jBase {
    return this.on('mousemove', handler as EventListener);
}

/**
 * * Binds an event handler to the 'mouseleave' event. Fires when the pointer leaves the element (does not bubble).
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export function mouseleave(this: jBase, handler: (event: MouseEvent) => void): jBase {
    return this.on('mouseleave', handler as EventListener);
}

/**
 * * Binds an event handler to the 'mouseenter' event. Fires when the pointer enters the element (does not bubble).
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export function mouseenter(this: jBase, handler: (event: MouseEvent) => void): jBase {
    return this.on('mouseenter', handler as EventListener);
}

/**
 * * Binds an event handler to the 'mousedown' event. Fires as soon as a mouse button is pressed over the element.
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export function mousedown(this: jBase, handler: (event: MouseEvent) => void): jBase {
    return this.on('mousedown', handler as EventListener);
}

/**
 * * Binds an event handler to the 'mouseup' event. Fires when a mouse button is released over the element.
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export function mouseup(this: jBase, handler: (event: MouseEvent) => void): jBase {
    return this.on('mouseup', handler as EventListener);
}

/**
 * * Binds an event handler to the 'dblclick' event or triggers it manually.
 * @param handler
 * * (Optional) The callback function.
 * @returns
 * * The current jBase instance.
 */
export function dblclick(this: jBase, handler?: (event: MouseEvent) => void): jBase {
    if (handler) {
        return this.on('dblclick', handler as EventListener);
    } else {
        this.forEach(el => {
            if (el instanceof HTMLElement) {
                el.dispatchEvent(new MouseEvent('dblclick', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                }));
            }
        });
        return this;
    }
}

/**
 * * Binds an event handler to the 'mouseout' event. Fires when the pointer leaves the element OR one of its children (bubbles).
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export function mouseout(this: jBase, handler: (event: MouseEvent) => void): jBase {
    return this.on('mouseout', handler as EventListener);
}

/**
 * * Binds an event handler to the 'mouseover' event. Fires when the pointer enters the element OR one of its children (bubbles).
 * @param handler
 * * The callback function.
 * @returns
 * * The current jBase instance.
 */
export function mouseover(this: jBase, handler: (event: MouseEvent) => void): jBase {
    return this.on('mouseover', handler as EventListener);
}