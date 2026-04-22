import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Proyecto Comunicación Asertiva">
      <main className={styles.main}>
        <h1 className={styles.title}>📘 Proyecto 2 Comunicación Asertiva</h1>
        <p className={styles.subtitle}>Explora cada fase del proyecto</p>

        <div className={styles.cards}>

          {/* Ruta corregida: sin el /docs/ y con barra al final */}
          <a href="/recoleccion-informacion/" className={`${styles.card} ${styles.green}`}>
            <h2>📁 Recolección</h2>
            <p>Preguntas, evidencias y justificación</p>
          </a>

          {/* Ruta corregida: sin el /docs/ y con barra al final */}
          <a href="/analisis/" className={`${styles.card} ${styles.blue}`}>
            <h2>📊 Análisis</h2>
            <p>Requisitos y flujo del negocio</p>
          </a>

          {/* Ruta corregida: sin el /docs/ y con barra al final */}
          <a href="/propuesta/" className={`${styles.card} ${styles.red}`}>
            <h2>🚀 Propuesta</h2>
            <p>Solución, pitch y decisiones</p>
          </a>

        </div>
      </main>
    </Layout>
  );
}