"use strict";
/**
 * @file src/modules/events/index.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Events
 * @description
 * * 🇬🇧: Central entry point for event handling. Aggregates binding, mouse, lifecycle, keyboard, form, and touch events.
 * * 🇩🇪: Zentraler Einstiegspunkt für Event-Handling. Aggregiert Binding-, Maus-, Lebenszyklus-, Tastatur-, Formular- und Touch-Events.
 * @requires ./binding
 * * 🇬🇧: General event binding (on, off).
 * * 🇩🇪: Generelle Event-Bindung (on, off).
 * @requires ./mouse
 * * 🇬🇧: Mouse interaction events (click, hover, etc.).
 * * 🇩🇪: Maus-Interaktions-Events (click, hover, etc.).
 * @requires ./lifecycle
 * * 🇬🇧: DOM lifecycle events (ready).
 * * 🇩🇪: DOM-Lebenszyklus-Events (ready).
 * @requires ./keyboard
 * * 🇬🇧: Keyboard interaction events (keydown, keyup).
 * * 🇩🇪: Tastatur-Interaktions-Events (keydown, keyup).
 * @requires ./form
 * * 🇬🇧: Form handling events (submit, change, input).
 * * 🇩🇪: Formular-Verarbeitungs-Events (submit, change, input).
 * @requires ./touch
 * * 🇬🇧: Touch interaction events.
 * * 🇩🇪: Touch-Interaktions-Events.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventMethods = void 0;
const tslib_1 = require("tslib");
const bindingMethods = tslib_1.__importStar(require("./binding"));
const mouseMethods = tslib_1.__importStar(require("./mouse"));
const lifecycleMethods = tslib_1.__importStar(require("./lifecycle"));
const keyboardMethods = tslib_1.__importStar(require("./keyboard"));
const formMethods = tslib_1.__importStar(require("./form"));
const touchMethods = tslib_1.__importStar(require("./touch"));
/**
 * * 🇬🇧: Aggregated object of all event methods. Combines logic from various sub-modules into a single object. Used to extend the `jBase` prototype via `Object.assign`.
 * * 🇩🇪: Aggregiertes Objekt aller Event-Methoden. Vereint die Logik aus verschiedenen Sub-Modulen in einem einzigen Objekt. Wird genutzt, um den Prototypen der `jBase`-Klasse via `Object.assign` zu erweitern.
 */
exports.eventMethods = {
    ...bindingMethods,
    ...mouseMethods,
    ...lifecycleMethods,
    ...keyboardMethods,
    ...formMethods,
    ...touchMethods
};
//# sourceMappingURL=index.js.map