/**
 * @file src/modules/events/binding.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * 🇬🇧: Core event binding methods (on, off, trigger). Handles event registration and removal.
 * * 🇩🇪: Kern-Methoden für Event-Binding (on, off, trigger). Behandelt die Registrierung und Entfernung von Events.
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
import { jBase } from '../../core';
/**
 * * 🇬🇧: Registers an event listener for all elements in the current selection. Uses the native `addEventListener` method internally.
 * * 🇩🇪: Registriert einen Event-Listener für alle Elemente in der aktuellen Auswahl. Nutzt intern die native `addEventListener`-Methode.
 * @param event
 * * 🇬🇧: The name of the event (e.g., 'click', 'mouseenter').
 * * 🇩🇪: Der Name des Events (z.B. 'click', 'mouseenter').
 * @param handler
 * * 🇬🇧: The callback function to execute when the event triggers.
 * * 🇩🇪: Die Callback-Funktion, die beim Auslösen des Events ausgeführt wird.
 * @returns
 * * 🇬🇧: The jBase instance for method chaining.
 * * 🇩🇪: Die jBase-Instanz für Method-Chaining.
 */
export declare function on(this: jBase, event: string, handler: EventListenerOrEventListenerObject): jBase;
/**
 * * 🇬🇧: Removes a previously registered event listener from all elements in the current selection. Uses the native `removeEventListener` method internally.
 * Note: The handler passed must be the exact same reference used in `on`.
 * * 🇩🇪: Entfernt einen zuvor registrierten Event-Listener von allen Elementen in der aktuellen Auswahl. Nutzt intern die native `removeEventListener`-Methode.
 * Hinweis: Der übergebene Handler muss exakt dieselbe Referenz sein, die bei `on` verwendet wurde.
 * @param event
 * * 🇬🇧: The name of the event.
 * * 🇩🇪: Der Name des Events.
 * @param handler
 * * 🇬🇧: The reference of the callback function to remove.
 * * 🇩🇪: Die Referenz der Callback-Funktion, die entfernt werden soll.
 * @returns
 * * 🇬🇧: The jBase instance for method chaining.
 * * 🇩🇪: Die jBase-Instanz für Method-Chaining.
 */
export declare function off(this: jBase, event: string, handler: EventListenerOrEventListenerObject): jBase;
//# sourceMappingURL=binding.d.ts.map