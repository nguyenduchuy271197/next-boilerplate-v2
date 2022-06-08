import type { ReactElement } from 'react'
import MainLayout from '@layouts/MainLayout'

const Home = () => {
  return <h1 className="">About</h1>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
export default Home
