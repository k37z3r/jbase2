"use strict";
/**
 * @file src/modules/css/index.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category CSS
 * @description
 * * 🇬🇧: Central entry point for CSS operations. Aggregates class and style manipulation methods.
 * * 🇩🇪: Zentraler Einstiegspunkt für CSS-Operationen. Aggregiert Methoden zur Klassen- und Style-Manipulation.
 * @requires ./classes
 * * 🇬🇧: Class manipulation methods (addClass, removeClass, etc.).
 * * 🇩🇪: Methoden zur Klassen-Manipulation (addClass, removeClass, etc.).
 * @requires ./styles
 * * 🇬🇧: Style manipulation methods (css).
 * * 🇩🇪: Methoden zur Style-Manipulation (css).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssMethods = void 0;
const tslib_1 = require("tslib");
const classMethods = tslib_1.__importStar(require("./classes"));
const styleMethods = tslib_1.__importStar(require("./styles"));
/**
 * * 🇬🇧: Aggregation of all CSS methods. This object bundles functions for class manipulation and style manipulation. It is exported to extend the jBase prototype centrally via Object.assign.
 * * 🇩🇪: Aggregation aller CSS-Methoden. Dieses Objekt bündelt die Funktionen für Klassen- und Style-Manipulation. Es wird exportiert, um via Object.assign den jBase-Prototyp zentral zu erweitern.
 */
exports.cssMethods = {
    ...classMethods,
    ...styleMethods
};
//# sourceMappingURL=index.js.map