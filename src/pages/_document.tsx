import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const MyDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                              (function(l) {
                                    if (l.search[1] === '/' ) {
                                    var decoded = l.search.slice(1).split('&').map(function(s) { 
                                        return s.replace(/~and~/g, '&')
                                    }).join('?');
                                    
                                    window.history.replaceState(null, null,
                                      l.pathname.slice(0, -1) + decoded + l.hash
                                    );
                                }
                              }(window.location))
                        `,
                    }}
                ></script>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheet.seal();
    }
};
