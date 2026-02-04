/**
 * @file build.js
 * @version 2.0.1
 * @since 2.0.0
 * @license GPL-3.0-or-later
 * @copyright Sven Minio 2026
 * @author Sven Minio <https://sven-minio.de>
 * @category Build
 * @description
 * * 🇬🇧: Build automation script using esbuild. Handles bundling, minification, and output generation.
 * * 🇩🇪: Build-Automatisierungs-Skript mit esbuild. Behandelt Bundling, Minifizierung und Ausgabe-Generierung.
 * @requires esbuild
 * * 🇬🇧: High-performance JavaScript bundler.
 * * 🇩🇪: Hochleistungs-JavaScript-Bundler.
 * @requires ./package.json
 * * 🇬🇧: Project configuration and versioning.
 * * 🇩🇪: Projekt-Konfiguration und Versionierung.
 */

const esbuild = require('esbuild');
const pkg = require('./package.json');
const banner = `/**
 * ${pkg.name} - ${pkg.description}
 * @version ${pkg.version}
 * @homepage ${pkg.homepage}
 * @author ${pkg.author}
 * @license ${pkg.license}
 * @copyright ${new Date().getFullYear()} ${pkg.author}
 */`;

const baseConfig = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    banner: { js: banner },
    logLevel: 'info',
    platform: 'neutral',
};

const browserBuild = {
    ...baseConfig,
    entryPoints: ['src/browser.ts'],
    format: 'iife',
    outfile: 'dist/jbase.browser.js',
    legalComments: 'inline',
    platform: 'browser',
};

const browserMinBuild = {
    ...browserBuild,
    outfile: 'dist/jbase.min.js',
    minify: true,
    legalComments: 'none',
};

const esmBuild = {
    ...baseConfig,
    format: 'esm',
    outfile: 'dist/index.mjs',
};

const cjsBuild = {
    ...baseConfig,
    format: 'cjs',
    outfile: 'dist/index.cjs',
    platform: 'node',
};

Promise.all([
    esbuild.build(browserBuild),
    esbuild.build(browserMinBuild),
    esbuild.build(esmBuild),
    esbuild.build(cjsBuild),
]).then(() => {
    console.log('\x1b[32m%s\x1b[0m', `*********************************************************************`);
    console.log('\x1b[32m%s\x1b[0m', `🗊: jBase v${pkg.version}: A modern micro-framework for the web.`);
    console.log('\x1b[32m%s\x1b[0m', `🗊: A modern micro-framework for the web: jBase offers the familiar`);
    console.log('\x1b[32m%s\x1b[0m', `🗊: syntax of classic DOM libraries, but without their baggage. Fully`);
    console.log('\x1b[32m%s\x1b[0m', `🗊: typed, modular, and optimized for modern browser engines.`);
    console.log('\x1b[32m%s\x1b[0m', `Ⓒ: Copyright (C) ${new Date().getFullYear()} ${pkg.author}`);
    console.log('\x1b[32m%s\x1b[0m', `§: Released under the ${pkg.license} License.`);
    console.log('\x1b[32m%s\x1b[0m', `*********************************************************************`);
}).catch((error) => {
    console.error('\x1b[31m%s\x1b[0m', '❌ Build failed:', error);
    process.exit(1);
});