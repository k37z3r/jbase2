/**
 * @file src/modules/effects/vertical.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * 🇬🇧: Methods for vertical sliding effects (slideDown, slideUp, slideToggle).
 * * 🇩🇪: Methoden für vertikale Slide-Effekte (slideDown, slideUp, slideToggle).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
import { jBase } from '../../core';
/**
 * * 🇬🇧: Configuration options for vertical slide effects.
 * * 🇩🇪: Konfigurationsoptionen für vertikale Slide-Effekte.
 */
export interface SlideVerticalOptions {
    duration?: number;
    displayType?: string;
}
/**
 * * 🇬🇧: Slides an element down (animates height from 0 to auto). Sets `display` property and animates height.
 * * 🇩🇪: Fährt ein Element vertikal aus (animiert die Höhe von 0 auf auto). Setzt `display` und animiert die Höhe.
 * @param options
 * * 🇬🇧: Animation duration and display type.
 * * 🇩🇪: Dauer der Animation und Display-Typ.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function slideDown(this: jBase, options?: SlideVerticalOptions): jBase;
/**
 * * 🇬🇧: Slides an element up (animates height to 0). Sets `display: none` after animation.
 * * 🇩🇪: Fährt ein Element vertikal ein (animiert die Höhe auf 0). Setzt am Ende `display: none`.
 * @param options
 * * 🇬🇧: Animation duration.
 * * 🇩🇪: Dauer der Animation.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function slideUp(this: jBase, options?: SlideVerticalOptions): jBase;
/**
 * * 🇬🇧: Toggles between slideDown and slideUp based on the display state.
 * * 🇩🇪: Wechselt zwischen slideDown und slideUp basierend auf dem display-Status.
 * @param options
 * * 🇬🇧: Animation duration.
 * * 🇩🇪: Dauer der Animation.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function slideToggleBox(this: jBase, options?: SlideVerticalOptions): jBase;
//# sourceMappingURL=vertical.d.ts.map