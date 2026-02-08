/**
 * @file src/modules/events/form.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * Methods for handling form events (submit, change, focus, blur, input).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */

import { jBase } from '../../core';

/**
 * * Registers an event handler for the 'submit' event. Triggered when a form is submitted.
 * @param handler
 * * The function to execute when the event occurs.
 * @returns
 * * The current jBase instance for chaining.
 */
export function submit(this: jBase, handler: (event: SubmitEvent) => void): jBase {
    return this.on('submit', handler as EventListener);
}

/**
 * * Registers an event handler for the 'change' event. Triggered when the value of an element (<input>, <select>, <textarea>) is changed by the user and committed (e.g., on blur).
 * @param handler
 * * The function to execute when the event occurs.
 * @returns
 * * The current jBase instance for chaining.
 */
export function change(this: jBase, handler: (event: Event) => void): jBase {
    return this.on('change', handler as EventListener);
}

/**
 * * Registers an event handler for the 'input' event. Triggered immediately when the value changes (real-time, e.g., every keystroke).
 * @param handler
 * * The function to execute when the event occurs.
 * @returns
 * * The current jBase instance for chaining.
 */
export function input(this: jBase, handler: (event: Event) => void): jBase {
    return this.on('input', handler as EventListener);
}

/**
 * * Handles the 'focus' event. If a handler is provided, it binds the listener. If no handler is provided, it programmatically sets focus on the element(s).
 * @param handler
 * * (Optional) The function to execute when the event occurs.
 * @returns
 * * The current jBase instance for chaining.
 */
export function focus(this: jBase, handler?: (event: FocusEvent) => void): jBase {
    if (handler) {
        return this.on('focus', handler as EventListener);
    } else {
        this.forEach(el => {
            if (el instanceof HTMLElement) el.focus();
        });
        return this;
    }
}

/**
 * * Handles the 'blur' event (element loses focus). If a handler is provided, it binds the listener. If no handler is provided, it programmatically removes focus.
 * @param handler
 * * (Optional) The function to execute when the event occurs.
 * @returns
 * * The current jBase instance for chaining.
 */
export function blur(this: jBase, handler?: (event: FocusEvent) => void): jBase {
    if (handler) {
        return this.on('blur', handler as EventListener);
    } else {
        this.forEach(el => {
            if (el instanceof HTMLElement) el.blur();
        });
        return this;
    }
}