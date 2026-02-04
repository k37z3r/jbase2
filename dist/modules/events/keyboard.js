"use strict";
/**
 * @file src/modules/events/keyboard.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * 🇬🇧: Methods for handling keyboard events (keydown, keyup, keypress).
 * * 🇩🇪: Methoden zur Behandlung von Tastatur-Events (keydown, keyup, keypress).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.keydown = keydown;
exports.keyup = keyup;
exports.keypress = keypress;
exports.pressedKey = pressedKey;
/**
 * * 🇬🇧: Binds an event handler to the 'keydown' event. Fires immediately when a key is pressed (repeats if held).
 * * 🇩🇪: Bindet einen Event-Handler an das 'keydown'-Event. Feuert sofort, wenn eine Taste gedrückt wird (und wiederholt, wenn gehalten).
 * @param handler
 * * 🇬🇧: The callback function receiving the KeyboardEvent.
 * * 🇩🇪: Die Callback-Funktion, die das KeyboardEvent empfängt.
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
 */
function keydown(handler) {
    return this.on('keydown', handler);
}
/**
 * * 🇬🇧: Binds an event handler to the 'keyup' event. Fires when a key is released.
 * * 🇩🇪: Bindet einen Event-Handler an das 'keyup'-Event. Feuert, wenn eine Taste losgelassen wird.
 * @param handler
 * * 🇬🇧: The callback function receiving the KeyboardEvent.
 * * 🇩🇪: Die Callback-Funktion, die das KeyboardEvent empfängt.
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
 */
function keyup(handler) {
    return this.on('keyup', handler);
}
/**
 * * 🇬🇧: Binds an event handler to the 'keypress' event. Deprecated in modern standards.
 * * 🇩🇪: Bindet einen Event-Handler an das 'keypress'-Event. In modernen Standards veraltet (deprecated).
 * @deprecated Use keydown or input instead.
 * @param handler
 * * 🇬🇧: The callback function receiving the KeyboardEvent.
 * * 🇩🇪: Die Callback-Funktion, die das KeyboardEvent empfängt.
 * @returns
 * * 🇬🇧: The current jBase instance for method chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Method-Chaining.
 */
function keypress(handler) {
    return this.on('keypress', handler);
}
/**
 * * 🇬🇧: Binds an event handler for a specific key (case-insensitive).
 * * 🇩🇪: Bindet einen Event-Handler für eine spezifische Taste (Groß-/Kleinschreibung wird ignoriert).
 * @param targetKey
 * * 🇬🇧: The key to react to (e.g., 'm', 'Enter', 'Escape').
 * * 🇩🇪: Die Taste, auf die reagiert werden soll (z.B. 'm', 'Enter', 'Escape').
 * @param handler
 * * 🇬🇧: The callback function.
 * * 🇩🇪: Die Callback-Funktion.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
function pressedKey(targetKey, handler) {
    return this.on('keydown', (e) => {
        const event = e;
        if (event.key.toLowerCase() === targetKey.toLowerCase()) {
            handler(event);
        }
    });
}
//# sourceMappingURL=keyboard.js.map