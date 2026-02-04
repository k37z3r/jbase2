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
import { $, jBase, http, jB, _jB, __jB, _jBase, __jBase } from './index';
/**
 * * 🇬🇧: TypeScript declaration merging to extend the global Window interface.
 * * 🇩🇪: TypeScript Declaration Merging zur Erweiterung des globalen Window-Interfaces.
 */
declare global {
    interface Window {
        $: typeof $;
        jBase: typeof jBase;
        jB: typeof jB;
        _jB: typeof _jB;
        __jB: typeof __jB;
        _jBase: typeof _jBase;
        __jBase: typeof __jBase;
        http: typeof http;
    }
}
//# sourceMappingURL=browser.d.ts.map