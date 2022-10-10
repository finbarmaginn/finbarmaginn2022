import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Finbar Maginn{`'`}s NextJS App</title>
      </Head>
      <h2>Home</h2>
      <ul>
        <li>Custom _app.js</li>
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
      </ul>
    </div>
  );
}
