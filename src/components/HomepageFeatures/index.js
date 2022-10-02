import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'My Developer Career',
    Image: require('../../../static/img/code.svg').default,
    description: (
      <>
        Currently employed as a Software Developer, I work with the ancient and new
        maintaining COBOL code on IBM mainframes, DB2 SQL, and C#. I am very interested
        in Docker, Kubernetes, and efficient modern code that is easily deployable and
        maintainable.
      </>
    ),
  },
  {
    title: 'Polychora Records',
    Image: (
    <ThemedImage
      alt="Polychora Logo"
      sources={{
        light: useBaseUrl('../../../static/img/polychora-lightmode.png'),
        dark: useBaseUrl('../../../static/img/polychora-darkmode.png'),
      }}
    />
    ),
    description: (
      <>
        Since 2016 I have been curating music and posting it online.
        This ultimately ended up turning into a record label.
        I run it passionately, showing the world artists who don't
        have a big audience, helping them focus on making the music,
        and not worrying about the logistics of distribution and admin.
        You can check it out <a href="https://music.polychora.co/">here.</a>
      </>
    ),
  },
  {
    title: 'extra',
    Image: require('../../../static/img/logo.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Image className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>I'm Currently Working On..</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
