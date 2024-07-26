"use client";

import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({ subsets: ["latin"], weight: "500" });

const Home = () => {
  return (
    <section>
      <h1>Next.js Complete course by Huxn webdev</h1>
    </section>
  );
};

export default Home;
