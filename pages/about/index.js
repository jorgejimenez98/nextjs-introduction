import React from "react";
import Link from "next/link";
import MainLayout from "../../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <h1 className={"title"}>
        Go to <Link href="/contact">Contact</Link>
      </h1>
    </MainLayout>
  );
}

export default About;
