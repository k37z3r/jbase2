"use strict";
/**
 * @file src/modules/events/form.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * 🇬🇧: Methods for handling form events (submit, change, focus, blur, input).
 * * 🇩🇪: Methoden zur Behandlung von Formular-Events (submit, change, focus, blur, input).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.submit = submit;
exports.change = change;
exports.input = input;
exports.focus = focus;
exports.blur = blur;
/**
 * * 🇬🇧: Registers an event handler for the 'submit' event. Triggered when a form is submitted.
 * * 🇩🇪: Registriert einen Event-Handler für das 'submit'-Event. Wird ausgelöst, wenn ein Formular abgesendet wird.
 * @param handler
 * * 🇬🇧: The function to execute when the event occurs.
 * * 🇩🇪: Die Funktion, die ausgeführt wird, wenn das Event eintritt.
 * @returns
 * * 🇬🇧: The current jBase instance for chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Chaining.
 */
function submit(handler) {
    return this.on('submit', handler);
}
/**
 * * 🇬🇧: Registers an event handler for the 'change' event. Triggered when the value of an element (<input>, <select>, <textarea>) is changed by the user and committed (e.g., on blur).
 * * 🇩🇪: Registriert einen Event-Handler für das 'change'-Event. Wird ausgelöst, wenn der Wert eines Elements (<input>, <select>, <textarea>) geändert und bestätigt wurde (z.B. durch Verlassen).
 * @param handler
 * * 🇬🇧: The function to execute when the event occurs.
 * * 🇩🇪: Die Funktion, die ausgeführt wird, wenn das Event eintritt.
 * @returns
 * * 🇬🇧: The current jBase instance for chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Chaining.
 */
function change(handler) {
    return this.on('change', handler);
}
/**
 * * 🇬🇧: Registers an event handler for the 'input' event. Triggered immediately when the value changes (real-time, e.g., every keystroke).
 * * 🇩🇪: Registriert einen Event-Handler für das 'input'-Event. Wird sofort ausgelöst, wenn sich der Wert ändert (Echtzeit, z.B. bei jedem Tastenanschlag).
 * @param handler
 * * 🇬🇧: The function to execute when the event occurs.
 * * 🇩🇪: Die Funktion, die ausgeführt wird, wenn das Event eintritt.
 * @returns
 * * 🇬🇧: The current jBase instance for chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Chaining.
 */
function input(handler) {
    return this.on('input', handler);
}
/**
 * * 🇬🇧: Handles the 'focus' event. If a handler is provided, it binds the listener. If no handler is provided, it programmatically sets focus on the element(s).
 * * 🇩🇪: Behandelt das 'focus'-Event. Wenn ein Handler übergeben wird, wird der Listener gebunden. Ohne Handler wird der Fokus programmatisch auf das/die Element(e) gesetzt.
 * @param handler
 * * 🇬🇧: (Optional) The function to execute when the event occurs.
 * * 🇩🇪: (Optional) Die Funktion, die ausgeführt wird, wenn das Event eintritt.
 * @returns
 * * 🇬🇧: The current jBase instance for chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Chaining.
 */
function focus(handler) {
    if (handler) {
        return this.on('focus', handler);
    }
    else {
        this.forEach(el => {
            if (el instanceof HTMLElement)
                el.focus();
        });
        return this;
    }
}
/**
 * * 🇬🇧: Handles the 'blur' event (element loses focus). If a handler is provided, it binds the listener. If no handler is provided, it programmatically removes focus.
 * * 🇩🇪: Behandelt das 'blur'-Event (Verlust des Fokus). Wenn ein Handler übergeben wird, wird der Listener gebunden. Ohne Handler wird der Fokus programmatisch entfernt.
 * @param handler
 * * 🇬🇧: (Optional) The function to execute when the event occurs.
 * * 🇩🇪: (Optional) Die Funktion, die ausgeführt wird, wenn das Event eintritt.
 * @returns
 * * 🇬🇧: The current jBase instance for chaining.
 * * 🇩🇪: Die aktuelle jBase-Instanz für Chaining.
 */
function blur(handler) {
    if (handler) {
        return this.on('blur', handler);
    }
    else {
        this.forEach(el => {
            if (el instanceof HTMLElement)
                el.blur();
        });
        return this;
    }
}
//# sourceMappingURL=form.js.map