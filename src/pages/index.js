import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{color: 'white'}}>
          ThetaSecure Documentation
        </h1>
        <p className="hero__subtitle" style={{color: '#e0e0e0'}}>
          Complete guide for IT Admins and SOC Teams to configure, manage, and monitor
          your Identity & Access Management platform.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/overview">
            Get Started →
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/dashboard/operations"
            style={{color: 'white', borderColor: 'white', marginLeft: '1rem'}}>
            Explore Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: '🔐 Identity Management',
    description: 'Manage users, groups, roles, and permissions. Sync directories from Active Directory, LDAP, and cloud providers.',
  },
  {
    title: '🛡️ Security Dashboard',
    description: 'Monitor your identity health score, detect anomalies, track MFA adoption, and analyze privilege creep in real-time.',
  },
  {
    title: '📊 Operations Monitoring',
    description: 'Track authentication trends, app usage, directory sync health, and failed login attempts from a single pane of glass.',
  },
  {
    title: '🔑 Access Control',
    description: 'Configure network policies, manage RADIUS clients, and enforce device-based access with granular sign-in policies.',
  },
  {
    title: '🔒 Multi-Factor Authentication',
    description: 'Deploy MFA with TOTP, SMS, Email, and Push notifications. Monitor effectiveness by method and hour.',
  },
  {
    title: '📋 Audit & Compliance',
    description: 'Comprehensive audit logging for compliance requirements. Track every access event and administrative action.',
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')} style={{marginBottom: '2rem'}}>
      <div className="feature-card" style={{height: '100%'}}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="ThetaSecure IAM Documentation for IT Admins and SOC Teams">
      <HomepageHeader />
      <main>
        <section style={{padding: '3rem 0'}}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
