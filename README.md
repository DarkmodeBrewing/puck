# Puck

Puck is the client for Gremlin: a web app for chat and agent supervision, and a desktop app with scoped native capabilities. The web build also serves as the phone PWA.

This repository is an initial scaffold. The UI is a static shell; it does **not** connect to Gremlin, authenticate, launch agents, or invoke native device APIs yet.

## Workspace

| Path | Responsibility |
| --- | --- |
| `apps/web` | Browser build and phone PWA |
| `apps/desktop` | Tauri host and packaged React entry point |
| `packages/domain` | Platform-neutral types and execution states |
| `packages/capabilities` | Platform-neutral device capability contracts |
| `packages/ui` | Shared React application shell |
| `docs/architecture/overview.md` | Architecture and trust boundaries |

## Development

Requires Node.js 20.19+ and npm. Desktop builds also require the [Tauri 2 prerequisites](https://v2.tauri.app/start/prerequisites/), including Rust and platform dependencies.

```sh
npm install
npm run dev:web
npm run typecheck
npm run build:web
```

To run the desktop application after installing the native prerequisites:

```sh
npm run dev:desktop
```

The web and desktop builds compose the same React view. The browser uses a restricted browser capability adapter; desktop has a separate adapter boundary for future Tauri commands. No API endpoint or credential is embedded in the client. The manifest and SVG are placeholders; iPhone Home Screen behavior, icons, and offline policy still need device validation.

CI typechecks and builds both frontend entries, formats and builds the Tauri Rust host on Linux, runs CodeQL for TypeScript and Rust, and audits npm dependencies on pull requests. It does not yet build a distributable desktop package.

## Next vertical slice

Connect a Puck-facing Gremlin API for sign-in, conversations, and streamed chat. Authorize every operation on the server. Then add execution listing and a reconnectable terminal stream without exposing Runner administration to the browser.
