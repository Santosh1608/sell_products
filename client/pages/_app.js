import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import { Header } from "../components/Header";
const MyApp = ({ Component, pageProps, currentUser }) => {
  console.log("PAGE PROPS  ==============> ", pageProps, currentUser);
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component {...pageProps} currentUser={currentUser} />
      </div>
    </div>
  );
};

MyApp.getInitialProps = async (appContext) => {
  try {
    let pageProps;
    const client = buildClient(appContext.ctx);
    const { data } = await client.get("/api/users/currentuser");

    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(
        appContext.ctx,
        client,
        data.currentUser
      );
    }

    return {
      pageProps,
      ...data,
    };
  } catch (error) {
    throw error;
  }
};

export default MyApp;
