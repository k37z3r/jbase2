/**
 * @file src/modules/dom/manipulation.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * Methods for inserting, moving, and removing elements (append, prepend, remove).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */

import { jBase } from '../../core';

/**
 * * Internal Helper: Parses a raw HTML string into a DOM element using a temporary container.
 * @param html
 * * The HTML string to parse.
 * @param doc
 * * The document context to use for creation (essential for SSR).
 * @returns
 * * The created HTMLElement.
 */
function parseHTML(html: string, doc: Document): HTMLElement {
    const tmp = doc.createElement('div');
    tmp.innerHTML = html.trim();
    return tmp.firstElementChild as HTMLElement;
}

/**
 * * Internal Helper: Retrieves the correct document context from a jBase collection.
 * * Ensures compatibility with Node.js/JSDOM by preferring the element's ownerDocument over the global document.
 * @param collection
 * * The jBase instance to check.
 * @returns
 * * The found Document object or null (in strict Node environments without global context).
 */
function getDoc(collection: jBase): Document {
    if (collection.length > 0 && collection[0] instanceof Element) {
        return collection[0].ownerDocument;
    }
    return (typeof document !== 'undefined') ? document : (null as any);
}

/**
 * * Internal Helper: Normalizes various content types into a single DocumentFragment.
 * * Handles HTML strings (parsing), DOM Nodes, Arrays, NodeLists, and jBase collections recursively.
 * * Using a Fragment minimizes browser reflows during insertion.
 * @param content
 * * The content to normalize (String, Node, Array, Collection).
 * @param doc
 * * The document context to use for element creation (essential for SSR).
 * @returns
 * * A DocumentFragment containing the processed DOM nodes.
 */
function normalizeToFragment(content: string | Node | jBase | (string | Node)[], doc: Document): DocumentFragment {
    const fragment = doc.createDocumentFragment();

    const add = (item: any) => {
        if (typeof item === 'string') {
            const temp = doc.createElement('div');
            temp.innerHTML = item.trim();
            while (temp.firstChild) {
                fragment.appendChild(temp.firstChild);
            }
        } else if (item instanceof Node) {
            fragment.appendChild(item);
        } else if (item instanceof jBase || Array.isArray(item) || item instanceof NodeList) {
            Array.from(item).forEach(child => add(child));
        }
    };

    add(content);
    return fragment;
}

/**
 * * Removes the selected elements from the DOM.
 * @returns
 * * The current jBase instance.
 */
export function remove(this: jBase): jBase {
    this.forEach(el => {
        if (el instanceof Element) el.remove();
    });
    return this;
}

/**
 * * Removes all child nodes and text content from the selected elements.
 * @returns
 * * The current jBase instance.
 */
export function empty(this: jBase): jBase {
    this.forEach(el => {
        if (el instanceof Element) el.innerHTML = '';
    });
    return this;
}

/**
 * * Replaces each element with a deep clone of itself. Useful for removing all event listeners ("Nuke" strategy).
 * @returns
 * * A new jBase instance containing the cloned elements.
 */
export function replaceWithClone(this: jBase): jBase {
    const newElements: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            const clone = el.cloneNode(true) as Element;
            el.replaceWith(clone);
            newElements.push(clone);
        }
    });

    return new (this.constructor as any)(newElements);
}

/**
 * * Inserts content at the end of each selected element (inside).
 * @param content
 * * HTML string, DOM Node, or jBase collection.
 * @returns
 * * The current jBase instance.
 */
export function append(this: jBase, content: string | Node | jBase): jBase {
    if (typeof content === 'string') {
        this.forEach(el => {
            if (el instanceof Element) {
                el.insertAdjacentHTML('beforeend', content);
            }
        });
        return this;
    }
    const doc = getDoc(this);
    if (!doc)
        return this;
    const fragment = normalizeToFragment(content, doc);
    this.forEach((el, i) => {
        if (el instanceof Element) {
            const contentToInsert = (i < this.length - 1) ? fragment.cloneNode(true) : fragment;
            el.appendChild(contentToInsert);
        }
    });
    return this;
}

/**
 * * Inserts content at the beginning of each selected element (inside).
 * @param content
 * * HTML string, DOM Node, or jBase collection.
 * @returns
 * * The current jBase instance.
 */
export function prepend(this: jBase, content: string | Node | jBase): jBase {
    if (typeof content === 'string') {
        this.forEach(el => {
            if (el instanceof Element) {
                el.insertAdjacentHTML('afterbegin', content);
            }
        });
        return this;
    }
    const doc = getDoc(this);
    if (!doc)
        return this;
    const fragment = normalizeToFragment(content, doc);
    this.forEach((el, i) => {
        if (el instanceof Element) {
            const contentToInsert = (i < this.length - 1) ? fragment.cloneNode(true) : fragment;
            el.prepend(contentToInsert);
        }
    });
    return this;
}

/**
 * * Inserts content before the element (outside).
 * @param content
 * * HTML string, DOM Node, or jBase collection.
 * @returns
 * * The current jBase instance.
 */
export function before(this: jBase, content: string | Node | jBase): jBase {
    if (typeof content === 'string') {
        this.forEach(el => {
            if (el instanceof Element) {
                el.insertAdjacentHTML('beforebegin', content);
            }
        });
        return this;
    }
    const doc = getDoc(this);
    if (!doc)
        return this;
    const fragment = normalizeToFragment(content, doc);
    this.forEach((el, i) => {
        if (el instanceof Element) {
            const contentToInsert = (i < this.length - 1) ? fragment.cloneNode(true) : fragment;
            el.before(contentToInsert);
        }
    });
    return this;
}

