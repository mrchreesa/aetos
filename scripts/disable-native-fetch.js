// Next 11's bundled image tooling (squoosh) loads its .wasm files with
// `fetch` whenever a global fetch exists. Node 18+ ships one, which makes
// `next build` fail with "Failed to parse URL from .../mozjpeg_node_dec.wasm".
// Removing the global before Next starts makes squoosh read the files from
// disk instead. Loaded through NODE_OPTIONS so worker processes get it too.
// Safe to delete once the project is on Next 12.3+.
delete globalThis.fetch;
