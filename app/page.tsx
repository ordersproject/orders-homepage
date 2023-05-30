import Footer from '@/components/footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="grow flex flex-col">
      <main className="grow">
        <div className="mt-8 lg:mt-20 relative">
          <div className="absolute mix-blend-lighten z-[-1] opacity-20 scale-125">
            <img src="/bg.png" alt="" className="" />
          </div>

          <div className="flex flex-col lg:flex-row py-4 gap-8 lg:gap-0">
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-5xl text-primary-orange font-bold">Orders.Exchange</h1>
              <p className="text-lg lg:text-2xl mt-4">The First Dex Built On Bitcoin For Bitcoin</p>
              <p className="text-sm lg:text-base mt-6">
                Orders.Exchange is a Decentralized Exchange for BRC-20 Totally built on Bitcoin. You can trade, list and
                inscribe your BRC-20
              </p>

              <div className="mt-4 lg:mt-16">
                <button className="text-primary-orange border rounded-xl px-8 py-4 border-primary-orange cursor-pointer">
                  Coming Soon
                </button>
              </div>
            </div>

            <div className="flex-1">
              <img
                src="/showcase.png"
                alt="showcase"
                className="object-contain lg:scale-125 origin-center lg:translate-x-40"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
