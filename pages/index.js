import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Navbar from '../components/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
export default function Home({ allPostsData }) {
  return (
    <>
      <Navbar />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <p>I have a civil engineering background but recently i was looking to become a professional software developer. I already have a good knowledge in javaScript, nodejs, python, Jupiter notebooks and django  because I joined a full-stack software development intensive bootcamp with ASAC. But I still want to have a wider knowledge in the programming field. My next step is to find the suitable environment to sharpen my skills. In fact, my background was really helpful to develop the skills that were required in the tech field so it wasn't a hard step to switch between them. so basically this is who i am.</p>
        </section><br/><br/>
        <Form>
          <Form.Row>
            <Form.Label>Rate my pitch : </Form.Label>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>
        </Form>
        <br/><br/>
        <Form>
          <Form.Group controlId="formBasicRange">
            <Form.Control type="range" />
          </Form.Group>
          <Button as="input" type="button" value="Rate" />{' '}

        </Form><br/><br/>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
