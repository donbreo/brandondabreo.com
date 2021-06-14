import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../styles/projects.module.css'

export default function Projects(props) {
  return (
    <Layout >
      <Head>
        <title>{`Projects`}</title>
      </Head>
      <h1>My Work</h1>
      <div className={styles.single_project_wrapper}>
        <h2 className={styles.project_heading}>InterPay</h2>
        <div className={styles.project_content}>
          <Link href={`https://www.intermiles.com/intermiles-mobile-app`}>
            <a>{`InterPay`}</a>
          </Link>
          <div>Apr 2021 – Present</div>
          <div>WebView app section for InterPay</div>
          <p>Built primarily with React along with propritary InterMiles UI components. Mobile focused UI tailored for cross platform support.</p>

        </div>
      </div>
      <div className={styles.single_project_wrapper}>
        <h2 className={styles.project_heading}>Rotana</h2>
        <div className={styles.project_content}>
          <Link href={`http://redeem.rotana.com`}>
            <a>{`redeem.rotana.com`}</a>
          </Link>
          <div>Mar 2021 – Present</div>
          <div>Loyalty program for rotana.com</div>
          <p>Built primarily with React along with Material UI components. Server Side api routed through plain NodeJS middleware.</p>

        </div>
      </div>
      <div className={styles.single_project_wrapper}>
        <h2 className={styles.project_heading}>Interbook</h2>
        <div className={styles.project_content}>
          <Link href={`http://redeem.rotana.com`}>
            <a>{`redeem.rotana.com`}</a>
          </Link>
          <div>Dec 2020 – Mar 2021</div>
          <div>Interbook Online Hotel Booking</div>
          <p>NextJS based web application re-designed from scratch for better overall performance. Lazy loading, dynamic imports, cached results and mobile optimised UI for better SEO.</p>
        </div>
      </div>
      <div className={styles.single_project_wrapper}>
        <h2 className={styles.project_heading}>Digistores</h2>
        <div className={styles.project_content}>
          <Link href={`https://digistores.intermiles.com/`}>
            <a>{`redeem.rotana.com`}</a>
          </Link>
          <div>Dec 2020 – Mar 2021</div>
          <div>Interbook Online Hotel Booking</div>
          <p>NextJS based Giftcard Loyalty Program web application for intermiles designed from scratch. Mainly worked on the payment and checkout sections and created a dynamic semi-cached sitemap.</p>
        </div>
      </div>
    </Layout>
  )
}

