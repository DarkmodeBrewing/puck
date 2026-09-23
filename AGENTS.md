# Working in Puck

Read `docs/architecture/overview.md` before changing a boundary or adding a feature. Keep changes small and reviewable. This repository is a scaffold; avoid describing placeholders as working Gremlin integration.

## Architecture

- `apps/web` is both Gremlin's browser chat and the phone PWA. `apps/desktop` packages local React assets in Tauri and provides the native host. Never load the remote web deployment in a privileged Tauri webview.
- Put platform-neutral types and state in `packages/domain`, capability contracts in `packages/capabilities`, and reusable React views in `packages/ui`. Keep those packages free of Tauri, Node, and direct browser globals. Supply adapters from each app.
- Reuse chat and other views where behavior matches; let desktop and phone navigation and terminal input differ.
- Prime owns memory and identity rules. Runner Manager owns containers, PTYs, execution lifecycle, credentials, and cleanup. Puck owns presentation, client connection state, and explicit local device actions.
- Closing a view or disconnecting must never close an execution. An execution's status, container status, and client connection status are separate.

## Security boundaries

- Treat browser code, chat output, terminal output, and model-generated local action requests as untrusted input. UI visibility is never authorization.
- The Puck-facing API must authorize every operation for the principal, namespace, and execution. Keep Prime internals and Runner administration private. Validate authenticated WebSocket upgrades and Origin; do not expose reusable server credentials to clients.
- Native features must be narrow, validated commands with explicit user consent for sensitive actions. Do not add generic shell execution or unrestricted filesystem access to a webview.
- Keep secrets out of source, frontend bundles, logs, and fixtures. Prefer secure server sessions for web and OS-backed credential storage for desktop. Do not cache chat history, screenshots, recordings, or terminal output in the service worker by default.
- Capture, review, and send are distinct steps for screenshots, camera, and microphone workflows. Never silently transmit local media or device events.

## Workflow and quality

- Work on a branch. Do not commit directly to `main` for feature work. Record protocol and trust-boundary changes in the architecture document.
- Use TypeScript strict mode and descriptive names. Avoid `any` for network payloads; validate them at the boundary before trusting them.
- For a UI or shared-contract change, run `npm run typecheck` and `npm run build:web`. For native changes, run the relevant Rust checks once the toolchain is available. State what could not be verified.
- Add focused tests for meaningful behavior or regression risks, especially authorization, state transitions, and reconnection. Avoid tests that merely repeat a type or implementation.
- Keep dependencies minimal. Do not add an SDK, state library, or device plugin before a concrete use case needs it.
- Never merge, publish, deploy, or alter production Gremlin settings as part of a scaffold task without a specific request.
