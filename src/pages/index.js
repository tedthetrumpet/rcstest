import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={require('@site/static/img/rcs_logo.png').default} />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/handbook/">
          Programme Handbook
        </Link>
        </div>

        <h4>September 2025</h4>
        <p><em>Disclaimer: this is a pilot project to investigate the practicality of fully online programme handbooks. This is <strong>not</strong> an actual handbook!.
          </em></p>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Handbook for Artist Diploma in Music at the Royal Conservatoire of Scotland">
      <HomepageHeader />
    </Layout>
  );
}
