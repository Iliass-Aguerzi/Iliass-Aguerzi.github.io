import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Projects() {
    const projects = [
        {
            title: "AI Code Review Assistant",
            description: "Intelligent code quality analysis tool using machine learning to assess Python code security, performance and maintainability with balanced scoring and constructive feedback.",
            technologies: ["Python", "Scikit-learn", "Machine Learning", "AST Analysis", "Security Analysis", "Performance Optimization"],
            url: "https://github.com/Iliass-Aguerzi/AI_Code_Assistant",
            category: "AI & Machine Learning"
        },
        {
            title: "Text Summarizers",
            description: "Dual-approach text summarization system featuring AI-powered abstractive summarization using BART model and lightweight extractive summarization for different use cases.",
            technologies: ["Python", "Transformers", "BART Model", "NLP", "Abstractive Summarization", "Extractive Summarization"],
            url: "https://github.com/Iliass-Aguerzi/Text-summarizers",
            category: "AI & Machine Learning"
        },
        {
            title: "Topic Classifier",
            description: "AI-powered text categorization tool that uses zero-shot classification to organize text into topics and export results to Excel with confidence scores and summary statistics.",
            technologies: ["Python", "Zero-shot Learning", "BART-large-mnli", "Text Classification", "Excel Export", "Real-time Analysis"],
            url: "https://github.com/Iliass-Aguerzi/topic-classifier",
            category: "AI & Machine Learning"
        },
        {
            title: "EDF Processing Toolkit",
            description: "Advanced EDF file processing with AI-powered signal analysis, anomaly detection, biomedical signal classification for EEG and polysomnography data research.",
            technologies: ["Python", "Scikit-learn", "Signal Processing", "Biomedical AI", "EEG Analysis", "Machine Learning"],
            url: "https://github.com/Iliass-Aguerzi/EDF-Processing-Toolkit",
            category: "Data Analysis & Processing"
        },
        {
            title: "JSON Lens",
            description: "AI-powered JSON analysis tool for structural analysis, data quality assessment, intelligent insights with statistical anomaly detection and business domain recognition.",
            technologies: ["Python", "Data Analysis", "JSON Processing", "Statistical Analysis", "Anomaly Detection", "Excel Reporting"],
            url: "https://github.com/Iliass-Aguerzi/JSON_Lens",
            category: "Data Analysis & Processing"
        },
        {
            title: "Virtual File System",
            description: "Python implementation of an in-memory file system demonstrating core operating system concepts with directory management, file operations and built-in demo system.",
            technologies: ["Python", "File Systems", "Data Structures", "In-Memory Storage", "OS Concepts", "System Design"],
            url: "https://github.com/Iliass-Aguerzi/virtual-file-system",
            category: "Software Development"
        },
        {
            title: "Python Beginner Exercises",
            description: "Collection of fundamental Python programs demonstrating core programming concepts including string manipulation, mathematical operations and basic algorithms.",
            technologies: ["Python 3", "Algorithms", "String Manipulation", "Data Structures", "Beginner Programming", "Problem Solving"],
            url: "https://github.com/Iliass-Aguerzi/Python-beginner-exercises",
            category: "Learning & Practice"
        },
        {
            title: "Python Intermediate Exercises",
            description: "Intermediate Python projects building on fundamental concepts with password validation, game development, text processing and user interaction applications.",
            technologies: ["Python 3", "Game Development", "Text Processing", "Input Validation", "Intermediate Programming", "Data Analysis"],
            url: "https://github.com/Iliass-Aguerzi/python-intermediate-exercises",
            category: "Learning & Practice"
        }
    ];

    const projectsByCategory = projects.reduce((acc, project) => {
        if (!acc[project.category]) {
            acc[project.category] = [];
        }
        acc[project.category].push(project);
        return acc;
    }, {});

    return (
        <Layout
            title="All Projects - Iliass Aguerzi"
            description="Explore all my AI, data science and software development projects">

            <main style={{ padding: '2rem 0', minHeight: '100vh', background: 'var(--ifm-color-emphasis-100)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ color: '#57fff1ff', marginBottom: '1rem', fontSize: '2.5rem' }}>All Projects</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: '#4e95e6ff' }}>
                            Explore my complete portfolio of AI, data science and software development projects
                        </p>
                    </div>

                    {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
                        <section key={category} style={{ marginBottom: '3rem' }}>
                            <h2 style={{
                                color: '#0cd2f5ff',
                                borderBottom: '2px solid #49fff6ff',
                                paddingBottom: '0.5rem',
                                marginBottom: '1.5rem',
                                fontSize: '1.8rem'
                            }}>
                                {category}
                            </h2>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                            }}>
                                {categoryProjects.map((project, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            background: 'white',
                                            border: '1px solid #eaeaea',
                                            borderRadius: '12px',
                                            padding: '2rem',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            gap: '2rem',
                                            minHeight: '180px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                                        }}
                                    >
                                        <div style={{
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%'
                                        }}>
                                            <h3 style={{
                                                color: 'var(--ifm-color-primary)',
                                                marginBottom: '1rem',
                                                fontSize: '1.4rem'
                                            }}>
                                                {project.title}
                                            </h3>

                                            <p style={{
                                                flex: 1,
                                                marginBottom: '1.5rem',
                                                lineHeight: '1.6',
                                                color: '#000000',
                                                fontSize: '0.95rem'
                                            }}>
                                                {project.description}
                                            </p>

                                            <div style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '0.5rem'
                                            }}>
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        style={{
                                                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                                            color: 'white',
                                                            padding: '0.3rem 0.8rem',
                                                            borderRadius: '20px',
                                                            fontSize: '0.75rem',
                                                            fontWeight: '500'
                                                        }}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minWidth: '140px'
                                        }}>
                                            <Link
                                                href={project.url}
                                                target="_blank"
                                                style={{
                                                    display: 'inline-block',
                                                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                                    color: 'white',
                                                    padding: '0.8rem 1.5rem',
                                                    borderRadius: '25px',
                                                    textDecoration: 'none',
                                                    fontWeight: '600',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.3s ease',
                                                    textAlign: 'center',
                                                    whiteSpace: 'nowrap'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-2px)';
                                                    e.target.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0)';
                                                    e.target.style.boxShadow = 'none';
                                                }}>
                                                View on GitHub
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}

                    <div style={{
                        textAlign: 'center',
                        marginTop: '4rem',
                        paddingTop: '3rem',
                        borderTop: '1px solid #eaeaea'
                    }}>
                        <Link
                            href="/"
                            style={{
                                display: 'inline-block',
                                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                color: 'white',
                                padding: '0.8rem 2rem',
                                borderRadius: '25px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                fontSize: '1rem'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}>
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

