import type { ReactElement } from 'react'
import MainLayout from '@layouts/MainLayout'

const Home = () => {
  return (
    <div className="h-96 flex justify-center items-center bg-slate-200">
      <h1 className="">Hello world</h1>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
export default Home
