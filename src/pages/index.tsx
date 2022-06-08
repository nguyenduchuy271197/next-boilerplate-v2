import type { ReactElement } from 'react'
import MainLayout from '@layouts/MainLayout'

const Home = () => {
  return <div>Home</div>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout name="Home">{page}</MainLayout>
}
export default Home
