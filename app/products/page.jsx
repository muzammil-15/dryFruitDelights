import Link from "next/link";
import { products } from "../../components/utils";

const Products = () => {
  return (
    <div
      id="products"
      className=" flex w-full flex-col items-stretch  pt-32 pb-12 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5"
    >
      <div className="text-slate-900 text-5xl font-extrabold leading-normal self-center whitespace-nowrap max-md:text-4xl">
        Our Product
      </div>
      <div className="text-slate-900 text-center text-lg leading-7 self-center max-w-[856px] mt-8 max-md:max-w-full">
        Delight in goodness with our top-notch dry fruits at Naturally
        Nutritious. From tasty apricots to crunchy almonds, our handpicked
        selection is a blend of flavor and health. Sourced globally, it&apos;s a
        treat that&apos;s both delicious and nutritious. Elevate your snacking –
        indulge in joy and vitality with us!
      </div>
      <div className="my-20 w-full  flex justify-center items-center gap-5 flex-wrap ">
        {products.map((product, ind) => (
          <div
            className="w-[300px] h-[300px] p-4 bg-white text-black rounded-lg  border border-orange-3
             overflow-hidden"
            key={ind}
          >
            <img
              src={`${product?.image1}`}
              className="w-full h-2/3 object-cover"
              width={300}
              height={200}
              alt="product"
            />
            <div className="flex justify-between w-full items-center mt-3">
              <div className="text-xl font-semibold text-orange-800">
                {product.title}
              </div>
              <div className="text-sm font-semibold text-orange-900">
                Rs: {product.price}
              </div>
            </div>
            <div className="flex justify-end items-center pb-2">
              <Link
                href={`/products/${product.slug}`}
                className="text-white text-sm font-medium leading-normal bg-orange-700 justify-center mt-6 px-6 py-2 rounded-[6px] "
              >
                See details
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Products