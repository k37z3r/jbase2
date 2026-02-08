/**
 * @file src/modules/events/index.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * Central entry point for event handling. Aggregates binding, mouse, lifecycle, keyboard, form, and touch events.
 * @requires ./binding
 * * General event binding (on, off).
 * @requires ./mouse
 * * Mouse interaction events (click, hover, etc.).
 * @requires ./lifecycle
 * * DOM lifecycle events (ready).
 * @requires ./keyboard
 * * Keyboard interaction events (keydown, keyup).
 * @requires ./form
 * * Form handling events (submit, change, input).
 * @requires ./touch
 * * Touch interaction events.
 */

import * as bindingMethods from './binding';
import * as mouseMethods from './mouse';
import * as lifecycleMethods from './lifecycle';
import * as keyboardMethods from './keyboard';
import * as formMethods from './form';
import * as touchMethods from './touch';

/**
 * * Aggregated object of all event methods. Combines logic from various sub-modules into a single object. Used to extend the `jBase` prototype via `Object.assign`.
 */
export const eventMethods = {
    ...bindingMethods,
    ...mouseMethods,
    ...lifecycleMethods,
    ...keyboardMethods,
    ...formMethods,
    ...touchMethods
};