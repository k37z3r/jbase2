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
import { MatchMode } from './types';
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
export declare function merge(target: any, ...sources: any[]): any;
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
export declare function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
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
export declare function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
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
export declare function get(obj: any, path: string): any;
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
export declare function set(obj: any, path: string, value: any): void;
/**
 * * 🇬🇧: Searches keys or values in the object.
 * * 🇩🇪: Sucht Keys oder Values im Objekt.
 */
export declare const find: {
    /**
     * * 🇬🇧: Finds all keys matching the query.
     * * 🇩🇪: Findet alle Schlüssel (Keys), die auf den Suchbegriff passen.
     * @example find.key(config, 'api_', 'startsWith')
     */
    key(obj: any, query: string, mode?: MatchMode): string[];
    /**
     * * 🇬🇧: Finds all values matching the query.
     * * 🇩🇪: Findet alle Werte (Values), die auf den Suchbegriff passen.
     */
    value(obj: any, query: string, mode?: MatchMode): any[];
};
//# sourceMappingURL=objects.d.ts.map