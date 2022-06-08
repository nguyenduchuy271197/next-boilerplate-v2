import Footer from '@components/Footer'
import Header from '@components/Header'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const MainLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
