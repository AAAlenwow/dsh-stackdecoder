/**
 * dsh-stackdecoder — standalone DSH plugin host entry.
 *
 * The tool definitions live in ./index.js (which exports `tools`);
 * this shim exposes the host contract (name / inject / apply) and
 * registers every tool at apply() time. Zero npm dependencies.
 */
import { tools } from "./index.js";

export const name = "dsh-stackdecoder";
export const inject = ["tools"];

export async function apply(ctx) {
  for (const t of tools) ctx.tools.register(t);
  ctx.logger?.info?.(
    `dsh-stackdecoder: registered ${tools.length} tools (${tools.map((t) => t.name).join(", ")})`
  );
}
