import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 shadow-lg bg-white flex w-full items-stretch justify-between gap-5 px-20 py-3 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c6f2f3a78c69bfbb0f18d1f98a7470e23cf1b554bebbba2869d14ac7ef3c62d?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c6f2f3a78c69bfbb0f18d1f98a7470e23cf1b554bebbba2869d14ac7ef3c62d?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c6f2f3a78c69bfbb0f18d1f98a7470e23cf1b554bebbba2869d14ac7ef3c62d?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c6f2f3a78c69bfbb0f18d1f98a7470e23cf1b554bebbba2869d14ac7ef3c62d?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c6f2f3a78c69bfbb0f18d1f98a7470e23cf1b554bebbba2869d14ac7ef3c62d?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c6f2f3a78c69bfbb0f18d1f98a7470e23cf1b554bebbba2869d14ac7ef3c62d?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c6f2f3a78c69bfbb0f18d1f98a7470e23cf1b554bebbba2869d14ac7ef3c62d?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c6f2f3a78c69bfbb0f18d1f98a7470e23cf1b554bebbba2869d14ac7ef3c62d?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&"
            className="aspect-[1.89] object-contain object-center w-[104px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="self-center flex items-start justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <Link href={"/"} className="text-red-700 text-lg lg:text-xl font-medium leading-normal whitespace-nowrap">
                Home
              </Link>
              <div className="bg-red-700 shrink-0 h-0.5 mt-1" />
            </div>
            <Link href={"#products"} className="text-slate-900 text-lg lg:text-xl font-medium leading-normal">
              Our Product
            </Link>
            <Link href={"#about"} className="text-slate-900 text-lg lg:text-xl font-medium leading-normal self-start">
              About Us
            </Link>
            
            <Link href={"#gallery"} className="text-slate-900 text-lg lg:text-xl font-medium leading-normal self-start">
              Gallery
            </Link>
          </div>
        </div>
  )
}

export default Navbar