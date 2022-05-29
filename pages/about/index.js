import React from "react";
import Link from "next/link";
import MainLayout from "../../layouts/MainLayout";
import DarkLayout from "../../layouts/DarkLayout";

function About() {
  return (
    <>
      <h1 className={"title"}>
        Go to <Link href="/contact">Contact</Link>
      </h1>
    </>
  );
}
About.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
export default About;
