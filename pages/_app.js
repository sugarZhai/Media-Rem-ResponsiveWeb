import App, { Container } from 'next/app'
import * as React from 'react'
import { Provider, useStaticRendering } from 'mobx-react'
import { initializeStore } from '../src/store'
// import './static/null.css' // fixed nextjs v7 bug. see here: https://github.com/zeit/next.js/issues/5291

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (typeof window === 'undefined') {
      useStaticRendering(true)
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const mobxStore = initializeStore()
    ctx.mobxStore = mobxStore
    return { pageProps,initialMobxState: mobxStore }
  }
  constructor(props) {
    super(props)
    const isServer = !process.browser
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState)
  }

  render() {
    const { Component, pageProps } = this.props
    return <Container>
      <Provider store={this.mobxStore}>
        <div id="root">
          <Component {...pageProps} />
        </div>
      </Provider>
    </Container>
  }
}

