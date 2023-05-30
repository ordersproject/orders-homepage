import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6">
      <Image src="/logo.png" alt="Orders Logo" height="33" width="147" />
    </header>
  )
}
