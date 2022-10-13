import Layout from "../components/Layout";
import "../styles/global.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store.js"

export default function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
