/**
 * @file src/core.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Core
 * @description
 * * The main jBase class. Handles the selection engine, initialization, and plugin architecture.
 */

import { JBaseElement, JBaseInput } from './types';

/**
 * * The core class of the framework, inheriting from the native Array class. Acts as a wrapper around DOM elements and enables chainable methods (Fluent Interface).
 */
export class jBase extends Array<JBaseElement> {
    public selectorSource: string = '';
    public doc: Document;
    /**
     * * Initializes a new jBase instance. Analyzes the provided selector and populates the internal array with found or created DOM elements.
     * @param selector
     * * The input selector (CSS selector, HTML string, DOM element, or collection).
     */
    constructor(selector?: JBaseInput, context?: Document | Window) {
        super();

        if (context instanceof Document) {
            this.doc = context;
        } else if (context && (context as Window).document) {
            this.doc = (context as Window).document;
        } else {
            this.doc = (typeof document !== 'undefined') ? document : (null as any);
        }
        if (typeof document === 'undefined') {
            return;
        }
        this.selectorSource = typeof selector === 'string' ? selector : '<DOM Object/Array>';
        
        if (!selector)
            return;

        if (selector instanceof HTMLElement || selector === document || selector === window || selector instanceof Element) {
            this.push(selector);
        }
        else if (typeof selector === 'string') {
            const trimmed = selector.trim();
            if (trimmed.startsWith('<') && trimmed.endsWith('>')) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = trimmed;
                this.push(...Array.from(tempDiv.children));
            }
            else if (trimmed.startsWith('#') && !trimmed.includes(' ') && !trimmed.includes('.')) {
                const el = document.getElementById(trimmed.slice(1));
                if (el)
                    this.push(el);
            }
            else if (trimmed.startsWith('.') && !trimmed.includes(' ') && !/[:\[#]/.test(trimmed)) {
                const els = document.getElementsByClassName(trimmed.slice(1));
                for (let i = 0; i < els.length; i++) {
                    this.push(els[i] as HTMLElement);
                }
            }
            else if (/^[a-zA-Z0-9]+$/.test(trimmed)) {
                const els = document.getElementsByTagName(trimmed);
                for (let i = 0; i < els.length; i++) {
                    this.push(els[i] as HTMLElement);
                }
            }
            else {
                try {
                    this.push(...Array.from(document.querySelectorAll(selector)));
                } catch (e) {
                    console.warn(`jBase: Invalid selector "${selector}"`, e);
                }
            }
        }
        else if (selector instanceof NodeList || Array.isArray(selector)) {
            this.push(...Array.from(selector as ArrayLike<JBaseElement>));
        }
    }

    /**
     * * Custom serializer for JSON.stringify. Prevents circular references and huge outputs by returning a simplified preview.
     * @returns
     * * A simplified object representation for debugging.
     */
    toJSON() {
        return {
            meta: 'jBase Wrapper',
            query: this.selectorSource,
            count: this.length,
            preview: this.slice(0, 10).map(el => {
                if (el instanceof Element)
                    return el.tagName.toLowerCase();
                return typeof el;
            })
        };
    }
}