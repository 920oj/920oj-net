import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '自己紹介',
    Svg: require('@site/static/img/undraw_profile_details_re_ch9r.svg').default,
    description: (
      <>
        職歴や保有スキル等を紹介しています。
      </>
    ),
  },
  {
    title: 'ドキュメント',
    Svg: require('@site/static/img/undraw_developer_activity_re_39tg.svg').default,
    description: (
      <>
        主に技術関連の備忘録やメモ等を掲載しています。
      </>
    ),
  },
  {
    title: 'ブログ',
    Svg: require('@site/static/img/undraw_cat_8fgf.svg').default,
    description: (
      <>
        技術以外の記事を掲載しています。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageContents() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>Site Contents</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
