import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Profile Image */}
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          margin: '0 auto 1rem',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold'
        }}>
          IA
        </div>

        <Heading as="h1" className="hero__title">
          Iliass Aguerzi
        </Heading>
        <p className="hero__subtitle">Data Scientist & AI Developer</p>

        {/* Buttons - Using Docusaurus button classes properly */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/projects">
            View My Projects
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/cv"
            style={{ marginLeft: '1rem' }}>
            Curriculum Vitae
          </Link>
        </div>
      </div>
    </header>
  );
}

// Project Card Component
function ProjectCard({ title, description, technologies, projectUrl }) {
  return (
    <div className="card" style={{
      margin: '0',
      padding: '1.5rem',
      textAlign: 'left',
      border: '1px solid #eaeaea',
      borderRadius: '10px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '320px' // Added minimum height for consistent rectangles
    }}>
      <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ flex: 1, marginBottom: '1.5rem', color: 'var(--ifm-font-color-base)' }}>{description}</p>
      <div style={{ marginBottom: '1.5rem' }}>
        {technologies.map((tech, index) => (
          <span
            key={index}
            style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              padding: '0.2rem 0.6rem',
              borderRadius: '15px',
              fontSize: '0.7rem',
              marginRight: '0.3rem',
              display: 'inline-block',
              marginBottom: '0.3rem'
            }}>
            {tech}
          </span>
        ))}
      </div>
      <Link
        className="button button--primary"
        href={projectUrl}
        target="_blank"
        style={{ marginTop: 'auto' }}>
        View Project
      </Link>
    </div>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: "AI Code Review Assistant",
      description: "Intelligent code quality analysis tool using machine learning to assess Python code security, performance and maintainability.",
      technologies: ["Python", "Scikit-learn", "Machine Learning", "AST Analysis"],
      url: "https://github.com/Iliass-Aguerzi/AI_Code_Assistant"
    },
    {
      title: "JSON Lens",
      description: "AI powered JSON analysis tool for structural analysis, data quality assessment and intelligent insights.",
      technologies: ["Python", "Data Analysis", "Automation", "Excel Reporting"],
      url: "https://github.com/Iliass-Aguerzi/JSON_Lens"
    },
    {
      title: "EDF Processing Toolkit",
      description: "Advanced EDF file processing with AI powered signal analysis, anomaly detection and biomedical signal classification.",
      technologies: ["Python", "Scikit-learn", "Signal Processing", "Biomedical AI"],
      url: "https://github.com/Iliass-Aguerzi/EDF-Processing-Toolkit"
    },
    {
      title: "Text Summarizers",
      description: "AI powered and simple text summarization tools using BART model and extractive methods for automatic text summarization.",
      technologies: ["Python", "Transformers", "BART Model", "NLP"],
      url: "https://github.com/Iliass-Aguerzi/Text-summarizers"
    },
  ];

  return (
    <section style={{ padding: '4rem 0', textAlign: 'center' }}>
      <div className="container">
        <h2>Featured Projects</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
          Practical AI solutions and data analysis tools that solve real-world problems with clean code and robust implementations.
        </p>

        {/* Strict 2x2 Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // Always 2 columns
          gap: '2rem',
          marginBottom: '4rem', // Increased margin to separate from button
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              projectUrl={project.url}
            />
          ))}
        </div>

        {/* More Projects Button with proper spacing */}
        <div style={{
          textAlign: 'center',
          marginTop: '2rem', // Added top margin to separate from grid
          paddingTop: '1rem' // Added padding for extra space
        }}>
          <Link
            className="button button--primary button--lg"
            to="/projects">
            More Fun Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section style={{
      padding: '4rem 0',
      background: 'var(--ifm-color-emphasis-100)',
      textAlign: 'center'
    }}>
      <div className="container">
        <h2>About Me</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
          I specialize in creating practical AI solutions and data analysis tools that solve real-world problems.
          My projects focus on clean code, robust machine learning implementations and user friendly interfaces.
          Currently exploring advanced applications of machine learning in code analysis and biomedical signal processing.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link
            className="button button--outline button--secondary"
            href="https://github.com/Iliass-Aguerzi"
            target="_blank">
            Explore My GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Iliass Aguerzi - Portfolio"
      description="Data Scientist & AI Developer specializing in machine learning, data analysis and intelligent applications">
      <HomepageHeader />
      <main>
        <ProjectsSection />
        <AboutSection />
      </main>
    </Layout>
  );
}