/**
 * * Inserts content after the element (outside).
 * @param content
 * * HTML string, DOM Node, or jBase collection.
 * @returns
 * * The current jBase instance.
 */
export function after(this: jBase, content: string | Node | jBase): jBase {
    if (typeof content === 'string') {
        this.forEach(el => {
            if (el instanceof Element) {
                el.insertAdjacentHTML('afterend', content);
            }
        });
        return this;
    }
    const doc = getDoc(this);
    if (!doc)
        return this;
    const fragment = normalizeToFragment(content, doc);
    this.forEach((el, i) => {
        if (el instanceof Element) {
            const contentToInsert = (i < this.length - 1) ? fragment.cloneNode(true) : fragment;
            el.after(contentToInsert);
        }
    });
    return this;
}

/**
 * * Replaces the element with new content.
 * @param content
 * * The new content.
 * @returns
 * * The current jBase instance.
 */
export function replaceWith(this: jBase, content: string | Node | jBase): jBase {
    const doc = getDoc(this);
    if (!doc)
        return this;
    const fragment = normalizeToFragment(content, doc);
    this.forEach((el, i) => {
        if (el instanceof Element) {
            const contentToInsert = (i < this.length - 1) ? fragment.cloneNode(true) : fragment;
            el.replaceWith(contentToInsert);
        }
    });
    return this;
}

/**
 * * Appends the selected elements to the end of a target element.
 * @param target
 * * CSS selector or DOM element.
 * @returns
 * * The current jBase instance.
 */
export function appendTo(this: jBase, target: string | Element): jBase {
    const doc = getDoc(this);
    if (!doc)
        return this;
    const parent = typeof target === 'string' ? doc.querySelector(target) : target;
    if (parent instanceof Element) {
        const fragment = doc.createDocumentFragment();
        this.forEach(el => {
            if (el instanceof Node) fragment.appendChild(el);
        });
        parent.appendChild(fragment);
    }
    return this;
}

/**
 * * Prepends the selected elements to the beginning of a target element.
 * @param target
 * * CSS selector or DOM element.
 * @returns
 * * The current jBase instance.
 */
export function prependTo(this: jBase, target: string | Element): jBase {
    const doc = getDoc(this);
    if (!doc)
        return this;
    const parent = typeof target === 'string' ? doc.querySelector(target) : target;
    if (parent instanceof Element) {
        const fragment = doc.createDocumentFragment();
        this.forEach(el => {
            if (el instanceof Node) fragment.appendChild(el);
        });
        parent.prepend(fragment);
    }
    return this;
}

/**
 * * Inserts the selected elements immediately before the target element.
 * @param target
 * * CSS selector or DOM element.
 * @returns
 * * The current jBase instance.
 */
export function insertBefore(this: jBase, target: string | Element): jBase {
    const doc = getDoc(this);
    if (!doc)
        return this;
    const targetEl = typeof target === 'string' ? doc.querySelector(target) : target;
    if (targetEl instanceof Element) {
        const fragment = doc.createDocumentFragment();
        this.forEach(el => {
            if (el instanceof Node) fragment.appendChild(el);
        });
        targetEl.before(fragment);
    }
    return this;
}

/**
 * * Inserts the selected elements immediately after the target element.
 * @param target
 * * CSS selector or DOM element.
 * @returns
 * * The current jBase instance.
 */
export function insertAfter(this: jBase, target: string | Element): jBase {
    const doc = getDoc(this);
    if (!doc)
        return this;
    const targetEl = typeof target === 'string' ? doc.querySelector(target) : target;
    if (targetEl instanceof Element) {
        const fragment = doc.createDocumentFragment();
        this.forEach(el => {
            if (el instanceof Node) fragment.appendChild(el);
        });
        targetEl.after(fragment);
    }
    return this;
}

/**
 * * Wraps each selected element with the specified HTML structure.
 * @param wrapperHtml
 * * HTML string defining the wrapper (e.g., `<div class="box"></div>`).
 * @returns
 * * The current jBase instance.
 */
export function wrap(this: jBase, wrapperHtml: string): jBase {
    const doc = getDoc(this);
    if (!doc)
        return this;
    this.forEach(el => {
        if (el instanceof Element) {
            const wrapper = parseHTML(wrapperHtml, doc);
            if (el.parentNode) {
                el.parentNode.insertBefore(wrapper, el);
            }
            wrapper.appendChild(el);
        }
    });
    return this;
}

/**
 * * Removes the direct parent of the selected elements from the DOM.
 * @returns
 * * The current jBase instance.
 */
export function unwrap(this: jBase): jBase {
    const doc = getDoc(this);
    if (!doc)
        return this;
    const parents = new Set<Element>();
    this.forEach(el => {
        if (el instanceof Element && el.parentElement) {
            parents.add(el.parentElement);
        }
    });

    parents.forEach(parent => {
        const fragment = doc.createDocumentFragment();
        while (parent.firstChild) {
            fragment.appendChild(parent.firstChild);
        }
        parent.replaceWith(fragment);
    });
    return this;
}