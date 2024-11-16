"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

export default function Product({ product }) {
  return (
    <>
      <Head>
        <title>Product | {product.title}</title>
        <meta property="og:title" content="Product by id" key="title" />
      </Head>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        }}
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-5 pb-20 sm:p-20 "
      >
        <Link href={`/products`} className="justify-self-start">
          <FaArrowLeft />
        </Link>
        <div className="flex flex-col gap-4 row-start-2 items-center sm:items-start w-1/2">
          <div className="self-center mb-5">
            <p className="text-4xl font-bold text-center">{product.title}</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="bg-transparent rounded-lg w-[180px] h-[220px] mb-5 mix-blend-multiply"
              src={product.image}
              alt={product.title}
              width={180}
              height={38}
              priority
            />
            <div className="mt-5 flex flex-col gap-2 text-lg">
              <p className="capitalize">
                <b>Category:</b> {product.category}
              </p>
              <p>
                <b>Description:</b> {product.description}
              </p>
              <p>
                <b>Price:</b> ${product.price}
              </p>
              <p>
                <b>Rating:</b> {product.rating.rate}
              </p>
              <p>
                <b>Count:</b> {product.rating.count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const product = await res.json();

  return {
    props: { product },
  };
}
