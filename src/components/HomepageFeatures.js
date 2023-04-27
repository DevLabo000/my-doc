import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "研修",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: <p>必要な知識や技術を学ぶための研修資料</p>,
    link: "/intro",
  },
  {
    title: "ドキュメンテーション",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <p>
        ドキュメントを作成するためのガイドラインや必要な成果物、作成の目的を記載
      </p>
    ),
  },
  {
    title: "ナレッジベース",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: <p>知識、情報の集約化</p>,
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
