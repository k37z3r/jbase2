/**
 * @file src/modules/dom/traversal.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * Methods for navigating the DOM tree (find, parent, children, siblings).
 * @requires ../../core
 * * Depends on the core jBase class for type definitions.
 */

import { jBase } from '../../core';



/**
 * * Traverses the parents (heading toward the document root) of each element and finds the first element that matches the specified selector.
 * @param selector
 * * A string containing a selector expression.
 * @returns
 * * A new jBase instance containing the matched elements.
 */
export function closest(this: jBase, selector: string): jBase {
    const found: Element[] = [];

    this.forEach(el => {
        if (el instanceof Element) {
            const match = el.closest(selector);
            if (match) {
                found.push(match);
            }
        }
    });

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * Gets the direct parent of each element in the current set. Deduplicates results.
 * @returns
 * * A new jBase instance containing the parent elements.
 */
export function parent(this: jBase): jBase {
    const parents: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element && el.parentElement) {
            parents.push(el.parentElement);
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(parents)]);
}

/**
 * * Gets the direct children of each element in the set, optionally filtered by a selector.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance containing the children.
 */
export function children(this: jBase, selector?: string): jBase {
    let allChildren: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            const kids = Array.from(el.children);
            allChildren = allChildren.concat(kids);
        }
    });

    if (selector) {
        allChildren = allChildren.filter(child => child.matches(selector));
    }

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction(allChildren);
}

/**
 * * Finds descendants (deep) that match the selector using `querySelectorAll`.
 * @param selector
 * * The CSS selector to search for.
 * @returns
 * * A new jBase instance with the found elements.
 */
export function findAll(this: jBase, selector: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element || el instanceof Document) {
            const matches = el.querySelectorAll(selector);
            matches.forEach(m => found.push(m));
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * Recursively gets ALL descendants (not just direct children).
 * @returns
 * * A new jBase instance with all descendants.
 */
export function descendants(this: jBase): jBase {
    return this.findAll('*');
}

/**
 * * Gets all ancestors (parents, grandparents...) up to the root. Optionally filtered.
 * @param selector
 * * (Optional) Filter selector for ancestors.
 * @returns
 * * A new jBase instance with the ancestors.
 */
export function parents(this: jBase, selector?: string): jBase {
    const ancestors: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.parentElement;
            while (curr) {
                if (!selector || curr.matches(selector)) {
                    ancestors.push(curr);
                }
                curr = curr.parentElement;
            }
        }
    });

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(ancestors)]);
}

/**
 * * Gets all ancestors UP TO (but not including) an element matching the selector.
 * @param selector
 * * The selector where traversal stops.
 * @param filter
 * * (Optional) Filter for the collected elements.
 * @returns
 * * A new jBase instance.
 */
export function parentsUntil(this: jBase, selector: string, filter?: string): jBase {
    const ancestors: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.parentElement;
            while (curr && !curr.matches(selector)) {
                if (!filter || curr.matches(filter)) {
                    ancestors.push(curr);
                }
                curr = curr.parentElement;
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(ancestors)]);
}

/**
 * * Recursively finds descendants but stops traversing a branch if `untilSelector` is met. Useful for finding nested elements without going too deep (e.g., nested forms).
 * @param untilSelector
 * * The selector that stops recursion in a branch.
 * @param filter
 * * (Optional) Selector to filter collected elements.
 * @returns
 * * A new jBase instance.
 */
