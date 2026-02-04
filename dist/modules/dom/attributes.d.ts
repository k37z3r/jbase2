/**
 * @file src/modules/dom/attributes.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * 🇬🇧: Methods for getting and setting HTML attributes and properties (attr, data, val).
 * * 🇩🇪: Methoden zum Lesen und Setzen von HTML-Attributen und Eigenschaften (attr, data, val).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
import { jBase } from '../../core';
/**
 * * 🇬🇧: Gets an attribute from the first element or sets it for all elements in the selection.
 * * 🇩🇪: Liest ein Attribut vom ersten Element oder setzt es für alle Elemente in der Auswahl.
 * @param name
 * * 🇬🇧: The name of the attribute (e.g., 'href', 'data-id').
 * * 🇩🇪: Der Name des Attributs (z.B. 'href', 'data-id').
 * @param value
 * * 🇬🇧: (Optional) The value to set. If undefined, acts as a getter.
 * * 🇩🇪: (Optional) Der zu setzende Wert. Wenn nicht angegeben, wird gelesen.
 * @returns
 * * 🇬🇧: The attribute value (string/null) when reading, or the jBase instance when writing.
 * * 🇩🇪: Beim Lesen: Der Wert des Attributs (string/null). Beim Schreiben: Die jBase-Instanz.
 */
export declare function attr(this: jBase, name: string, value?: string): string | null | jBase;
/**
 * * 🇬🇧: Gets the 'value' from the first form element or sets it for all elements. Supports Input, Textarea, and Select elements.
 * * 🇩🇪: Liest den 'value' vom ersten Formularelement oder setzt ihn für alle Elemente. Unterstützt Input-, Textarea- und Select-Elemente.
 * @param value
 * * 🇬🇧: (Optional) The value to set. If undefined, acts as a getter.
 * * 🇩🇪: (Optional) Der zu setzende Wert. Wenn nicht angegeben, wird gelesen.
 * @returns
 * * 🇬🇧: The current value as a string when reading, or the jBase instance when writing.
 * * 🇩🇪: Beim Lesen: Der aktuelle Wert als String. Beim Schreiben: Die jBase-Instanz.
 */
export declare function val(this: jBase, value?: string): string | jBase;
//# sourceMappingURL=attributes.d.ts.map