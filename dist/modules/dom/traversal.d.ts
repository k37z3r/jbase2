/**
 * @file src/modules/dom/traversal.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * 🇬🇧: Methods for navigating the DOM tree (find, parent, children, siblings).
 * * 🇩🇪: Methoden zur Navigation im DOM-Baum (find, parent, children, siblings).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
import { jBase } from '../../core';
/**
 * * 🇬🇧: Traverses the parents (heading toward the document root) of each element and finds the first element that matches the specified selector.
 * * 🇩🇪: Durchläuft die Elternelemente (in Richtung Document Root) jedes Elements und findet das erste Element, das dem angegebenen Selektor entspricht.
 * @param selector
 * * 🇬🇧: A string containing a selector expression.
 * * 🇩🇪: Ein String, der einen Selektor-Ausdruck enthält.
 * @returns
 * * 🇬🇧: A new jBase instance containing the matched elements.
 * * 🇩🇪: Eine neue jBase-Instanz mit den gefundenen Elementen.
 */
export declare function closest(this: jBase, selector: string): jBase;
/**
 * * 🇬🇧: Gets the direct parent of each element in the current set. Deduplicates results.
 * * 🇩🇪: Gibt das direkte Elternelement jedes Elements in der aktuellen Auswahl zurück. Entfernt Duplikate.
 * @returns
 * * 🇬🇧: A new jBase instance containing the parent elements.
 * * 🇩🇪: Eine neue jBase-Instanz mit den Elternelementen.
 */
export declare function parent(this: jBase): jBase;
/**
 * * 🇬🇧: Gets the direct children of each element in the set, optionally filtered by a selector.
 * * 🇩🇪: Gibt die direkten Kinder jedes Elements zurück, optional gefiltert durch einen Selektor.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance containing the children.
 * * 🇩🇪: Eine neue jBase-Instanz mit den Kindern.
 */
export declare function children(this: jBase, selector?: string): jBase;
/**
 * * 🇬🇧: Finds descendants (deep) that match the selector using `querySelectorAll`.
 * * 🇩🇪: Findet Nachfahren (tief), die dem Selektor entsprechen. Nutzt `querySelectorAll`.
 * @param selector
 * * 🇬🇧: The CSS selector to search for.
 * * 🇩🇪: Der CSS-Selektor für die Suche.
 * @returns
 * * 🇬🇧: A new jBase instance with the found elements.
 * * 🇩🇪: Eine neue jBase-Instanz mit den gefundenen Elementen.
 */
export declare function findAll(this: jBase, selector: string): jBase;
/**
 * * 🇬🇧: Recursively gets ALL descendants (not just direct children).
 * * 🇩🇪: Gibt rekursiv ALLE Nachfahren zurück (nicht nur direkte Kinder).
 * @returns
 * * 🇬🇧: A new jBase instance with all descendants.
 * * 🇩🇪: Eine neue jBase-Instanz mit allen Nachfahren.
 */
export declare function descendants(this: jBase): jBase;
/**
 * * 🇬🇧: Gets all ancestors (parents, grandparents...) up to the root. Optionally filtered.
 * * 🇩🇪: Gibt alle Vorfahren (Eltern, Großeltern...) zurück bis zum Root-Element. Optional gefiltert.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector for ancestors.
 * * 🇩🇪: (Optional) Selektor zum Filtern der Vorfahren.
 * @returns
 * * 🇬🇧: A new jBase instance with the ancestors.
 * * 🇩🇪: Eine neue jBase-Instanz mit den Vorfahren.
 */
export declare function parents(this: jBase, selector?: string): jBase;
/**
 * * 🇬🇧: Gets all ancestors UP TO (but not including) an element matching the selector.
 * * 🇩🇪: Gibt alle Vorfahren zurück, BIS (aber nicht einschließlich) ein Element dem Selektor entspricht.
 * @param selector
 * * 🇬🇧: The selector where traversal stops.
 * * 🇩🇪: Der Selektor, bei dem gestoppt wird.
 * @param filter
 * * 🇬🇧: (Optional) Filter for the collected elements.
 * * 🇩🇪: (Optional) Zusätzlicher Filter für die gefundenen Elemente.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export declare function parentsUntil(this: jBase, selector: string, filter?: string): jBase;
/**
 * * 🇬🇧: Recursively finds descendants but stops traversing a branch if `untilSelector` is met. Useful for finding nested elements without going too deep (e.g., nested forms).
 * * 🇩🇪: Sucht rekursiv nach Nachfahren, stoppt aber den "Tiefgang" in einem Zweig, sobald ein Element dem `untilSelector` entspricht.
 * @param untilSelector
 * * 🇬🇧: The selector that stops recursion in a branch.
 * * 🇩🇪: Der Selektor, der die Rekursion in diesem Zweig stoppt.
 * @param filter
 * * 🇬🇧: (Optional) Selector to filter collected elements.
 * * 🇩🇪: (Optional) Selektor, welche Elemente gesammelt werden sollen.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export declare function descendantsUntil(this: jBase, untilSelector: string, filter?: string): jBase;
/**
 * * 🇬🇧: Gets the immediately following sibling.
 * * 🇩🇪: Holt das unmittelbar folgende Geschwisterelement.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export declare function next(this: jBase, selector?: string): jBase;
/**
 * * 🇬🇧: Gets the immediately preceding sibling.
 * * 🇩🇪: Holt das unmittelbar vorhergehende Geschwisterelement.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export declare function prev(this: jBase, selector?: string): jBase;
/**
 * * 🇬🇧: Alias for `next()`.
 * * 🇩🇪: Alias für `next()`.
 */
