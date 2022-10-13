import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Finbar Maginn{`'`}s NextJS App</title>
      </Head>
      <h2>Home</h2>
      <ul>
        <li>
          Custom Next JS pages
          <ul>
            <li>_app.js</li>
            <li>404.js</li>
          </ul>
        </li>

        <li>NextJS layout</li>

        <li>
          SASS
          <ul>
            <li>Global</li>
            <li>Modluar</li>
          </ul>
        </li>

        <li>
          CSS3
          <ul>
            <li>flex</li>
            <li>animation</li>
          </ul>
        </li>

        <li>SVG icons</li>
        <li>Automatic deploy from Github to Render</li>
      </ul>
    </div>
  );
}
