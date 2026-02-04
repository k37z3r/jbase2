"use strict";
/**
 * @file src/modules/data/objects.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Data
 * @description
 * * 🇬🇧: Utility functions for object manipulation (e.g., deep merging, extension).
 * * 🇩🇪: Hilfsfunktionen für Objekt-Manipulation (z.B. Deep Merge, Erweiterung).
 * @requires ./types
 * * 🇬🇧: Depends on match logic and types.
 * * 🇩🇪: Hängt von Match-Logik und Typen ab.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
exports.merge = merge;
exports.pick = pick;
exports.omit = omit;
exports.get = get;
exports.set = set;
const types_1 = require("./types");
/**
 * * 🇬🇧: Recursively merges multiple objects (Deep Merge).
 * * 🇩🇪: Führt mehrere Objekte rekursiv zusammen (Deep Merge).
 * @example
 * merge({ a: 1, b: { x: 1 } }, { b: { y: 2 } }) // => { a: 1, b: { x: 1, y: 2 } }
 * @param target
 * * 🇬🇧: The target object (will be modified!).
 * * 🇩🇪: Das Zielobjekt (wird modifiziert!).
 * @param sources
 * * 🇬🇧: One or more source objects.
 * * 🇩🇪: Ein oder mehrere Quellobjekte.
 * @returns
 * * 🇬🇧: The modified target object.
 * * 🇩🇪: Das modifizierte Zielobjekt.
 */
function merge(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (key === '__proto__' || key === 'constructor')
                continue;
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                merge(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return merge(target, ...sources);
}
/**
 * * 🇬🇧: Creates a new object containing only the specified keys (Allowlist).
 * * 🇩🇪: Erstellt ein neues Objekt, das nur die angegebenen Schlüssel enthält (Allowlist).
 * @param obj
 * * 🇬🇧: The source object.
 * * 🇩🇪: Das Quellobjekt.
 * @param keys
 * * 🇬🇧: Array of keys to keep.
 * * 🇩🇪: Array der Schlüssel, die übernommen werden sollen.
 * @returns
 * * 🇬🇧: A new object with selected keys.
 * * 🇩🇪: Ein neues Objekt mit den gewählten Schlüsseln.
 */
function pick(obj, keys) {
    const ret = {};
    keys.forEach(key => {
        if (key in obj)
            ret[key] = obj[key];
    });
    return ret;
}
/**
 * * 🇬🇧: Creates a new object containing all keys EXCEPT the specified ones (Blocklist).
 * * 🇩🇪: Erstellt ein neues Objekt, das alle Schlüssel enthält AUẞER den angegebenen (Blocklist).
 * @param obj
 * * 🇬🇧: The source object.
 * * 🇩🇪: Das Quellobjekt.
 * @param keys
 * * 🇬🇧: Array of keys to remove.
 * * 🇩🇪: Array der Schlüssel, die entfernt werden sollen.
 * @returns
 * * 🇬🇧: A new object without the specified keys.
 * * 🇩🇪: Ein neues Objekt ohne die angegebenen Schlüssel.
 */
function omit(obj, keys) {
    const ret = { ...obj };
    keys.forEach(key => {
        delete ret[key];
    });
    return ret;
}
/**
 * * 🇬🇧: Safely retrieves a value from a nested object (Safe Navigation).
 * * 🇩🇪: Liest einen Wert aus einem verschachtelten Objekt sicher aus (Safe Navigation).
 * @example
 * get(user, 'address.city') // Returns city or undefined
 * @param obj
 * * 🇬🇧: The object.
 * * 🇩🇪: Das Objekt.
 * @param path
 * * 🇬🇧: The path as a dot-notation string.
 * * 🇩🇪: Der Pfad als String mit Punkt-Notation.
 * @returns
 * * 🇬🇧: The found value or undefined.
 * * 🇩🇪: Der gefundene Wert oder undefined.
 */
function get(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}
/**
 * * 🇬🇧: Sets a value deeply within a nested object. Creates missing intermediate objects automatically.
 * * 🇩🇪: Setzt einen Wert tief in einem verschachtelten Objekt. Erstellt fehlende Zwischen-Objekte automatisch.
 * @param obj
 * * 🇬🇧: The object to modify.
 * * 🇩🇪: Das zu modifizierende Objekt.
 * @param path
 * * 🇬🇧: The path as a string (e.g., 'settings.theme.color').
 * * 🇩🇪: Der Pfad als String (z.B. 'settings.theme.color').
 * @param value
 * * 🇬🇧: The value to set.
 * * 🇩🇪: Der zu setzende Wert.
 */
function set(obj, path, value) {
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part])
            current[part] = {};
        current = current[part];
    }
    current[parts[parts.length - 1]] = value;
}
/**
 * * 🇬🇧: Searches keys or values in the object.
 * * 🇩🇪: Sucht Keys oder Values im Objekt.
 */
exports.find = {
    /**
     * * 🇬🇧: Finds all keys matching the query.
     * * 🇩🇪: Findet alle Schlüssel (Keys), die auf den Suchbegriff passen.
     * @example find.key(config, 'api_', 'startsWith')
     */
    key(obj, query, mode = 'exact') {
        return Object.keys(obj).filter(key => (0, types_1.checkMatch)(key, query, mode));
    },
    /**
     * * 🇬🇧: Finds all values matching the query.
     * * 🇩🇪: Findet alle Werte (Values), die auf den Suchbegriff passen.
     */
    value(obj, query, mode = 'exact') {
        return Object.values(obj).filter(val => (0, types_1.checkMatch)(val, query, mode));
    }
};
// Helper
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
//# sourceMappingURL=objects.js.map