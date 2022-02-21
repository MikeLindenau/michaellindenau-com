import { useEffect, useState } from 'react'
import moment from 'moment'
import ReactTooltip from 'react-tooltip'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import SubscribeForm from '../components/SubscribeForm.js'
import Parser from 'rss-parser'

export default function Home(props) {
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    setShowTip(true)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Lindenau</title>
        <meta
          name="description"
          content="Welcome to my corner of the internet"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <img className={styles.avatar} src="/mikel.png" />
          <h1 className={styles.title}>Michael Lindenau</h1>
          <p style={{ marginTop: 10 }}>Chasing freedom through business!</p>
        </section>
        <div className={styles.sections}>
          <section>
            <h2>About Me</h2>
            <ul className={styles.list}>
              <li>
                <span style={{ marginRight: '10px' }}>🧑</span>
                32 years old
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>🇺🇸</span>
                American raised
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>👨‍💻</span>
                Software Developer
              </li>

              <li>
                <span style={{ marginRight: '10px' }}>🔨</span>I build and scale
                things
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>✍️</span>
                producing > consuming
              </li>
            </ul>
          </section>
          <section>
            <h2>My Products</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>📎</span>
                  <a href="https://nurturly.io">Nurturly</a>
                </div>
                <div className={styles.subtitle}>{props.devutils}</div>
              </li>
              {/*}
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>☎️</span>
                  <a href="https://callcounters.com">CallCounters</a>
                </div>
                <div className={styles.subtitle}>{props.blackmagic}</div>
              </li>
              {*/}
            </ul>
            <h2>Writings</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>💌</span>
                  <a href="https://mike73f.substack.com/">Newsletter</a>
                </div>
                <div className={styles.subtitle}>{props.newsletter}</div>
              </li>
              {/*
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>✏️</span>
                  <a href="https://tonydinh.com/notes">Public Notes</a>
                </div>
                <div className={styles.subtitle}>Notes, tips, and FAQs</div>
              </li>
              */}
            </ul>
          </section>
          <section>
            <h2>Social Media</h2>
            <ul className={styles.list}>
              {/*}
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🐦</span>
                  <a href="https://twitter.com/tdinh_me">Twitter</a>
                </div>
                <div className={styles.subtitle}>{props.tweets}</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🎥</span>
                  <a href="https://www.youtube.com/tonydinh">YouTube</a>
                </div>
                <div className={styles.subtitle}>{props.youtube}</div>
              </li>
              */}
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>💼</span>
                  <a href="https://www.linkedin.com/in/mikelindenau/">
                    LinkedIn
                  </a>
                </div>
                <div className={styles.subtitle}>
                  I post once a week, sometimes.
                </div>
              </li>
            </ul>
            <h2>Code</h2>
            <ul className={styles.list}>
              <li>
                <span style={{ marginRight: '10px' }}>⌨️</span>
                <a href="https://github.com/mikelindenau">GitHub</a>
                <div className={styles.subtitle}>Last commit: Today</div>
              </li>
            </ul>
          </section>
          <section>
            <h2>Other Things</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>💾</span>
                  <a href="https://techcrunch.com/2011/07/21/cloud-storage-company-cx-raises-5m-from-eric-schmidt-and-others-acquires-fileden/">
                    Fileden
                  </a>
                </div>
                <div className={styles.subtitle}>
                  Micro acquired it, fixed it, sold it.
                </div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🦄</span>
                  <a href="https://truststamp.ai/">Truststamp</a>
                </div>
                <div className={styles.subtitle}>
                  Helped it start, watched it grow
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          <SubscribeForm />
        </div>

        <h2>Latest Updates 👇</h2>
        <div className={styles['issue-container']}>
          {props.latest.map((issue, i) => (
            <a key={i} href={issue.link} className={styles['issue-line']}>
              <div className={styles['issue-header']}>
                <div
                  style={{ backgroundColor: issue.color }}
                  className={styles['issue-source']}
                >
                  {issue.source}
                </div>
                <div className={styles['issue-date']}>
                  {moment(issue.isoDate).fromNow()}
                </div>
              </div>
              <div className={styles['issue-title']}>{issue.title}</div>
              <div className={styles['issue-snippet']}>
                {(issue.contentSnippet || '').substring(0, 100)}
                {(issue.contentSnippet || '').length > 100 ? '...' : ''}
              </div>
            </a>
          ))}
        </div>
      </main>

      {showTip ? (
        <ReactTooltip
          multiline={true}
          overridePosition={({ left, top }, _e, _t, node) => {
            return {
              top,
              left: typeof node === 'string' ? left : Math.max(left, 0),
            }
          }}
        />
      ) : null}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        @media (prefers-color-scheme: dark) {
          html,
          body {
            color-scheme: dark;
            background: #141414;
            color: white;
          }
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const parser = new Parser()
  const [newsletter] = await Promise.all([
    parser.parseURL('https://mike73f.substack.com/feed'),
    /*
      parser.parseURL(
        'https://www.youtube.com/feeds/videos.xml?channel_id=UCYOiXua3ot8x7D9uF7ipUPg'
      ),
      fetch(
        'https://api.blackmagic.so/get_tweets_last_24hrs?id=331379561'
      ).then((r) => r.json()),*/
  ])

  return {
    props: {
      //devutils: `Last version: ${fromNow(new Date(devutils.items[0].isoDate))}`,
      /*blackmagic: `Last update: ${fromNow(
        new Date(blackmagic.items[0].isoDate)
      )}`,*/
      newsletter: `Last issue: ${fromNow(
        new Date(newsletter.items[0].isoDate)
      )}`,
      //youtube: `Last video: ${fromNow(new Date(youtube.items[0].isoDate))}`,
      //tweets: `${tweets.count} tweets last 48hrs`,
      latest: [
        /*
        ...devutils.items.map((item) => ({
          ...item,
          source: 'DevUtils Product Updates',
          color: '#5ba533',
        })),
        ...blackmagic.items.map((item) => ({
          ...item,
          source: `BlackMagic.so Product Updates`,
          color: '#333333',
        })),*/
        ...newsletter.items.map((item) => ({
          ...item,
          source: `Mike's Newsletter`,
          color: '#5383ec',
        })),
      ].sort(
        (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
      ),
    },
  }
}

function fromNow(
  date,
  nowDate = Date.now(),
  rft = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' })
) {
  const SECOND = 1000
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR
  const WEEK = 7 * DAY
  const MONTH = 30 * DAY
  const YEAR = 365 * DAY
  const intervals = [
    { ge: YEAR, divisor: YEAR, unit: 'year' },
    { ge: MONTH, divisor: MONTH, unit: 'month' },
    { ge: WEEK, divisor: WEEK, unit: 'week' },
    { ge: DAY, divisor: DAY, unit: 'day' },
    { ge: HOUR, divisor: HOUR, unit: 'hour' },
    { ge: MINUTE, divisor: MINUTE, unit: 'minute' },
    { ge: 30 * SECOND, divisor: SECOND, unit: 'seconds' },
    { ge: 0, divisor: 1, text: 'just now' },
  ]
  const now =
    typeof nowDate === 'object'
      ? nowDate.getTime()
      : new Date(nowDate).getTime()
  const diff =
    now - (typeof date === 'object' ? date : new Date(date)).getTime()
  const diffAbs = Math.abs(diff)
  for (const interval of intervals) {
    if (diffAbs >= interval.ge) {
      const x = Math.round(Math.abs(diff) / interval.divisor)
      const isFuture = diff < 0
      return interval.unit
        ? rft.format(isFuture ? x : -x, interval.unit)
        : interval.text
    }
  }
}
