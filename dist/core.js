"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.jBase = void 0;
/**
 * * 🇬🇧: The core class of the framework, inheriting from the native Array class. Acts as a wrapper around DOM elements and enables chainable methods (Fluent Interface).
 * * 🇩🇪: Die Kern-Klasse des Frameworks, die von der nativen Array-Klasse erbt. Dient als Wrapper um DOM-Elemente und ermöglicht verkettbare Methoden (Fluent Interface).
 */
class jBase extends Array {
    /**
     * * 🇬🇧: Initializes a new jBase instance. Analyzes the provided selector and populates the internal array with found or created DOM elements.
     * * 🇩🇪: Initialisiert eine neue jBase-Instanz. Analysiert den übergebenen Selektor und füllt das interne Array mit den gefundenen oder erstellten DOM-Elementen.
     * @param selector
     * * 🇬🇧: The input selector (CSS selector, HTML string, DOM element, or collection).
     * * 🇩🇪: Der Eingabe-Selektor (CSS-Selektor, HTML-String, DOM-Element oder Sammlung).
     */
    constructor(selector) {
        super();
        this.selectorSource = '';
        this.selectorSource = typeof selector === 'string' ? selector : '<DOM Object/Array>';
        if (!selector)
            return;
        // 1. Single DOM Element / Window / Document
        if (selector instanceof HTMLElement || selector === document || selector === window || selector instanceof Element) {
            this.push(selector);
        }
        // 2. String (HTML Creation or CSS Selector)
        else if (typeof selector === 'string') {
            const trimmed = selector.trim();
            if (trimmed.startsWith('<') && trimmed.endsWith('>')) {
                // HTML Creation
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = trimmed;
                this.push(...Array.from(tempDiv.children));
            }
            else {
                // CSS Selector
                this.push(...Array.from(document.querySelectorAll(selector)));
            }
        }
        // 3. Collections (NodeList, Array)
        else if (selector instanceof NodeList || Array.isArray(selector)) {
            this.push(...Array.from(selector));
        }
    }
    /**
     * * 🇬🇧: Custom serializer for JSON.stringify. Prevents circular references and huge outputs by returning a simplified preview.
     * * 🇩🇪: Benutzerdefinierte Serialisierung für JSON.stringify. Verhindert Zirkelbezüge und riesige Ausgaben durch Rückgabe einer vereinfachten Vorschau.
     * @returns
     * * 🇬🇧: A simplified object representation for debugging.
     * * 🇩🇪: Eine vereinfachte Objektrepräsentation für das Debugging.
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
exports.jBase = jBase;
//# sourceMappingURL=core.js.map