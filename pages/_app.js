import Layout from "../components/Layout";
import "../styles/global.scss";
import { Provider } from "react-redux";
import { useStore } from "../store/store.js"

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
