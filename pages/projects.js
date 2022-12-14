import Head from "next/head"

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects | Finbar Maginn{`'`}s NextJS App</title>
      </Head>
      <h2>Projects</h2>
      <div className='grid'>
        <a
          href='https://www.jakesheppard.co.uk'
          target='_blank'
          className='card'
          rel='noreferrer'
        >
          <div>
            <h3>Jake Sheppard - Art</h3>
            <ul>
              <li>Wordpress</li>
              <li>Woocommerce</li>
              <li>Stripe</li>
            </ul>
          </div>
        </a>
        <a
          href='https://www.jimmaginn.com'
          target='_blank'
          className='card'
          rel='noreferrer'
        >
          <div>
            <h3>Jim Maginn - Photography</h3>
            <ul>
              <li>PHP back end</li>
              <li>React front end</li>
              <li>Redux</li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
}