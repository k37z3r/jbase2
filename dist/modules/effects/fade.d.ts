/**
 * @file src/modules/effects/fade.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Effects
 * @description
 * * 🇬🇧: Methods for fading elements in and out (fadeIn, fadeOut, fadeToggle).
 * * 🇩🇪: Methoden zum Ein- und Ausblenden von Elementen (fadeIn, fadeOut, fadeToggle).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
import { jBase } from '../../core';
/**
 * * 🇬🇧: Configuration options for fade effects.
 * * 🇩🇪: Konfigurationsoptionen für Fade-Effekte.
 */
export interface FadeOptions {
    duration?: number;
    displayType?: string;
}
/**
 * * 🇬🇧: Fades an element in (Opacity 0 -> 1).
 * * 🇩🇪: Blendet ein Element sanft ein (Opacity 0 -> 1).
 * @param options
 * * 🇬🇧: Duration in ms (default: 300) and display type (default: 'block').
 * * 🇩🇪: Dauer in ms (Standard: 300) und display-Typ (Standard: 'block').
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function fadeIn(this: jBase, options?: FadeOptions): jBase;
/**
 * * 🇬🇧: Fades an element out (Opacity 1 -> 0) and sets display: none afterwards.
 * * 🇩🇪: Blendet ein Element sanft aus (Opacity 1 -> 0) und setzt danach display: none.
 * @param options
 * * 🇬🇧: Duration in ms (default: 300).
 * * 🇩🇪: Dauer in ms (Standard: 300).
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function fadeOut(this: jBase, options?: FadeOptions): jBase;
/**
 * * 🇬🇧: Toggles between fadeIn and fadeOut based on the current display state.
 * * 🇩🇪: Wechselt zwischen fadeIn und fadeOut basierend auf dem aktuellen display-Status.
 * @param options
 * * 🇬🇧: Animation options.
 * * 🇩🇪: Animations-Optionen.
 * @returns
 * * 🇬🇧: The current jBase instance.
 * * 🇩🇪: Die aktuelle jBase-Instanz.
 */
export declare function fadeToggle(this: jBase, options?: FadeOptions): jBase;
//# sourceMappingURL=fade.d.ts.map