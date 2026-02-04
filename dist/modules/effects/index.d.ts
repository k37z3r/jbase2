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
import * as slideMethods from './slide';
import * as verticalMethods from './vertical';
import * as fadeMethods from './fade';
/**
 * * 🇬🇧: Aggregation of all visual effect methods. Bundles sliding and fading animations to extend the jBase prototype.
 * * 🇩🇪: Aggregation aller visuellen Effekt-Methoden. Bündelt Slide- und Fade-Animationen zur Erweiterung des jBase-Prototyps.
 */
export declare const effectMethods: {
    fadeIn(this: import("../..").JBaseClass, options?: fadeMethods.FadeOptions): import("../..").JBaseClass;
    fadeOut(this: import("../..").JBaseClass, options?: fadeMethods.FadeOptions): import("../..").JBaseClass;
    fadeToggle(this: import("../..").JBaseClass, options?: fadeMethods.FadeOptions): import("../..").JBaseClass;
    slideDown(this: import("../..").JBaseClass, options?: verticalMethods.SlideVerticalOptions): import("../..").JBaseClass;
    slideUp(this: import("../..").JBaseClass, options?: verticalMethods.SlideVerticalOptions): import("../..").JBaseClass;
    slideToggleBox(this: import("../..").JBaseClass, options?: verticalMethods.SlideVerticalOptions): import("../..").JBaseClass;
    slideIn(this: import("../..").JBaseClass, options?: slideMethods.SlideOptions): import("../..").JBaseClass;
    slideOut(this: import("../..").JBaseClass, options?: slideMethods.SlideOptions): import("../..").JBaseClass;
    slideToggle(this: import("../..").JBaseClass, options?: slideMethods.SlideOptions): import("../..").JBaseClass;
};
//# sourceMappingURL=index.d.ts.map