export declare function nextSibling(this: jBase, selector?: string): jBase;
/**
 * * 🇬🇧: Alias for `prev()`.
 * * 🇩🇪: Alias für `prev()`.
 */
export declare function prevSibling(this: jBase, selector?: string): jBase;
/**
 * * 🇬🇧: Alias for `next()`.
 * * 🇩🇪: Alias für `next()`.
 */
export declare function sibling(this: jBase, selector?: string): jBase;
/**
 * * 🇬🇧: Gets ALL following siblings.
 * * 🇩🇪: Holt ALLE nachfolgenden Geschwisterelemente.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export declare function nextAll(this: jBase, selector?: string): jBase;
/**
 * * 🇬🇧: Gets ALL preceding siblings.
 * * 🇩🇪: Holt ALLE vorhergehenden Geschwisterelemente.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export declare function prevAll(this: jBase, selector?: string): jBase;
/**
 * * 🇬🇧: Gets ALL siblings (previous and next), excluding itself.
 * * 🇩🇪: Holt ALLE Geschwisterelemente (vorherige UND nachfolgende), außer sich selbst.
 * @param selector
 * * 🇬🇧: (Optional) Filter selector.
 * * 🇩🇪: (Optional) Filter-Selektor.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export declare function siblings(this: jBase, selector?: string): jBase;
/**
 * * 🇬🇧: Gets all following siblings UNTIL a selector is met (exclusive).
 * * 🇩🇪: Holt alle nachfolgenden Elemente BIS ein Selektor zutrifft (exklusive).
 * @param untilSelector
 * * 🇬🇧: The selector that stops the search.
 * * 🇩🇪: Der Selektor, der die Suche stoppt.
 * @param filter
 * * 🇬🇧: (Optional) Filter for the found elements.
 * * 🇩🇪: (Optional) Filter für die gefundenen Elemente.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export declare function nextUntil(this: jBase, untilSelector: string, filter?: string): jBase;
/**
 * * 🇬🇧: Gets all preceding siblings UNTIL a selector is met (exclusive).
 * * 🇩🇪: Holt alle vorhergehenden Elemente BIS ein Selektor zutrifft (exklusive).
 * @param untilSelector
 * * 🇬🇧: The selector that stops the search.
 * * 🇩🇪: Der Selektor, der die Suche stoppt.
 * @param filter
 * * 🇬🇧: (Optional) Filter for the found elements.
 * * 🇩🇪: (Optional) Filter für die gefundenen Elemente.
 * @returns
 * * 🇬🇧: A new jBase instance.
 * * 🇩🇪: Eine neue jBase-Instanz.
 */
export declare function prevUntil(this: jBase, untilSelector: string, filter?: string): jBase;
/**
 * * 🇬🇧: Reduces the set to the element at the specified index. Supports negative indices.
 * * 🇩🇪: Reduziert das Set auf das Element am angegebenen Index. Unterstützt negative Indizes.
 * @param index
 * * 🇬🇧: The position (0-based). Negative values count from the end.
 * * 🇩🇪: Die Position (0-basiert). Negative Werte zählen vom Ende.
 * @returns
 * * 🇬🇧: A new jBase instance containing the single element (or empty).
 * * 🇩🇪: Eine neue jBase-Instanz mit dem einzelnen Element (oder leer).
 */
export declare function eq(this: jBase, index: number): jBase;
/**
 * * 🇬🇧: Reduces the set to the first element.
 * * 🇩🇪: Reduziert das Set auf das erste Element.
 */
export declare function first(this: jBase): jBase;
/**
 * * 🇬🇧: Reduces the set to the last element.
 * * 🇩🇪: Reduziert das Set auf das letzte Element.
 */
export declare function last(this: jBase): jBase;
/**
 * * 🇬🇧: Filters elements based on a selector or a function.
 * * 🇩🇪: Filtert die Elemente basierend auf einem Selektor oder einer Funktion.
 * @param selectorOrFn
 * * 🇬🇧: CSS selector string or filter function.
 * * 🇩🇪: CSS-Selektor (String) oder Filter-Funktion.
 * @returns
 * * 🇬🇧: A new jBase instance with filtered elements.
 * * 🇩🇪: Eine neue jBase-Instanz mit den gefilterten Elementen.
 */
export declare function filterBy(this: jBase, selectorOrFn: string | ((index: number, element: Element) => boolean)): jBase;
/**
 * * 🇬🇧: Removes elements from the set that match the selector or function (Inverse of filterBy).
 * * 🇩🇪: Entfernt Elemente aus dem Set, die dem Selektor oder der Funktion entsprechen (Das Gegenteil von filterBy).
 * @param selectorOrFn
 * * 🇬🇧: CSS selector string or filter function.
 * * 🇩🇪: CSS-Selektor (String) oder Filter-Funktion.
 * @returns
 * * 🇬🇧: A new jBase instance with remaining elements.
 * * 🇩🇪: Eine neue jBase-Instanz mit den verbleibenden Elementen.
 */
export declare function not(this: jBase, selectorOrFn: string | ((index: number, element: Element) => boolean)): jBase;
//# sourceMappingURL=traversal.d.ts.map