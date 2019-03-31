import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import remCalculate from '../src/utils/remCalculate'
import { gwPath, env } from '../config/env'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  render() {
    return (
      <html lang="zh">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />
          <link rel="stylesheet" type="text/css" href={`${gwPath}/static/css/common.css`} />
          <script dangerouslySetInnerHTML={{ __html: remCalculate }} />
          <script dangerouslySetInnerHTML={{ __html: `window.DEPLOY_ENV='${env}';` }} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
