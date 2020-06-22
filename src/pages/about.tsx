import React, { lazy, Suspense } from "react"
import { importMDX } from "mdx.macro"

const MdxComponent = lazy(() => importMDX("../contents/about.mdx"))

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MdxComponent />
    </Suspense>
  )
}

export default Home
