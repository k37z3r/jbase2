/**
 * @file src/core.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Core
 * @description
 * * 🇬🇧: The main jBase class. Handles the selection engine, initialization, and plugin architecture.
 * * 🇩🇪: Die Haupt-jBase-Klasse. Behandelt die Selektions-Engine, Initialisierung und Plugin-Architektur.
 */
import { JBaseElement, JBaseInput } from './types';
/**
 * * 🇬🇧: The core class of the framework, inheriting from the native Array class. Acts as a wrapper around DOM elements and enables chainable methods (Fluent Interface).
 * * 🇩🇪: Die Kern-Klasse des Frameworks, die von der nativen Array-Klasse erbt. Dient als Wrapper um DOM-Elemente und ermöglicht verkettbare Methoden (Fluent Interface).
 */
export declare class jBase extends Array<JBaseElement> {
    selectorSource: string;
    /**
     * * 🇬🇧: Initializes a new jBase instance. Analyzes the provided selector and populates the internal array with found or created DOM elements.
     * * 🇩🇪: Initialisiert eine neue jBase-Instanz. Analysiert den übergebenen Selektor und füllt das interne Array mit den gefundenen oder erstellten DOM-Elementen.
     * @param selector
     * * 🇬🇧: The input selector (CSS selector, HTML string, DOM element, or collection).
     * * 🇩🇪: Der Eingabe-Selektor (CSS-Selektor, HTML-String, DOM-Element oder Sammlung).
     */
    constructor(selector?: JBaseInput);
    /**
     * * 🇬🇧: Custom serializer for JSON.stringify. Prevents circular references and huge outputs by returning a simplified preview.
     * * 🇩🇪: Benutzerdefinierte Serialisierung für JSON.stringify. Verhindert Zirkelbezüge und riesige Ausgaben durch Rückgabe einer vereinfachten Vorschau.
     * @returns
     * * 🇬🇧: A simplified object representation for debugging.
     * * 🇩🇪: Eine vereinfachte Objektrepräsentation für das Debugging.
     */
    toJSON(): {
        meta: string;
        query: string;
        count: number;
        preview: string[];
    };
}
//# sourceMappingURL=core.d.ts.map