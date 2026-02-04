/**
 * @file src/modules/dom/states.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category DOM
 * @description
 * * 🇬🇧: Methods for checking element states (e.g., visibility, checked, disabled).
 * * 🇩🇪: Methoden zur Prüfung von Element-Zuständen (z.B. Sichtbarkeit, checked, disabled).
 * @requires ../../core
 * * 🇬🇧: Depends on the core jBase class for type definitions.
 * * 🇩🇪: Hängt von der Core-jBase-Klasse für Typ-Definitionen ab.
 */
import { jBase } from '../../core';
/**
 * * 🇬🇧: Gets or sets the 'checked' state of checkboxes and radio buttons.
 * * 🇩🇪: Liest oder setzt den 'checked'-Status von Checkboxen und Radiobuttons.
 * @param state
 * * 🇬🇧: (Optional) `true` to check, `false` to uncheck. If undefined, acts as a getter.
 * * 🇩🇪: (Optional) `true` zum Anhaken, `false` zum Deselektieren. Wenn nicht angegeben, wird gelesen.
 * @returns
 * * 🇬🇧: Boolean (getter) or the current jBase instance (setter).
 * * 🇩🇪: Boolean (Getter) oder die aktuelle jBase-Instanz (Setter).
 */
export declare function checked(this: jBase, state?: boolean): boolean | jBase;
/**
 * * 🇬🇧: Gets or sets the 'selected' state of `<option>` elements.
 * * 🇩🇪: Liest oder setzt den 'selected'-Status von `<option>`-Elementen.
 * @param state
 * * 🇬🇧: (Optional) `true` to select, `false` to deselect. If undefined, acts as a getter.
 * * 🇩🇪: (Optional) `true` zum Auswählen, `false` zum Abwählen. Wenn nicht angegeben, wird gelesen.
 * @returns
 * * 🇬🇧: Boolean (getter) or the current jBase instance (setter).
 * * 🇩🇪: Boolean (Getter) oder die aktuelle jBase-Instanz (Setter).
 */
export declare function selected(this: jBase, state?: boolean): boolean | jBase;
/**
 * * 🇬🇧: Enables or disables form fields and buttons. Additionally toggles the CSS class `.disabled`.
 * * 🇩🇪: Aktiviert oder deaktiviert Formularfelder und Buttons. Toggelt zusätzlich die CSS-Klasse `.disabled`.
 * @param state
 * * 🇬🇧: (Optional) `true` to disable, `false` to enable. If undefined, acts as a getter.
 * * 🇩🇪: (Optional) `true` zum Deaktivieren, `false` zum Aktivieren. Wenn nicht angegeben, wird gelesen.
 * @returns
 * * 🇬🇧: Boolean (getter) or the current jBase instance (setter).
 * * 🇩🇪: Boolean (Getter) oder die aktuelle jBase-Instanz (Setter).
 */
export declare function disabled(this: jBase, state?: boolean): boolean | jBase;
//# sourceMappingURL=states.d.ts.map