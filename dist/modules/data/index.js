"use strict";
/**
 * @file src/modules/data/index.ts
 * @version 2.0.0
 * @since 2.0.0
 * * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Data
 * @description
 * * 🇬🇧: Central entry point for data manipulation modules. Aggregates array and object utilities.
 * * 🇩🇪: Zentraler Einstiegspunkt für Datenmanipulations-Module. Aggregiert Array- und Objekt-Hilfsmethoden.
 * @requires ./arrays
 * * 🇬🇧: Array manipulation methods.
 * * 🇩🇪: Methoden zur Array-Manipulation.
 * @requires ./objects
 * * 🇬🇧: Object manipulation methods.
 * * 🇩🇪: Methoden zur Objekt-Manipulation.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const tslib_1 = require("tslib");
const arrayMethods = tslib_1.__importStar(require("./arrays"));
const objectMethods = tslib_1.__importStar(require("./objects"));
/**
 * * 🇬🇧: Central data utility object. Bundles array ('arr') and object ('obj') manipulation methods.
 * * 🇩🇪: Zentrales Daten-Utility-Objekt. Bündelt Methoden zur Array- ('arr') und Objekt-Manipulation ('obj').
 */
exports.data = {
    arr: arrayMethods,
    obj: objectMethods
};
//# sourceMappingURL=index.js.map