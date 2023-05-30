'use client'

import Image from 'next/image'

export default function Footer() {
  function toTwitter() {
    window.open('https://twitter.com/OrdersExchange', '_blank')
  }

  function toDiscord() {
    window.open('https://discord.gg/3Qq8QWQ', '_blank')
  }

  function toTelegram() {
    window.open('https://t.me/OrdersExchange', '_blank')
  }

  return (
    <footer className="flex justify-between items-center py-6">
      {/* left */}
      <div className="space-y-1">
        <Image src="/logo.png" alt="Orders Logo" height="33" width="147" />
        <div className="text-xs lg:text-sm lg:flex lg:gap-4">
          <p>Orders.Exchange@2023</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>

      {/* right */}
      <div className="flex gap-x-2 lg:gap-x-6">
        <button title="twitter" onClick={toTwitter}>
          <img src="/icon_twitter.png" alt="Twitter" className="h-8 w-8 lg:h-10 lg:w-10" />
        </button>
        <button title="discord" onClick={toDiscord}>
          <img src="/icon_discord.png" alt="Discord" className="h-8 w-8 lg:h-10 lg:w-10" />
        </button>
        <button title="telegram" onClick={toTelegram}>
          <img src="/icon_telegram.png" alt="Telegram" className="h-8 w-8 lg:h-10 lg:w-10" />
        </button>
      </div>
    </footer>
  )
}
