"use client"

import { useState } from "react"
import { Copy, Check, CheckCircle, X } from "lucide-react"

const pricingVariants = [
  {
    id: "simple",
    title: "Simple Pricing",
    description: "Clean three-tier pricing layout",
    component: () => (
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          {
            name: "Starter",
            price: "$9",
            period: "/month",
            features: ["Up to 5 projects", "Basic support", "1GB storage"],
            popular: false,
          },
          {
            name: "Pro",
            price: "$29",
            period: "/month",
            features: ["Unlimited projects", "Priority support", "10GB storage", "Advanced analytics"],
            popular: true,
          },
          {
            name: "Enterprise",
            price: "$99",
            period: "/month",
            features: ["Everything in Pro", "Custom integrations", "Unlimited storage", "24/7 phone support"],
            popular: false,
          },
        ].map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl border ${
              plan.popular ? "border-primary bg-primary/5 scale-105" : "border-border bg-card"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-lg font-medium transition ${
                plan.popular ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-muted hover:bg-accent"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    ),
    code: `<div className="grid md:grid-cols-3 gap-6">
  {plans.map((plan, index) => (
    <div key={index} className={\`p-6 rounded-2xl border \${plan.popular ? 'border-primary bg-primary/5' : 'border-border bg-card'}\`}>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-3xl font-bold">{plan.price}</span>
          <span className="text-muted-foreground ml-1">{plan.period}</span>
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <CheckCircle size={16} className="text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full py-3 rounded-lg font-medium bg-primary text-primary-foreground">
        Get Started
      </button>
    </div>
  ))}
</div>`,
  },
  {
    id: "comparison",
    title: "Feature Comparison",
    description: "Detailed feature comparison table",
    component: () => (
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4">
            <h3 className="font-semibold text-lg">Features</h3>
          </div>
          {["Basic", "Pro", "Enterprise"].map((plan, index) => (
            <div key={index} className="p-4 text-center border border-border rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{plan}</h3>
              <div className="text-2xl font-bold">
                {["$9", "$29", "$99"][index]}
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {[
            { feature: "Projects", basic: "5", pro: "Unlimited", enterprise: "Unlimited" },
            { feature: "Storage", basic: "1GB", pro: "10GB", enterprise: "Unlimited" },
            { feature: "Support", basic: "Email", pro: "Priority", enterprise: "24/7 Phone" },
            { feature: "Analytics", basic: false, pro: true, enterprise: true },
            { feature: "Custom Domain", basic: false, pro: true, enterprise: true },
            { feature: "API Access", basic: false, pro: false, enterprise: true },
          ].map((row, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b border-border">
              <div className="p-2 font-medium">{row.feature}</div>
              <div className="p-2 text-center">
                {typeof row.basic === "boolean" ? (
                  row.basic ? (
                    <CheckCircle size={16} className="text-green-500 mx-auto" />
                  ) : (
                    <X size={16} className="text-muted-foreground mx-auto" />
                  )
                ) : (
                  row.basic
                )}
              </div>
              <div className="p-2 text-center">
                {typeof row.pro === "boolean" ? (
                  row.pro ? (
                    <CheckCircle size={16} className="text-green-500 mx-auto" />
                  ) : (
                    <X size={16} className="text-muted-foreground mx-auto" />
                  )
                ) : (
                  row.pro
                )}
              </div>
              <div className="p-2 text-center">
                {typeof row.enterprise === "boolean" ? (
                  row.enterprise ? (
                    <CheckCircle size={16} className="text-green-500 mx-auto" />
                  ) : (
                    <X size={16} className="text-muted-foreground mx-auto" />
                  )
                ) : (
                  row.enterprise
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    code: `<div className="grid grid-cols-4 gap-4">
  <div className="p-4"><h3 className="font-semibold">Features</h3></div>
  {plans.map(plan => (
    <div className="p-4 text-center border rounded-lg">
      <h3 className="font-semibold">{plan.name}</h3>
      <div className="text-2xl font-bold">{plan.price}</div>
    </div>
  ))}
</div>`,
  },
]

export function PricingComponents() {
  const [copied, setCopied] = useState(null)
  const [showCode, setShowCode] = useState({})

  const copyCode = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const toggleCode = (id) => {
    setShowCode((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Pricing Tables</h1>
        <p className="text-xl text-muted-foreground">
          Professional pricing sections to showcase your plans and features.
        </p>
      </div>

      <div className="grid gap-8">
        {pricingVariants.map((variant) => (
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
              <div className="p-8">{variant.component()}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


