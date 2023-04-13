import Head from "next/head";
import Image from "next/image";
import Avatar from "../../public/images/Mulher.svg";

import { GetServerSideProps } from "next";

import styles from "./home.module.scss";
import { SubscribeButton } from "@/components/SubscribeButton";
import { stripe } from "@/services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome!</span>

          <h1>
            News about the <span>React</span>world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src={Avatar} alt="ig.news" width={334} height={520} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1MwUTPBc7ooLZ7Df9wCJS5u9", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount! / 100),
  };

  return {
    props: {
      product,
    },
  };
};
