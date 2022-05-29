import React from "react";
import Link from "next/link";
import MainLayout from "../../layouts/MainLayout";

function Contact() {
  return (
    <MainLayout>
      <h1 className={'title'}>
        Go to <Link href="/">Home from Contact</Link>
      </h1>
    </MainLayout>
  );
}

export default Contact;
