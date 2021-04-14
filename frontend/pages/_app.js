import React from "react"
import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import withApollo from "../lib/apollo"

class FoodApp extends App {
  render() {
    const { Component, props } = this.props
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
        </Head>
        <Layout>
          <Component {...props} />
        </Layout>
      </>
    )
  }
}

export default withApollo({ ssr: true })(FoodApp)
