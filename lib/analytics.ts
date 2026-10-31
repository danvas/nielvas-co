declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Sends a custom event to Google Analytics (loaded in _app.tsx). Does nothing if it's
// blocked, and only logs in development so local testing stays out of the stats.
export function track(event: string, params?: Record<string, string>) {
  if (process.env.NODE_ENV !== "production") {
    console.debug("[track]", event, params ?? {})
    return
  }
  window.gtag?.("event", event, params)
}

// Reports uncaught errors as `js_error` events. Returns a cleanup function.
export function trackErrors() {
  const report = (message: string) => track("js_error", { message: message.slice(0, 100) })
  const onError = (e: ErrorEvent) => report(e.message)
  const onRejection = (e: PromiseRejectionEvent) => report(String(e.reason))

  window.addEventListener("error", onError)
  window.addEventListener("unhandledrejection", onRejection)
  return () => {
    window.removeEventListener("error", onError)
    window.removeEventListener("unhandledrejection", onRejection)
  }
}
