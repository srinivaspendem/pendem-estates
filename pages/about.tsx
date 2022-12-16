import React from "react";
// next imports
import Link from "next/link";
// layouts
import { DefaultLayout } from "layouts";
// components
import Page from "@components/page";
// constants
import { META_DESCRIPTION } from "@constants/page";

const HomePage = () => {
  const meta = {
    title: "Pendem | About",
    description: META_DESCRIPTION
  };

  return (
    <div>
      <Page meta={meta}>
        <DefaultLayout>
          <div className="h-full overflow-auto">
          </div>
        </DefaultLayout>
      </Page>
    </div>
  );
};

export default HomePage;
