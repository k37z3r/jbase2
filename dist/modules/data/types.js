"use strict";
/**
 * @file src/modules/data/types.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Data
 * @description
 * * 🇬🇧: Type definitions and validation helpers for data structures.
 * * 🇩🇪: Typ-Definitionen und Validierungs-Hilfsmittel für Datenstrukturen.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkMatch = checkMatch;
/**
 * * 🇬🇧: Internal helper to compare values based on the specified mode. Converts values to strings and lowercase for comparison.
 * * 🇩🇪: Interner Helfer zum Vergleichen von Werten basierend auf dem angegebenen Modus. Konvertiert Werte für den Vergleich in Strings und Kleinschreibung.
 * @param value
 * * 🇬🇧: The value to check.
 * * 🇩🇪: Der zu prüfende Wert.
 * @param query
 * * 🇬🇧: The search query.
 * * 🇩🇪: Der Suchbegriff.
 * @param mode
 * * 🇬🇧: The matching mode.
 * * 🇩🇪: Der Vergleichsmodus.
 * @returns
 * * 🇬🇧: True if the value matches the query.
 * * 🇩🇪: True, wenn der Wert mit der Query übereinstimmt.
 */
function checkMatch(value, query, mode) {
    const valStr = String(value).toLowerCase();
    const queryStr = String(query).toLowerCase();
    switch (mode) {
        case 'exact': return valStr === queryStr;
        case 'startsWith': return valStr.startsWith(queryStr);
        case 'endsWith': return valStr.endsWith(queryStr);
        case 'contains': return valStr.includes(queryStr);
        default: return false;
    }
}
//# sourceMappingURL=types.js.map