// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Create all your favicons and put them inside public/favicons folder */}

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicons/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/favicons/safari-pinned-tab.svg"
                        color="#d9a011"
                    />
                    <meta name="msapplication-TileColor" content="#150835" />
                    <meta name="theme-color" content="#000" />
<meta name="google-site-verification" content="2el3m1OMIScV9Hvbz3B-dA1V25220NkSdfIkNiLrAtE" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="use-credentials"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Paprika&family=Poppins:wght@300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="bg-bg text-white font-poppins">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
