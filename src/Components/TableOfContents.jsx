"use client"

export const TableOfContents = ({ items, activeSection }) => {
  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <ul className="m-0 list-none">
        {items.map((item) => (
          <li key={item.id} className="mt-0 pt-2">
            <a
              href={`#${item.id}`}
              className={`inline-block no-underline transition-colors hover:text-foreground ${
                activeSection === item.id
                  ? "font-medium text-foreground text-gray-900 dark:text-gray-100"
                  : "text-muted-foreground text-gray-600 dark:text-gray-400"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="space-y-3 pt-6">
        <div className="space-y-3 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <div className="space-y-1">
            <p className="font-medium leading-none">Deploy your noodleUI app on Vercel</p>
            <p className="text-sm text-muted-foreground text-gray-600 dark:text-gray-400">
              Trusted by OpenAI, Sonos, Adobe, and more.
            </p>
          </div>
          <p className="text-sm text-muted-foreground text-gray-600 dark:text-gray-400">
            Vercel provides tools and infrastructure to deploy apps and features at scale.
          </p>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 px-3 w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
            Deploy Now
          </button>
        </div>
      </div>
    </div>
  )
}
