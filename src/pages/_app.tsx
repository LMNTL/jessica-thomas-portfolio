// import { useState, useEffect } from "react";
// import { useRouter } from "next/router"; // Pages Router version
import { Header } from "@/components/ui/header"; // Adjust path if needed (e.g., relative to pages/)
import { AnimatePresence, motion } from "framer-motion"; // For transitions
import "@/styles/globals.scss"; // Global styles from original layout.tsx (adjust path)
import Head from "next/head";
import { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  // const [isLoading, setIsLoading] = useState(false);

  // // Handle route change events for loading (adapted from template.tsx)
  // useEffect(() => {
  //   const handleStart = () => setIsLoading(true);
  //   const handleComplete = () => setIsLoading(false);
  //
  //   nextRouter.events.on("routeChangeStart", handleStart);
  //   nextRouter.events.on("routeChangeComplete", handleComplete);
  //   nextRouter.events.on("routeChangeError", handleComplete);
  //
  //   return () => {
  //     nextRouter.events.off("routeChangeStart", handleStart);
  //     nextRouter.events.off("routeChangeComplete", handleComplete);
  //     nextRouter.events.off("routeChangeError", handleComplete);
  //   };
  // }, [nextRouter]);

  useEffect(() => {
    const routeChange = () => {
      // Temporary fix to avoid flash of unstyled content
      // during route transitions. Keep an eye on this
      // issue and remove this code when resolved:
      // https://github.com/vercel/next.js/issues/17464

      const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
          elem.removeAttribute("media");
        });
      };
      tempFix();
    };

    router.push(router.pathname);
    router.events.on("beforeHistoryChange", routeChange);
    router.events.on("routeChangeComplete", routeChange);
    router.events.on("routeChangeStart", routeChange);
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", duration: 0.5 }}
          style={{ width: "100%" }}
        >
          <Component {...pageProps} key={router.route} />{" "}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
