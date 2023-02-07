import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              !function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
              (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
              f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
              h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
              e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");

              rg4js('apiKey', 'NU1WVjndVxljSBsHXQhVZg');
              rg4js('enableCrashReporting', true);`,
          }}
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;