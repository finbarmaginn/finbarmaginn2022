import Head from "next/head";
import { ToDo } from "../components/Todo";

export default function ReduxExample() {
  return (
    <>
      <Head>
        <title>Redux Example | Finbar Maginn{`'`}s NextJS App</title>
      </Head>

      
      <h2>Redux Example</h2>
      <ToDo />
    </>
  );
}
