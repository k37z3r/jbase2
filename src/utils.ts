/**
 * @file src/utils.ts
 * @version 2.0.2
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Utilities
 * @description
 * * General utility functions and helpers (e.g., debounce, throttle, type checks).
 */

/**
 * * Creates a throttled version of the provided function. The function is executed at most once within the specified time interval, regardless of how often it is called.
 * Use case: Performance optimization for high-frequency events (e.g., Scroll, Resize, Mousemove).
 * Einsatzgebiet: Performance-Optimierung bei hochfrequenten Events (z.B. Scroll, Resize, Mousemove).
 * @template T
 * * The type of the original function.
 * @param func
 * * The function to be throttled.
 * @param limit
 * * The time interval in milliseconds during which at most one execution is permitted.
 * @returns
 * * A new function that throttles calls.
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return function(this: any, ...args: Parameters<T>) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * * Creates a debounced version of the provided function. Execution is delayed until `delay` milliseconds have passed since the last invocation.
 * Use case: Waiting for user input (e.g., Live Search, Validation) to avoid unnecessary calculations.
 * Einsatzgebiet: Warten auf Benutzereingaben (z.B. Live-Suche, Validierung) zur Vermeidung unnötiger Berechnungen.
 * @template T
 * * The type of the original function.
 * @param func
 * * The function to be debounced.
 * @param delay
 * * The waiting time in milliseconds after the last call.
 * @returns
 * * A new function that delays execution.
 */
export function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    return function(this: any, ...args: Parameters<T>) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * * Checks if the code is running in a browser environment.
 * * Verifies the existence of `window` and `requestAnimationFrame` to ensure animation support.
 * * Used to safely guard DOM-dependent logic (Effects, Events) during Server-Side Rendering (SSR).
 * @returns
 * * `true` if running in a browser with animation support, otherwise `false`.
 */
export function isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.requestAnimationFrame !== 'undefined';
}