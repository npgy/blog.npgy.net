import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

// const FeatureList = [
//   {
//     title: 'My Developer Career',
//     Image: require('../../../static/img/code.svg').default,
//     description: (
//       <>
//         Currently employed as a Software Developer, I work with the ancient and new
//         maintaining COBOL code on IBM mainframes, DB2 SQL, and C#. I am very interested
//         in Docker, Kubernetes, and efficient modern code that is easily deployable and
//         maintainable.
//       </>
//     ),
//   },
//   {
//     title: 'Polychora Records',
//     Image: require('../../../static/img/code.svg').default,
//     //(
// <ThemedImage
//   alt="Polychora Logo"
//   sources={{
//     light: useBaseUrl('../../../static/img/polychora-lightmode.png'),
//     dark: useBaseUrl('../../../static/img/polychora-darkmode.png'),
//   }}
// />
//     // ),
//     description: (
//       <>
//         Since 2016 I have been curating music and posting it online.
//         This ultimately ended up turning into a record label.
//         I run it passionately, showing the world artists who don't
//         have a big audience, helping them focus on making the music,
//         and not worrying about the logistics of distribution and admin.
//         You can check it out <a target="_blank" href="https://music.polychora.co/">here.</a>
//       </>
//     ),
//   },
//   {
//     title: 'extra',
//     Image: require('../../../static/img/logo.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({Image, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Image className={styles.featureImg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">I'm Currently Working On...</h2>
        <div className="row">
          {/* {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} */}

          <div className={clsx('col col--4')}>
            <div className="text--center">
              <ThemedImage className={styles.featureSvg} role="img"
                alt="Code Icon"
                sources={{
                  light: useBaseUrl('/img/code-light.svg'),
                  dark: useBaseUrl('/img/code-dark.svg'),
                }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>My Developer Career</h3>
              <p>Currently employed as a Software Developer, I work with the ancient and new
                maintaining COBOL code on IBM mainframes, DB2 SQL, and C#. I am very interested
                in Docker, Kubernetes, and efficient modern code that is easily deployable and
                maintainable.</p>
            </div>
          </div>

          <div className={clsx('col col--4')}>
            <div className="text--center">
              <ThemedImage className={styles.featureImg} role="img"
                alt="Polychora Logo"
                sources={{
                  light: useBaseUrl('/img/polychora-light.webp'),
                  dark: useBaseUrl('/img/polychora-dark.webp'),
                }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Polychora Records</h3>
              <p>Since 2016 I have been curating music and posting it online.
                This ultimately ended up turning into a record label.
                I run it passionately, showing the world artists who don't
                have a big audience, helping them focus on making the music,
                and not worrying about the logistics of distribution and admin.
                You can check it out <a target="_blank" href="https://music.polychora.co/">here.</a></p>
            </div>
          </div>

          <div className={clsx('col col--4')}>
            <div className="text--center">
            <ThemedImage className={styles.featureImg} role="img"
                alt="Polychora Logo"
                sources={{
                  light: useBaseUrl('/img/chillsynth-light.webp'),
                  dark: useBaseUrl('/img/chillsynth-dark.webp'),
                }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>ChillSynth</h3>
              <p>Founded in 2018, ChillSynth is a community of retro inspired electronic instrumental musicians.
                I run this community primarily on Discord where we host regular feedback streams and other events.
                Come join us! <a target="_blank" href="https://discord.gg/chillsynth">https://discord.gg/chillsynth</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
