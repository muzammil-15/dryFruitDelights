import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Link from "next/link";


export function HomePage() {
  return (
    <div className="bg-white flex flex-col items-stretch pb-5">
      <Hero/>
      <Products/>
      <About/>
      
      <div id="gallery" className="text-slate-900 text-5xl font-extrabold leading-normal self-center whitespace-nowrap mt-24 max-md:text-4xl max-md:mt-10">
        Gallery
      </div>
      <div className="text-slate-900 text-center text-lg leading-7 self-center max-w-[856px] mt-5 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. In pellentesque semper ac dui
        vulputate bibendum sit faucibus. At sed nunc integer netus semper
        consequat. gravida.
      </div>
      <div className="w-full mt-7 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/76663b2c99594d304a463e547b48beca2518f78ae846f7e4e2d12ed65fdfbf03?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76663b2c99594d304a463e547b48beca2518f78ae846f7e4e2d12ed65fdfbf03?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76663b2c99594d304a463e547b48beca2518f78ae846f7e4e2d12ed65fdfbf03?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76663b2c99594d304a463e547b48beca2518f78ae846f7e4e2d12ed65fdfbf03?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76663b2c99594d304a463e547b48beca2518f78ae846f7e4e2d12ed65fdfbf03?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76663b2c99594d304a463e547b48beca2518f78ae846f7e4e2d12ed65fdfbf03?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76663b2c99594d304a463e547b48beca2518f78ae846f7e4e2d12ed65fdfbf03?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76663b2c99594d304a463e547b48beca2518f78ae846f7e4e2d12ed65fdfbf03?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&"
                className="aspect-[1.03] object-contain object-center w-full shadow-md overflow-hidden max-md:max-w-full"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dbb38b714560d5962f2ca147e76dc22bbdaa8e2d2763f5920e850cd876692e07?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbb38b714560d5962f2ca147e76dc22bbdaa8e2d2763f5920e850cd876692e07?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbb38b714560d5962f2ca147e76dc22bbdaa8e2d2763f5920e850cd876692e07?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbb38b714560d5962f2ca147e76dc22bbdaa8e2d2763f5920e850cd876692e07?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbb38b714560d5962f2ca147e76dc22bbdaa8e2d2763f5920e850cd876692e07?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbb38b714560d5962f2ca147e76dc22bbdaa8e2d2763f5920e850cd876692e07?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbb38b714560d5962f2ca147e76dc22bbdaa8e2d2763f5920e850cd876692e07?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbb38b714560d5962f2ca147e76dc22bbdaa8e2d2763f5920e850cd876692e07?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&"
                className="aspect-[1.42] object-contain object-center w-full shadow-md overflow-hidden max-md:max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0f74c5a58becb76ef80d06735a1ee8fc5de8e84e1ed1be377be7084d2d580c1?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f74c5a58becb76ef80d06735a1ee8fc5de8e84e1ed1be377be7084d2d580c1?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f74c5a58becb76ef80d06735a1ee8fc5de8e84e1ed1be377be7084d2d580c1?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f74c5a58becb76ef80d06735a1ee8fc5de8e84e1ed1be377be7084d2d580c1?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f74c5a58becb76ef80d06735a1ee8fc5de8e84e1ed1be377be7084d2d580c1?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f74c5a58becb76ef80d06735a1ee8fc5de8e84e1ed1be377be7084d2d580c1?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f74c5a58becb76ef80d06735a1ee8fc5de8e84e1ed1be377be7084d2d580c1?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f74c5a58becb76ef80d06735a1ee8fc5de8e84e1ed1be377be7084d2d580c1?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&"
              className="aspect-[0.6] object-contain object-center w-full shadow-md overflow-hidden grow max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e744d7290d46bbfe027a2f62a202682173296ba11284d87844b09b60ca0e0b65?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e744d7290d46bbfe027a2f62a202682173296ba11284d87844b09b60ca0e0b65?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e744d7290d46bbfe027a2f62a202682173296ba11284d87844b09b60ca0e0b65?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e744d7290d46bbfe027a2f62a202682173296ba11284d87844b09b60ca0e0b65?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e744d7290d46bbfe027a2f62a202682173296ba11284d87844b09b60ca0e0b65?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e744d7290d46bbfe027a2f62a202682173296ba11284d87844b09b60ca0e0b65?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e744d7290d46bbfe027a2f62a202682173296ba11284d87844b09b60ca0e0b65?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e744d7290d46bbfe027a2f62a202682173296ba11284d87844b09b60ca0e0b65?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&"
                className="aspect-square object-contain object-center w-full shadow-md overflow-hidden max-md:max-w-full"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/77f0889c4f9450b1cab1f0090b859b71d5c7a2107ca1479f14856b4c51bc3c19?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f0889c4f9450b1cab1f0090b859b71d5c7a2107ca1479f14856b4c51bc3c19?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f0889c4f9450b1cab1f0090b859b71d5c7a2107ca1479f14856b4c51bc3c19?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f0889c4f9450b1cab1f0090b859b71d5c7a2107ca1479f14856b4c51bc3c19?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f0889c4f9450b1cab1f0090b859b71d5c7a2107ca1479f14856b4c51bc3c19?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f0889c4f9450b1cab1f0090b859b71d5c7a2107ca1479f14856b4c51bc3c19?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f0889c4f9450b1cab1f0090b859b71d5c7a2107ca1479f14856b4c51bc3c19?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f0889c4f9450b1cab1f0090b859b71d5c7a2107ca1479f14856b4c51bc3c19?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&"
                className="aspect-[1.38] object-contain object-center w-full shadow-md overflow-hidden max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}


export default HomePage;