export function descendantsUntil(this: jBase, untilSelector: string, filter?: string): jBase {
    const found: Element[] = [];

    const traverse = (parent: Element) => {
        const kids = parent.children;
        for (let i = 0; i < kids.length; i++) {
            const child = kids[i];
            if (child.matches(untilSelector)) {
                continue;
            }
            if (!filter || child.matches(filter)) {
                found.push(child);
            }
            traverse(child);
        }
    };
    this.forEach(el => {
        if (el instanceof Element) traverse(el);
    });

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * Gets the immediately following sibling.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance.
 */
export function next(this: jBase, selector?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element && el.nextElementSibling) {
            const nextEl = el.nextElementSibling;
            if (!selector || nextEl.matches(selector)) {
                found.push(nextEl);
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * Gets the immediately preceding sibling.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance.
 */
export function prev(this: jBase, selector?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element && el.previousElementSibling) {
            const prevEl = el.previousElementSibling;
            if (!selector || prevEl.matches(selector)) {
                found.push(prevEl);
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * Alias for `next()`.
 */
export function nextSibling(this: jBase, selector?: string): jBase {
    return this.next(selector);
}

/**
 * * Alias for `prev()`.
 */
export function prevSibling(this: jBase, selector?: string): jBase {
    return this.prev(selector);
}

/**
 * * Alias for `next()`.
 */
export function sibling(this: jBase, selector?: string): jBase {
    return this.next(selector);
}

/**
 * * Gets ALL following siblings.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance.
 */
export function nextAll(this: jBase, selector?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.nextElementSibling;
            while (curr) {
                if (!selector || curr.matches(selector)) {
                    found.push(curr);
                }
                curr = curr.nextElementSibling;
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * Gets ALL preceding siblings.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance.
 */
export function prevAll(this: jBase, selector?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.previousElementSibling;
            while (curr) {
                if (!selector || curr.matches(selector)) {
                    found.push(curr);
                }
                curr = curr.previousElementSibling;
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * Gets ALL siblings (previous and next), excluding itself.
 * @param selector
 * * (Optional) Filter selector.
 * @returns
 * * A new jBase instance.
 */
export function siblings(this: jBase, selector?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element && el.parentElement) {
            const children = Array.from(el.parentElement.children);
            children.forEach(child => {
                if (child !== el) {
                    if (!selector || child.matches(selector)) {
                        found.push(child);
                    }
                }
            });
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * Gets all following siblings UNTIL a selector is met (exclusive).
 * @param untilSelector
 * * The selector that stops the search.
 * @param filter
 * * (Optional) Filter for the found elements.
 * @returns
 * * A new jBase instance.
 */
export function nextUntil(this: jBase, untilSelector: string, filter?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.nextElementSibling;
            while (curr && !curr.matches(untilSelector)) {
                if (!filter || curr.matches(filter)) {
                    found.push(curr);
                }
                curr = curr.nextElementSibling;
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * Gets all preceding siblings UNTIL a selector is met (exclusive).
 * @param untilSelector
 * * The selector that stops the search.
 * @param filter
 * * (Optional) Filter for the found elements.
 * @returns
 * * A new jBase instance.
 */
export function prevUntil(this: jBase, untilSelector: string, filter?: string): jBase {
    const found: Element[] = [];
    this.forEach(el => {
        if (el instanceof Element) {
            let curr = el.previousElementSibling;
            while (curr && !curr.matches(untilSelector)) {
                if (!filter || curr.matches(filter)) {
                    found.push(curr);
                }
                curr = curr.previousElementSibling;
            }
        }
    });
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction([...new Set(found)]);
}

/**
 * * Reduces the set to the element at the specified index. Supports negative indices.
 * @param index
 * * The position (0-based). Negative values count from the end.
 * @returns
 * * A new jBase instance containing the single element (or empty).
 */
export function eq(this: jBase, index: number): jBase {
    const len = this.length;
    const idx = index < 0 ? len + index : index;
    const el = this[idx];
    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction(el ? [el] : []);
}

/**
 * * Reduces the set to the first element.
 */
export function first(this: jBase): jBase {
    return this.eq(0);
}

/**
 * * Reduces the set to the last element.
 */
export function last(this: jBase): jBase {
    return this.eq(-1);
}

/**
 * * Filters elements based on a selector or a function.
 * @param selectorOrFn
 * * CSS selector string or filter function.
 * @returns
 * * A new jBase instance with filtered elements.
 */
export function filterBy(this: jBase, selectorOrFn: string | ((index: number, element: Element) => boolean)): jBase {
    const found: Element[] = [];

    this.forEach((el, index) => {
        if (el instanceof Element) {
            if (typeof selectorOrFn === 'string') {
                if (el.matches(selectorOrFn)) {
                    found.push(el);
                }
            } else if (typeof selectorOrFn === 'function') {
                if (selectorOrFn.call(el, index, el)) {
                    found.push(el);
                }
            }
        }
    });

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction(found);
}

/**
 * * Removes elements from the set that match the selector or function (Inverse of filterBy).
 * @param selectorOrFn
 * * CSS selector string or filter function.
 * @returns
 * * A new jBase instance with remaining elements.
 */
export function not(this: jBase, selectorOrFn: string | ((index: number, element: Element) => boolean)): jBase {
    const found: Element[] = [];

    this.forEach((el, index) => {
        if (el instanceof Element) {
            if (typeof selectorOrFn === 'string') {
                if (!el.matches(selectorOrFn)) {
                    found.push(el);
                }
            } else if (typeof selectorOrFn === 'function') {
                if (!selectorOrFn.call(el, index, el)) {
                    found.push(el);
                }
            }
        }
    });

    const Construction = this.constructor as new (args: any) => jBase;
    return new Construction(found);
}