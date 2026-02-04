"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.click = click;
exports.mousemove = mousemove;
exports.mouseleave = mouseleave;
exports.mouseenter = mouseenter;
exports.mousedown = mousedown;
exports.mouseup = mouseup;
exports.dblclick = dblclick;
exports.mouseout = mouseout;
exports.mouseover = mouseover;
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
function click(handler) {
    if (handler) {
        return this.on('click', handler);
    }
    else {
        this.forEach(el => {
            if (el instanceof HTMLElement)
                el.click();
        });
        return this;
    }
}
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
function mousemove(handler) {
    return this.on('mousemove', handler);
}
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
function mouseleave(handler) {
    return this.on('mouseleave', handler);
}
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
function mouseenter(handler) {
    return this.on('mouseenter', handler);
}
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
function mousedown(handler) {
    return this.on('mousedown', handler);
}
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
function mouseup(handler) {
    return this.on('mouseup', handler);
}
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
function dblclick(handler) {
    if (handler) {
        return this.on('dblclick', handler);
    }
    else {
        this.forEach(el => {
            if (el instanceof HTMLElement) {
                // Native el.dblclick() does not exist, so we dispatch the event
                el.dispatchEvent(new MouseEvent('dblclick', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                }));
            }
        });
        return this;
    }
}
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
function mouseout(handler) {
    return this.on('mouseout', handler);
}
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
function mouseover(handler) {
    return this.on('mouseover', handler);
}
//# sourceMappingURL=mouse.js.map