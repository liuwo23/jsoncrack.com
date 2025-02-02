import Document, { Html, Head, Main, NextScript } from "next/document";
import { SeoTags } from "src/components/SeoTags";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <SeoTags
            description="Simple visualization tool for your JSON data. No forced structure, paste your JSON and view it instantly."
            title="JSON Crack - Crack your data into pieces"
            image="https://jsoncrack.com/assets/jsoncrack.png"
          />
          <meta name="theme-color" content="#36393E" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          <link rel="preload" href="assets/Mona-Sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
