import React from "react";
import Link from "next/link";
import Head from "next/head";

function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>
        Go to <Link href="/">Home</Link>
      </h1>
    </div>
  );
}

export default About;
