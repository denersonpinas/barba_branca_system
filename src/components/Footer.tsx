import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="min-h-full flex h-16 justify-center items-center px-4 bg-orange-800 sm:px-6 lg:px-8 lg:max-w-full">
      <div className="flex-shrink-0">
        <Image
          width={32}
          height={32}
          className="h-8 w-8"
          src="https://tailwindui.com/plus/img/logos/mark.svg"
          alt="Your Company"
        />
      </div>
    </footer>
  )
}
