import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { IKContext } from "imagekitio-react";
import { init } from "emailjs-com";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../utils/gtag";

function MyApp({ Component, pageProps }: AppProps) {
    const PUBLIC_KEY = "public_DdnXL0ip5CRZeQdeSI4QrmwIetA=";
    const URL_ENDPOINT = "https://ik.imagekit.io/elightlabs/Annamaya";

    init(process.env.EMAILJS_USERID!);

    const Router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: any) => {
            gtag.pageview(url);
        };
        Router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            Router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [Router.events]);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8 "
                />
            </Head>
            <IKContext publicKey={PUBLIC_KEY} urlEndpoint={URL_ENDPOINT}>
                <div>
                    <DefaultSeo {...SEO} />
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} />
                    </AnimatePresence>
                </div>
            </IKContext>
        </>
    );
}

export default MyApp;
