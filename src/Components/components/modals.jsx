"use client"

import { useState } from "react"
import { X, Check, Copy, AlertTriangle } from "lucide-react"

function ModalShell({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-full max-w-lg mx-4 bg-card rounded-2xl border border-border shadow-xl">
        {children}
      </div>
    </div>
  );
}

// Example usage:
const modalVariants = [
  {
    id: "basic",
    title: "Basic Modal",
    description: "Centered modal with title and actions",
    component: function BasicModal() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm"
          >
            Open Modal
          </button>

          <ModalShell open={open} onClose={() => setOpen(false)}>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">Basic Modal</h3>
                <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-muted transition-colors">
                  <X size={16} />
                </button>
              </div>
              <p className="mt-4 text-muted-foreground">Short modal body text to explain something.</p>
              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-muted transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
                >
                  Confirm
                </button>
              </div>
            </div>
          </ModalShell>
        </>
      )
    },
    code: `<button onClick={() => setOpen(true)}>Open Modal</button>
<ModalShell open={open} onClose={() => setOpen(false)}>
  …content…
</ModalShell>`,
  },
  {
    id: "alert",
    title: "Alert Dialog",
    description: "Destructive confirmation dialog",
    component: function AlertDialog() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg text-sm"
          >
            Delete
          </button>

          <ModalShell open={open} onClose={() => setOpen(false)}>
            <div className="p-6">
              <AlertTriangle size={32} className="text-destructive mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-center mb-2">Delete item?</h3>
              <p className="text-muted-foreground text-center">
                This action cannot be undone. Are you sure you want to proceed?
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-muted transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-sm rounded-lg bg-destructive text-destructive-foreground hover:opacity-90 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </ModalShell>
        </>
      )
    },
    code: `// alert dialog markup similar to BasicModal`,
  },
  {
    id: "fullscreen",
    title: "Fullscreen Modal",
    description: "Takes entire screen, good for mobile UX",
    component: function FullscreenModal() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <button onClick={() => setOpen(true)} className="px-4 py-2 bg-muted rounded-lg text-sm">
            Open Fullscreen
          </button>

          {open && (
            <div className="fixed inset-0 z-50 flex flex-col bg-background">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold">Fullscreen Modal</h3>
                <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-muted transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <p className="text-muted-foreground">
                  Scrollable fullscreen content. Perfect for forms, wizards, or detailed views on mobile.
                </p>
              </div>
            </div>
          )}
        </>
      )
    },
    code: `// fullscreen modal markup`,
  },
]

export function ModalComponents() {
  const [copied, setCopied] = useState(null)
  const [showCode, setShowCode] = useState({})

  const copyCode = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(id)
      setTimeout(() => setCopied(null), 1500)
    } catch {
      /* ignore */
    }
  }

  const toggleCode = (id) => {
    setShowCode((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Modals</h1>
        <p className="text-xl text-muted-foreground">Examples of dialog, alert, and fullscreen modals.</p>
      </div>

      <div className="grid gap-8">
        {modalVariants.map((variant) => (
          <div key={variant.id} className="border border-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{variant.title}</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleCode(variant.id)}
                    className="px-3 py-1 text-sm bg-muted hover:bg-accent rounded-lg transition-colors"
                  >
                    {showCode[variant.id] ? "Show Preview" : "Show Code"}
                  </button>
                  {showCode[variant.id] && (
                    <button
                      onClick={() => copyCode(variant.code, variant.id)}
                      className="flex items-center gap-2 px-3 py-1 text-sm bg-muted hover:bg-accent rounded-lg transition-colors"
                    >
                      {copied === variant.id ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      {copied === variant.id ? "Copied!" : "Copy"}
                    </button>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground">{variant.description}</p>
            </div>

            {showCode[variant.id] ? (
              <div className="p-4 bg-gray-900 text-gray-100">
                <pre className="text-sm overflow-x-auto">
                  <code>{variant.code}</code>
                </pre>
              </div>
            ) : (
              <div className="p-8 flex justify-center">{variant.component()}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


