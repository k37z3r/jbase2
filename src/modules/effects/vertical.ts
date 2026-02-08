/**
 * @file src/modules/effects/vertical.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * Methods for vertical sliding effects (slideDown, slideUp, slideToggle).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */

import { isBrowser } from '../../utils';
import { jBase } from '../../core';
import { SlideVerticalOptions } from './types';

/**
 * * Slides an element down (animates height from 0 to auto). Sets `display` property and animates height.
 * @param options
 * * Animation duration and display type.
 * @returns
 * * The current jBase instance.
 */
export function slideDown(this: jBase, options: SlideVerticalOptions = {}): jBase {
    if (!isBrowser())
        return this;
    const { duration = 300, displayType = 'block' } = options;

    this.forEach(el => {
        if (el instanceof HTMLElement) {
            if (window.getComputedStyle(el).display !== 'none')
                return;

            el.style.display = displayType;
            const height = el.scrollHeight;

            el.style.height = '0px';
            el.style.overflow = 'hidden'; 
            el.style.transition = `height ${duration}ms ease-in-out`;

            void el.offsetHeight;

            el.style.height = `${height}px`;

            setTimeout(() => {
                el.style.height = 'auto';
                el.style.overflow = 'visible';
                el.style.transition = '';
            }, duration);
        }
    });
    return this;
}

/**
 * * Slides an element up (animates height to 0). Sets `display: none` after animation.
 * @param options
 * * Animation duration.
 * @returns
 * * The current jBase instance.
 */
export function slideUp(this: jBase, options: SlideVerticalOptions = {}): jBase {
    if (!isBrowser())
        return this;
    const { duration = 300 } = options;

    this.forEach(el => {
        if (el instanceof HTMLElement) {
            el.style.height = `${el.scrollHeight}px`;
            el.style.overflow = 'hidden';
            el.style.transition = `height ${duration}ms ease-in-out`;

            void el.offsetHeight;

            el.style.height = '0px';

            setTimeout(() => {
                el.style.display = 'none';
                el.style.height = '';
                el.style.overflow = '';
                el.style.transition = '';
            }, duration);
        }
    });
    return this;
}

/**
 * * Toggles between slideDown and slideUp based on the display state.
 * @param options
 * * Animation duration.
 * @returns
 * * The current jBase instance.
 */
export function slideToggleBox(this: jBase, options: SlideVerticalOptions = {}): jBase {
    if (!isBrowser())
        return this;
    this.forEach(el => {
        if (el instanceof HTMLElement) {
            const display = window.getComputedStyle(el).display;
            const wrapper = new (this.constructor as any)(el);

            if (display === 'none') {
                wrapper.slideDown(options);
            } else {
                wrapper.slideUp(options);
            }
        }
    });
    return this;
}