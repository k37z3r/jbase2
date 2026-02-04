"use strict";
/**
 * @file src/index.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Entry Point
 * @description
 * * 🇬🇧: Main library entry point. Aggregates Core, Types, Utils, and all functional modules into a single export.
 * * 🇩🇪: Haupt-Einstiegspunkt der Bibliothek. Aggregiert Core, Types, Utils und alle funktionalen Module in einen einzigen Export.
 * @requires ./core
 * * 🇬🇧: Core class logic and inheritance.
 * * 🇩🇪: Kern-Klassenlogik und Vererbung.
 * @requires ./types
 * * 🇬🇧: TypeScript type definitions and interfaces.
 * * 🇩🇪: TypeScript Typ-Definitionen und Interfaces.
 * @requires ./utils
 * * 🇬🇧: Helper functions (throttle, debounce).
 * * 🇩🇪: Hilfsfunktionen (throttle, debounce).
 * @requires ./modules/css
 * * 🇬🇧: Style manipulation methods.
 * * 🇩🇪: Style-Manipulations-Methoden.
 * @requires ./modules/events
 * * 🇬🇧: Event handling logic.
 * * 🇩🇪: Event-Handling-Logik.
 * @requires ./modules/dom
 * * 🇬🇧: DOM traversal and manipulation.
 * * 🇩🇪: DOM-Traversierung und -Manipulation.
 * @requires ./modules/effects
 * * 🇬🇧: Visual effects and animations.
 * * 🇩🇪: Visuelle Effekte und Animationen.
 * @requires ./modules/http
 * * 🇬🇧: HTTP client for AJAX requests.
 * * 🇩🇪: HTTP-Client für AJAX-Anfragen.
 * @requires ./modules/data
 * * 🇬🇧: Data structure utilities.
 * * 🇩🇪: Datenstruktur-Utilities.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JBaseClass = exports.data = exports.http = exports.debounce = exports.throttle = exports.jBase = exports.__jBase = exports._jBase = exports.__jB = exports._jB = exports.jB = exports.$ = void 0;
const core_1 = require("./core");
Object.defineProperty(exports, "JBaseClass", { enumerable: true, get: function () { return core_1.jBase; } });
const css_1 = require("./modules/css");
const events_1 = require("./modules/events");
const dom_1 = require("./modules/dom");
const effects_1 = require("./modules/effects");
// Runtime Extension
Object.assign(core_1.jBase.prototype, css_1.cssMethods);
Object.assign(core_1.jBase.prototype, events_1.eventMethods);
Object.assign(core_1.jBase.prototype, dom_1.domMethods);
Object.assign(core_1.jBase.prototype, effects_1.effectMethods);
/**
 * * 🇬🇧: Factory function to initialize a new jBase instance.
 * * 🇩🇪: Factory-Funktion zur Initialisierung einer neuen jBase-Instanz.
 * @param selector
 * * 🇬🇧: CSS selector, HTML string, DOM element, or collection.
 * * 🇩🇪: CSS-Selektor, HTML-String, DOM-Element oder Sammlung.
 * @returns
 * * 🇬🇧: A new jBase collection.
 * * 🇩🇪: Eine neue jBase-Collection.
 */
const init = (selector) => new core_1.jBase(selector);
/**
 * * 🇬🇧: Export the factory under different aliases for maximum compatibility and convenience.
 * * 🇩🇪: Export der Factory unter verschiedenen Aliasen für maximale Kompatibilität und Komfort.
 */
exports.$ = init;
exports.jB = init;
exports._jB = init;
exports.__jB = init;
exports._jBase = init;
exports.__jBase = init;
exports.jBase = init;
/**
 * * 🇬🇧: Utility for throttled function calls.
 * * 🇩🇪: Utility für gedrosselte Funktionsaufrufe.
 */
var utils_1 = require("./utils");
Object.defineProperty(exports, "throttle", { enumerable: true, get: function () { return utils_1.throttle; } });
/**
 * * 🇬🇧: Utility for debounced function calls.
 * * 🇩🇪: Utility für verzögerte Funktionsaufrufe.
 */
var utils_2 = require("./utils");
Object.defineProperty(exports, "debounce", { enumerable: true, get: function () { return utils_2.debounce; } });
/**
 * * 🇬🇧: HTTP Client for AJAX requests.
 * * 🇩🇪: HTTP-Client für AJAX-Anfragen.
 */
var http_1 = require("./modules/http");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_1.http; } });
/**
 * * 🇬🇧: Data utilities for Arrays and Objects.
 * * 🇩🇪: Daten-Utilities für Arrays und Objekte.
 */
var data_1 = require("./modules/data");
Object.defineProperty(exports, "data", { enumerable: true, get: function () { return data_1.data; } });
//# sourceMappingURL=index.js.map