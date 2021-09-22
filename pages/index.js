import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aiden Wood</title>
        <meta name="description" content="Design & Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Design & Dev with <a href="https://sitelabanalytics.com">Aiden Wood</a>
        </h1>

        <p className={styles.description}>
          Front-End Design thinking for {' '}
          <code className={styles.code}>Next.js</code> and <code className={styles.code}>CSS3</code>
        </p>

        <div className={styles.grid}>
          <a href="https://aw.sitelabanalytics.com" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Read more experiences and thoughts while working in the field.</p>
          </a>

          <a href="https://aw.sitelabanalytics.com/photos" className={styles.card}>
            <h2>Portfolio &rarr;</h2>
            <p>See my previous Design & Development products.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>SiteLab Analytics &rarr;</h2>
            <p>Check out what our team have been working on.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js or Wordpress site with us.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
