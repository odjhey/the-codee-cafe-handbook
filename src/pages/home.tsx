import React, { lazy, Suspense } from "react"
import { importMDX } from "mdx.macro"

const HomeMdx = lazy(() => importMDX("../contents/home.mdx"))

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeMdx></HomeMdx>
    </Suspense>
  )
}

export default Home
