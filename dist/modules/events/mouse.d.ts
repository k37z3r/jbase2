/**
 * @file src/modules/events/mouse.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * 🇬🇧: Methods for handling mouse events (click, dblclick, hover, mouseenter, mouseleave).
 * * 🇩🇪: Methoden zur Behandlung von Maus-Events (click, dblclick, hover, mouseenter, mouseleave).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
import { jBase } from '../../core';
/**
 * * 🇬🇧: Binds an event handler to the 'click' event or triggers the event manually.
 * - With handler: Registers the function.
 * - Without handler: Simulates a click on all selected elements.
 * * 🇩🇪: Bindet einen Event-Handler an das 'click'-Ereignis oder löst das Ereignis manuell aus.
 * - Mit Handler: Registriert die Funktion.
 * - Ohne Handler: Simuliert einen Klick auf alle selektierten Elemente.
 * @param handler
 * * 🇬🇧: (Optional) The callback function executed on click.
 * * 🇩🇪: (Optional) Die Callback-Funktion, die beim Klick ausgeführt wird.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function click(this: jBase, handler?: (event: Event) => void): jBase;
/**
 * * 🇬🇧: Binds an event handler to the 'mousemove' event. Fires continuously while the pointer moves inside the element.
 * * 🇩🇪: Bindet einen Event-Handler an das 'mousemove'-Ereignis. Feuert kontinuierlich, solange der Mauszeiger innerhalb des Elements bewegt wird.
 * @param handler
 * * 🇬🇧: The callback function.
 * * 🇩🇪: Die Callback-Funktion.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function mousemove(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * 🇬🇧: Binds an event handler to the 'mouseleave' event. Fires when the pointer leaves the element (does not bubble).
 * * 🇩🇪: Bindet einen Event-Handler an das 'mouseleave'-Ereignis. Feuert, wenn der Mauszeiger das Element verlässt (bubbelt nicht).
 * @param handler
 * * 🇬🇧: The callback function.
 * * 🇩🇪: Die Callback-Funktion.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function mouseleave(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * 🇬🇧: Binds an event handler to the 'mouseenter' event. Fires when the pointer enters the element (does not bubble).
 * * 🇩🇪: Bindet einen Event-Handler an das 'mouseenter'-Ereignis. Feuert, wenn der Mauszeiger das Element betritt (bubbelt nicht).
 * @param handler
 * * 🇬🇧: The callback function.
 * * 🇩🇪: Die Callback-Funktion.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function mouseenter(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * 🇬🇧: Binds an event handler to the 'mousedown' event. Fires as soon as a mouse button is pressed over the element.
 * * 🇩🇪: Bindet einen Event-Handler an das 'mousedown'-Ereignis. Feuert, sobald eine Maustaste über dem Element gedrückt wird.
 * @param handler
 * * 🇬🇧: The callback function.
 * * 🇩🇪: Die Callback-Funktion.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function mousedown(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * 🇬🇧: Binds an event handler to the 'mouseup' event. Fires when a mouse button is released over the element.
 * * 🇩🇪: Bindet einen Event-Handler an das 'mouseup'-Ereignis. Feuert, wenn eine Maustaste über dem Element losgelassen wird.
 * @param handler
 * * 🇬🇧: The callback function.
 * * 🇩🇪: Die Callback-Funktion.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function mouseup(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * 🇬🇧: Binds an event handler to the 'dblclick' event or triggers it manually.
 * * 🇩🇪: Bindet einen Event-Handler an das 'dblclick'-Ereignis oder löst das Ereignis manuell aus.
 * @param handler
 * * 🇬🇧: (Optional) The callback function.
 * * 🇩🇪: (Optional) Die Callback-Funktion.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function dblclick(this: jBase, handler?: (event: MouseEvent) => void): jBase;
/**
 * * 🇬🇧: Binds an event handler to the 'mouseout' event. Fires when the pointer leaves the element OR one of its children (bubbles).
 * * 🇩🇪: Bindet einen Event-Handler an das 'mouseout'-Ereignis. Feuert, wenn der Mauszeiger das Element ODER eines seiner Kinder verlässt (bubbelt).
 * @param handler
 * * 🇬🇧: The callback function.
 * * 🇩🇪: Die Callback-Funktion.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function mouseout(this: jBase, handler: (event: MouseEvent) => void): jBase;
/**
 * * 🇬🇧: Binds an event handler to the 'mouseover' event. Fires when the pointer enters the element OR one of its children (bubbles).
 * * 🇩🇪: Bindet einen Event-Handler an das 'mouseover'-Ereignis. Feuert, wenn der Mauszeiger das Element ODER eines seiner Kinder betritt (bubbelt).
 * @param handler
 * * 🇬🇧: The callback function.
 * * 🇩🇪: Die Callback-Funktion.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function mouseover(this: jBase, handler: (event: MouseEvent) => void): jBase;
//# sourceMappingURL=mouse.d.ts.map