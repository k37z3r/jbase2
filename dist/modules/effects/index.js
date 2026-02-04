"use strict";
/**
 * @file src/modules/effects/index.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * 🇬🇧: Central entry point for visual effects. Aggregates slide, fade, and vertical animation modules.
 * * 🇩🇪: Zentraler Einstiegspunkt für visuelle Effekte. Aggregiert Module für Slide-, Fade- und vertikale Animationen.
 * @requires ./slide
 * * 🇬🇧: Horizontal slide effects (slideIn, slideOut).
 * * 🇩🇪: Horizontale Slide-Effekte (slideIn, slideOut).
 * @requires ./vertical
 * * 🇬🇧: Vertical slide effects / Accordion (slideDown, slideUp).
 * * 🇩🇪: Vertikale Slide-Effekte / Akkordeon (slideDown, slideUp).
 * @requires ./fade
 * * 🇬🇧: Opacity fade effects (fadeIn, fadeOut).
 * * 🇩🇪: Opazitäts-Fade-Effekte (fadeIn, fadeOut).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.effectMethods = void 0;
const tslib_1 = require("tslib");
const slideMethods = tslib_1.__importStar(require("./slide"));
const verticalMethods = tslib_1.__importStar(require("./vertical"));
const fadeMethods = tslib_1.__importStar(require("./fade"));
/**
 * * 🇬🇧: Aggregation of all visual effect methods. Bundles sliding and fading animations to extend the jBase prototype.
 * * 🇩🇪: Aggregation aller visuellen Effekt-Methoden. Bündelt Slide- und Fade-Animationen zur Erweiterung des jBase-Prototyps.
 */
exports.effectMethods = {
    ...slideMethods,
    ...verticalMethods,
    ...fadeMethods
};
//# sourceMappingURL=index.js.map