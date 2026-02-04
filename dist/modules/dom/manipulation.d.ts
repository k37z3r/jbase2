/**
 * @file src/modules/dom/manipulation.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * 🇬🇧: Methods for inserting, moving, and removing elements (append, prepend, remove).
 * * 🇩🇪: Methoden zum Einfügen, Verschieben und Entfernen von Elementen (append, prepend, remove).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
import { jBase } from '../../core';
/**
 * * 🇬🇧: Removes the selected elements from the DOM.
 * * 🇩🇪: Entfernt die ausgewählten Elemente vollständig aus dem DOM.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function remove(this: jBase): jBase;
/**
 * * 🇬🇧: Removes all child nodes and text content from the selected elements.
 * * 🇩🇪: Entfernt alle Kind-Elemente und Textknoten aus den ausgewählten Elementen.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function empty(this: jBase): jBase;
/**
 * * 🇬🇧: Replaces each element with a deep clone of itself. Useful for removing all event listeners ("Nuke" strategy).
 * * 🇩🇪: Ersetzt jedes Element durch eine tiefe Kopie seiner selbst. Nützlich, um alle Event-Listener hart zu entfernen.
 * @returns
 * * 🇬🇧: A new jBase instance containing the cloned elements.
 * * 🇩🇪: Eine neue jBase-Instanz, die die geklonten Elemente enthält.
 */
export declare function replaceWithClone(this: jBase): jBase;
/**
 * * 🇬🇧: Inserts content at the end of each selected element (inside).
 * * 🇩🇪: Fügt Inhalt am Ende jedes Elements in der Sammlung ein (innerhalb).
 * @param content
 * * 🇬🇧: HTML string, DOM Node, or jBase collection.
 * * 🇩🇪: HTML-String, DOM-Node oder jBase-Sammlung.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function append(this: jBase, content: string | Node | jBase): jBase;
/**
 * * 🇬🇧: Inserts content at the beginning of each selected element (inside).
 * * 🇩🇪: Fügt Inhalt am Anfang jedes Elements in der Sammlung ein (innerhalb).
 * @param content
 * * 🇬🇧: HTML string, DOM Node, or jBase collection.
 * * 🇩🇪: HTML-String, DOM-Node oder jBase-Sammlung.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function prepend(this: jBase, content: string | Node | jBase): jBase;
/**
 * * 🇬🇧: Inserts content before the element (outside).
 * * 🇩🇪: Fügt Inhalt VOR dem Element ein (außerhalb).
 * @param content
 * * 🇬🇧: HTML string, DOM Node, or jBase collection.
 * * 🇩🇪: HTML-String, DOM-Node oder jBase-Sammlung.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function before(this: jBase, content: string | Node | jBase): jBase;
/**
 * * 🇬🇧: Inserts content after the element (outside).
 * * 🇩🇪: Fügt Inhalt NACH dem Element ein (außerhalb).
 * @param content
 * * 🇬🇧: HTML string, DOM Node, or jBase collection.
 * * 🇩🇪: HTML-String, DOM-Node oder jBase-Sammlung.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function after(this: jBase, content: string | Node | jBase): jBase;
/**
 * * 🇬🇧: Replaces the element with new content.
 * * 🇩🇪: Ersetzt das Element durch neuen Inhalt.
 * @param content
 * * 🇬🇧: The new content.
 * * 🇩🇪: Der neue Inhalt.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function replaceWith(this: jBase, content: string | Node | jBase): jBase;
/**
 * * 🇬🇧: Appends the selected elements to the end of a target element.
 * * 🇩🇪: Hängt die aktuellen Elemente an das Ende des Ziel-Elements an.
 * @param target
 * * 🇬🇧: CSS selector or DOM element.
 * * 🇩🇪: Der CSS-Selektor oder das DOM-Element.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function appendTo(this: jBase, target: string | Element): jBase;
/**
 * * 🇬🇧: Prepends the selected elements to the beginning of a target element.
 * * 🇩🇪: Fügt die aktuellen Elemente am Anfang des Ziel-Elements ein.
 * @param target
 * * 🇬🇧: CSS selector or DOM element.
 * * 🇩🇪: Der CSS-Selektor oder das DOM-Element.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function prependTo(this: jBase, target: string | Element): jBase;
/**
 * * 🇬🇧: Inserts the selected elements immediately before the target element.
 * * 🇩🇪: Fügt die aktuellen Elemente unmittelbar VOR dem Ziel-Element ein.
 * @param target
 * * 🇬🇧: CSS selector or DOM element.
 * * 🇩🇪: Der CSS-Selektor oder das DOM-Element.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function insertBefore(this: jBase, target: string | Element): jBase;
/**
 * * 🇬🇧: Inserts the selected elements immediately after the target element.
 * * 🇩🇪: Fügt die aktuellen Elemente unmittelbar NACH dem Ziel-Element ein.
 * @param target
 * * 🇬🇧: CSS selector or DOM element.
 * * 🇩🇪: Der CSS-Selektor oder das DOM-Element.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function insertAfter(this: jBase, target: string | Element): jBase;
/**
 * * 🇬🇧: Wraps each selected element with the specified HTML structure.
 * * 🇩🇪: Umschließt jedes Element in der Auswahl mit der angegebenen HTML-Struktur.
 * @param wrapperHtml
 * * 🇬🇧: HTML string defining the wrapper (e.g., `<div class="box"></div>`).
 * * 🇩🇪: Ein HTML-String, der die Wrapper-Struktur definiert (z.B. `<div class="box"></div>`).
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function wrap(this: jBase, wrapperHtml: string): jBase;
/**
 * * 🇬🇧: Removes the direct parent of the selected elements from the DOM.
 * * 🇩🇪: Entfernt das direkte Elternelement der ausgewählten Elemente aus dem DOM.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function unwrap(this: jBase): jBase;
//# sourceMappingURL=manipulation.d.ts.map