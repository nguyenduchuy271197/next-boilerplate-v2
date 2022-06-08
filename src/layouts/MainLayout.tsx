import Banner from '@components/Banner'
import Footer from '@components/Footer'
import Header from '@components/Header'
import React from 'react'

type Props = {
  children: React.ReactNode
  name: string
}

const MainLayout: React.FunctionComponent<Props> = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <Banner name={props.name} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
