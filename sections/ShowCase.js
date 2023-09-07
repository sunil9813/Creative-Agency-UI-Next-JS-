import { showcase } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const ShowCase = () => {
  return (
    <>
      <section className="showcase bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Analysis" /> <br />
            <br />
            <Title title="Cryptocurrency Analysis data." className="title-bg" />
          </div>
          <br />
          <br />
          <div className="grid-3">
            {showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
          <div className="py btn">
            <button className="secondary-button">More is coming</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
