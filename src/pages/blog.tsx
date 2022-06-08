import type { ReactElement } from 'react'
import MainLayout from '@layouts/MainLayout'

const Blog = () => {
  return <div>Blog</div>
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout name="Blog">{page}</MainLayout>
}
export default Blog
