"use strict";
/**
 * @file src/browser.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Browser
 * @description
 * * 🇬🇧: Browser Entry Point. Attaches the jBase library and utilities to the global window object so they can be accessed via `$` or `jBase` in inline scripts.
 * * 🇩🇪: Browser-Einstiegspunkt. Hängt die jBase-Bibliothek und Utilities an das globale Window-Objekt an, damit sie über `$` oder `jBase` in Inline-Skripten verfügbar sind.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
/**
 * * 🇬🇧: Expose globals to the window object.
 * * 🇩🇪: Globale Variablen auf dem Window-Objekt setzen.
 */
window.$ = index_1.$;
window.jBase = index_1.jBase;
window.jB = index_1.jB;
window._jB = index_1._jB;
window.__jB = index_1.__jB;
window._jBase = index_1._jBase;
window.__jBase = index_1.__jBase;
window.http = index_1.http;
console.log("jBase initialized and ready!");
//# sourceMappingURL=browser.js.map