"use strict";
/**
 * @file src/modules/events/lifecycle.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * 🇬🇧: Methods for handling DOM lifecycle events (e.g., ready).
 * * 🇩🇪: Methoden zur Behandlung von DOM-Lebenszyklus-Events (z.B. ready).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ready = ready;
/**
 * * 🇬🇧: Executes the handler as soon as the DOM is fully loaded and parsed. If the document is already ready (readyState 'interactive' or 'complete'), the handler executes immediately to avoid race conditions.
 * * 🇩🇪: Führt den übergebenen Handler aus, sobald das DOM vollständig geladen und geparst ist. Falls das Dokument bereits bereit ist (readyState 'interactive' oder 'complete'), wird der Handler sofort ausgeführt, um Race Conditions zu vermeiden.
 * @param handler
 * * 🇬🇧: The callback function to execute when the DOM is ready.
 * * 🇩🇪: Die Callback-Funktion, die ausgeführt werden soll, sobald das DOM bereit ist.
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
 */
function ready(handler) {
    // Check if DOM is already ready (no waiting required)
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        handler();
    }
    else {
        // Register event listener if DOM is still loading
        this.on('DOMContentLoaded', handler);
    }
    return this;
}
//# sourceMappingURL=lifecycle.js.map