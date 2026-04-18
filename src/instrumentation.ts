export async function register() {
  // No runtime instrumentation is configured.
}

export function onRequestError(error: Error) {
  console.error("Unhandled request error:", error);
}
