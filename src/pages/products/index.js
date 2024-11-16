import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-5 pb-20 sm:py-10 px-20"
    >
      <div className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="self-center mb-10">
          <p className="text-4xl font-bold">Product</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {product.map((v) => (
            <Link
              key={v.id}
              href={`/products/${v.id}`}
              className="flex flex-col gap-3 items-center hover:scale-105 mix-blend-multiply md:transform-none"
            >
              <Image
                className="bg-transparent rounded-lg w-[180px] mix-blend-multiply"
                src={v.image}
                alt={v.title}
                width={180}
                height={38}
                priority
              />
              <div>
                <p className="font-semibold text-sm">{v.title}</p>
                <p className="text-xs">${v.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const product = await res.json();

  return {
    props: { product },
  };
}
