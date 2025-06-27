// import { useState, useEffect } from "react";
// import { useRouter } from "next/router"; // Pages Router version
import { Header } from "@/components/ui/header"; // Adjust path if needed (e.g., relative to pages/)
import { AnimatePresence, motion } from "framer-motion"; // For transitions
import "@/styles/globals.scss"; // Global styles from original layout.tsx (adjust path)
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  // const [isLoading, setIsLoading] = useState(false);
  // const nextRouter = useRouter();

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

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div>
        {" "}
        {/* Apply fonts */}
        <Header /> {/* From template.tsx */}
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", duration: 0.5 }}
            style={{ width: "100%" }}
          >
            <Component {...pageProps} /> {/* Render the page */}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
