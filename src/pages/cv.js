import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function CV() {
    return (
        <Layout
            title="Curriculum Vitae - Iliass Aguerzi"
            description="Iliass Aguerzi - Computer Science Student specializing in AI & Software Development">
            <div style={{ padding: '2rem 0', minHeight: '100vh', background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid #667eea', paddingBottom: '2rem' }}>
                        <h1 style={{ color: '#2c3e50', marginBottom: '0.5rem', fontSize: '2.5rem' }}>Iliass Aguerzi</h1>
                        <h2 style={{ color: '#7f8c8d', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'normal' }}>
                            Computer Science Student - AI & Software Development
                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                            <span style={{ color: '#5d6d7e' }}>📧 iliassaguerzi@outlook.com</span>
                            <Link
                                href="https://github.com/Iliass-Aguerzi"
                                target="_blank"
                                style={{
                                    color: '#5d6d7e',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#667eea';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = '#5d6d7e';
                                }}>
                                🌐 github.com/Iliass-Aguerzi
                            </Link>
                        </div>
                    </div>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ color: '#2c3e50', borderBottom: '1px solid #eaeaea', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                            PROFILE
                        </h3>
                        <p style={{ lineHeight: '1.6', color: '#5d6d7e' }}>
                            Passionate Computer Science student who thrives on turning complex ideas into functional software.
                            With a solid foundation in AI and full stack development, I enjoy building intelligent systems that
                            solve real world problems.
                        </p>
                        <p style={{ lineHeight: '1.6', color: '#5d6d7e' }}>
                            I am a collaborative team player who believes the best results come from shared effort and diverse
                            perspectives. I am eager to contribute my solid foundation to a team while being immersed in an
                            environment that challenges me to learn new technologies and deepen my expertise. For me, professional
                            growth and team success are two sides of the same coin.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ color: '#2c3e50', borderBottom: '1px solid #eaeaea', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                            EDUCATION
                        </h3>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>China University of Petroleum Beijing</h4>
                            <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '0.5rem' }}>Bachelor in Computer Science and Technology</p>
                            <p style={{ color: '#5d6d7e', marginBottom: '0.5rem' }}>Expected Graduation: July 2026</p>
                            <p style={{ color: '#5d6d7e', marginBottom: '0.5rem' }}>Relevant Coursework: Data Structures, C Language Programming, Algorithm Design & Analysis, Operating Systems, Artificial Intelligence, Discrete Mathematics, Assembly Language</p>
                            <p style={{ color: '#5d6d7e' }}>Program: English Taught Curriculum</p>
                        </div>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ color: '#2c3e50', borderBottom: '1px solid #eaeaea', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                            SKILLS
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                            <div>
                                <h5 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Programming Languages</h5>
                                <p style={{ color: '#5d6d7e' }}>Python, Java, C, JavaScript, SQL, Assembly</p>
                            </div>
                            <div>
                                <h5 style={{ color: '#667eea', marginBottom: '0.5rem' }}>AI & Machine Learning</h5>
                                <p style={{ color: '#5d6d7e' }}>Hugging Face Transformers, BART Model, Natural Language Processing (NLP), Zero-Shot Classification, Scikit-learn</p>
                            </div>
                            <div>
                                <h5 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Frameworks & Libraries</h5>
                                <p style={{ color: '#5d6d7e' }}>React, Node.js, Express, Pandas, Matplotlib</p>
                            </div>
                            <div>
                                <h5 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Databases & Tools</h5>
                                <p style={{ color: '#5d6d7e' }}>MongoDB, Git, Linux</p>
                            </div>
                            <div>
                                <h5 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Languages</h5>
                                <p style={{ color: '#5d6d7e' }}>English (Fluent), Chinese (Intermediate), French (Fluent), Arabic (Fluent)</p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ color: '#2c3e50', borderBottom: '1px solid #eaeaea', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                            TECHNICAL PROJECTS & EXPERIENCE
                        </h3>
                        <ul style={{ color: '#5d6d7e', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Designed a hybrid CNN-LSTM model for EEG sleep stage classification, applying deep learning to sequential biomedical data.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Developed an NLP text classification system using Hugging Face's BART model, applying zero-shot learning to practical AI tasks.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Engineered a virtual file system in Python, implementing core OS features for file management and data storage.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Built automated text summarization tools using Python and NLP libraries to efficiently condense long documents.</li>
                            <li>Created AI-powered code review and data analysis tools demonstrating practical machine learning applications.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ color: '#2c3e50', borderBottom: '1px solid #eaeaea', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                            AWARDS & CERTIFICATIONS
                        </h3>
                        <div>
                            <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Stride to the Future Entrepreneurship Training Camp</h4>
                            <p style={{ color: '#5d6d7e', fontStyle: 'italic', marginBottom: '0.5rem' }}>Changping District Government, Beijing | 2023</p>
                            <p style={{ color: '#5d6d7e' }}>
                                Selected for a competitive program, gaining hands on experience in market analysis and
                                investor pitching while collaborating effectively in a cross-cultural team.
                            </p>
                        </div>
                    </section>

                    <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid #eaeaea', paddingTop: '2rem' }}>
                        <a
                            href="/"
                            style={{
                                display: 'inline-block',
                                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                color: 'white',
                                padding: '0.8rem 1.5rem',
                                borderRadius: '25px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                transition: 'all 0.3s ease'
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
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
