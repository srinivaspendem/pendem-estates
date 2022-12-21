import React from "react";
// next imports
import Link from "next/link";
// layouts
import { DefaultLayout } from "layouts";
// components
import Page from "@components/page";
import Hero from "@components/landing/HeroComponent";
// constants
import { META_DESCRIPTION } from "@constants/page";

const HomePage = () => {
  const meta = {
    title: "Pendem | Home",
    description: META_DESCRIPTION
  };

  return (
    <div>
      <Page meta={meta}>
        <DefaultLayout>
          <div className="h-full">
            <Hero />
            <div className="h-96"></div>
          </div>
        </DefaultLayout>
      </Page>
    </div>
  );
};

export default HomePage;
