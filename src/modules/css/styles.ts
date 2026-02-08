/**
 * @file src/modules/css/styles.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category CSS
 * @description
 * * Methods for getting and setting inline CSS styles.
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */

import { jBase } from '../../core';

/**
 * * Sets or gets the value of a style property for the selected elements.
 * @param property
 * * The CSS property name (camelCase).
 * @param value
 * * (Optional) The value to set. If undefined, the method acts as a getter.
 * @returns
 * * The computed style value (string) if acting as a getter, or the current jBase instance if setting.
 */
export function css(this: jBase, property: string, value?: string | number): string | jBase {
    if (value === undefined) {
        const el = this[0];
        if (el instanceof HTMLElement || el instanceof SVGElement) {
            const doc = el.ownerDocument;
            const win = doc ? doc.defaultView : null;
            if (win) {
                return win.getComputedStyle(el)[property as any];
            } else {
                return el.style[property as any] || '';
            }
        }
        return '';
    }
    this.forEach(el => {
        if (el instanceof HTMLElement || el instanceof SVGElement) {
            (el.style as any)[property] = value;
        }
    });
    return this;
}