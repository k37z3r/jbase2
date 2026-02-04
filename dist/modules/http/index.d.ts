/**
 * @file src/modules/http/index.ts
 * @version 2.0.0
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category HTTP
 * @description
 * * 🇬🇧: Central entry point for HTTP requests. Aggregates GET and POST methods.
 * * 🇩🇪: Zentraler Einstiegspunkt für HTTP-Anfragen. Aggregiert GET- und POST-Methoden.
 * @requires ./get
 * * 🇬🇧: HTTP GET methods (get, getText).
 * * 🇩🇪: HTTP GET-Methoden (get, getText).
 * @requires ./post
 * * 🇬🇧: HTTP POST methods.
 * * 🇩🇪: HTTP POST-Methoden.
 */
/**
 * * 🇬🇧: The central HTTP client of the framework. Aggregates all HTTP methods (GET, POST, etc.) into a unified interface. Acts as a wrapper around the native `fetch` API to simplify JSON parsing, error handling, and typing.
 * * 🇩🇪: Der zentrale HTTP-Client des Frameworks. Aggregiert alle HTTP-Methoden (GET, POST, etc.) zu einer einheitlichen Schnittstelle. Fungiert als Wrapper um die native `fetch` API, um JSON-Parsing, Error-Handling und Typisierung zu vereinfachen.
 * @example
 * // Get data / Daten abrufen
 * const data = await http.get<UserData>('/api/user/1');
 *
 * // Send data / Daten senden
 * await http.post('/api/login', { username: '...', password: '...' });
 *
 * // Load HTML / HTML laden
 * const html = await http.getText('/templates/modal.html');
 */
export declare const http: {
    post<T>(url: string, body?: any): Promise<T>;
    get<T>(url: string): Promise<T>;
    getText(url: string): Promise<string>;
};
//# sourceMappingURL=index.d.ts.map