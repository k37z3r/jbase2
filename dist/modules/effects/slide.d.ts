/**
 * @file src/modules/effects/slide.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * 🇬🇧: Methods for horizontal sliding effects (slideIn, slideOut, slideToggle).
 * * 🇩🇪: Methoden für horizontale Slide-Effekte (slideIn, slideOut, slideToggle).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
import { jBase } from '../../core';
/**
 * * 🇬🇧: Configuration interface for slide methods.
 * * 🇩🇪: Konfigurations-Interface für die Slide-Methoden.
 */
export interface SlideOptions {
    direction?: 'left' | 'right';
    duration?: number;
}
/**
 * * 🇬🇧: Slides an element (e.g., a menu) into view. Sets `transform: translateX(0)`.
 * * 🇩🇪: Schiebt ein Element (z.B. ein Menü) in den sichtbaren Bereich. Setzt `transform: translateX(0)`.
 * @param options
 * * 🇬🇧: Direction ('left'|'right') and duration in ms.
 * * 🇩🇪: Richtung ('left'|'right') und Dauer in ms.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function slideIn(this: jBase, options?: SlideOptions): jBase;
/**
 * * 🇬🇧: Slides an element out of view.
 * * 🇩🇪: Schiebt ein Element aus dem sichtbaren Bereich heraus.
 * @param options
 * * 🇬🇧: Direction ('left'|'right') and duration in ms.
 * * 🇩🇪: Richtung ('left'|'right') und Dauer in ms.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function slideOut(this: jBase, options?: SlideOptions): jBase;
/**
 * * 🇬🇧: Toggles between slideIn and slideOut based on the current state.
 * * 🇩🇪: Wechselt zwischen slideIn und slideOut basierend auf dem aktuellen Status.
 * @param options
 * * 🇬🇧: Direction ('left'|'right') and duration in ms.
 * * 🇩🇪: Richtung ('left'|'right') und Dauer in ms.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function slideToggle(this: jBase, options?: SlideOptions): jBase;
//# sourceMappingURL=slide.d.ts.map