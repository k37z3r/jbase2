/**
 * @file src/modules/dom/content.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * 🇬🇧: Methods for getting and setting element content (html, text, empty, replaceWith).
 * * 🇩🇪: Methoden zum Lesen und Setzen von Elementinhalten (html, text, empty, replaceWith).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
import { jBase } from '../../core';
/**
 * * 🇬🇧: Gets the HTML content of the first element or sets the HTML content for all elements in the selection.
 * * 🇩🇪: Ruft den HTML-Inhalt des ersten Elements ab oder setzt den HTML-Inhalt für alle Elemente in der Auswahl.
 * @param content
 * * 🇬🇧: (Optional) The HTML string to set.
 * * 🇩🇪: (Optional) Der HTML-String, der gesetzt werden soll.
 * @returns
 * * 🇬🇧: The HTML string (getter) or the current jBase instance (setter).
 * * 🇩🇪: Der HTML-String (Getter) oder die aktuelle jBase-Instanz (Setter).
 */
export declare function html(this: jBase, content?: string): string | jBase;
/**
 * * 🇬🇧: Gets the text content of the first element or sets it for all elements. Safe against XSS attacks.
 * * 🇩🇪: Ruft den reinen Text-Inhalt des ersten Elements ab oder setzt ihn für alle Elemente. Sicher gegen XSS-Angriffe.
 * @param content
 * * 🇬🇧: (Optional) The text content to set.
 * * 🇩🇪: (Optional) Der Text, der gesetzt werden soll.
 * @returns
 * * 🇬🇧: The text content (getter) or the current jBase instance (setter).
 * * 🇩🇪: Der Text-Inhalt (Getter) oder die aktuelle jBase-Instanz (Setter).
 */
export declare function text(this: jBase, content?: string): string | jBase;
//# sourceMappingURL=content.d.ts.map