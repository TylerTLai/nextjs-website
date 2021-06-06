import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Layout>
        <Navbar />
        <motion.div
          className="min-h-full mb-20 mt-20 font-body"
          key={router.route}
          animate="pageAnimate"
          initial="pageInitial"
          variants={{ pageInitial: { opacity: 0 }, pageAnimate: { opacity: 1 } }}
        >
          <Component {...pageProps} />
        </motion.div>
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
