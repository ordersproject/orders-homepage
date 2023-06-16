'use client'

export default function Footer() {
  function toTwitter() {
    window.open('https://twitter.com/OrdersExchange', '_blank')
  }

  function toDiscord() {
    window.open('https://discord.gg/3Qq8QWQ', '_blank')
  }

  function toGithub() {
    window.open('https://github.com/ordersproject/orders-mvp', '_blank')
  }

  return (
    <footer className="flex justify-between items-center py-6">
      {/* left */}
      <div className="space-y-1">
        <img src="/logo.png" alt="Orders Logo" height="33" width="147" />
        <div className="text-xs lg:text-sm lg:flex lg:gap-4 text-primary-gray/50">
          <p>Orders.Exchange@2023</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>

      {/* right */}
      <div className="flex gap-x-2 lg:gap-x-4">
        <button
          title="twitter"
          onClick={toTwitter}
          className="hover:shadow-md hover:shadow-amber-500/50 rounded-full p-1"
        >
          <img src="/icon_twitter.png" alt="Twitter" className="h-8 w-8 lg:h-10 lg:w-10 " />
        </button>
        <button
          title="discord"
          onClick={toDiscord}
          className="hover:shadow-md hover:shadow-amber-500/50 rounded-full p-1"
        >
          <img src="/icon_discord.png" alt="Discord" className="h-8 w-8 lg:h-10 lg:w-10" />
        </button>
        <button
          title="github"
          onClick={toGithub}
          className="hover:shadow-md hover:shadow-amber-500/50 rounded-full p-1"
        >
          <img src="/icon_github.png" alt="Telegram" className="h-8 w-8 lg:h-10 lg:w-10" />
        </button>
      </div>
    </footer>
  )
}
