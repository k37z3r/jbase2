/**
 * @file src/modules/effects/fade.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * Methods for fading elements in and out (fadeIn, fadeOut, fadeToggle).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */

import { jBase } from '../../core';
import { isBrowser } from '../../utils';
import { FadeOptions } from './types';




/**
 * * Fades an element in (Opacity 0 -> 1).
 * @param options
 * * Duration in ms (default: 300) and display type (default: 'block').
 * @returns
 * * The current jBase instance.
 */
export function fadeIn(this: jBase, options: FadeOptions = {}): jBase {
    if (!isBrowser())
        return this;
    const { duration = 300, displayType = 'block' } = options;
    this.forEach(el => {
        if (el instanceof HTMLElement) {
            el.style.opacity = '0';
            el.style.display = displayType;
            el.style.transition = `opacity ${duration}ms ease-in-out`;
            void el.offsetHeight;
            requestAnimationFrame(() => {
                el.style.opacity = '1';
            });
            setTimeout(() => {
                el.style.transition = '';
            }, duration);
        }
    });
    return this;
}

/**
 * * Fades an element out (Opacity 1 -> 0) and sets display: none afterwards.
 * @param options
 * * Duration in ms (default: 300).
 * @returns
 * * The current jBase instance.
 */
export function fadeOut(this: jBase, options: FadeOptions = {}): jBase {
    if (!isBrowser())
        return this;
    const { duration = 300 } = options;
    this.forEach(el => {
        if (el instanceof HTMLElement) {
            el.style.opacity = '1';
            el.style.transition = `opacity ${duration}ms ease-in-out`;
            void el.offsetHeight;
            requestAnimationFrame(() => {
                el.style.opacity = '0';
            });
            setTimeout(() => {
                el.style.display = 'none';
                el.style.transition = '';
            }, duration);
        }
    });
    return this;
}

/**
 * * Toggles between fadeIn and fadeOut based on the current display state.
 * @param options
 * * Animation options.
 * @returns
 * * The current jBase instance.
 */
export function fadeToggle(this: jBase, options: FadeOptions = {}): jBase {
    if (!isBrowser())
        return this;
    this.forEach(el => {
        if (el instanceof HTMLElement) {
            const display = window.getComputedStyle(el).display;
            const wrapper = new (this.constructor as any)(el);
            if (display === 'none') {
                wrapper.fadeIn(options);
            } else {
                wrapper.fadeOut(options);
            }
        }
    });
    return this;
}