import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
        {/* <nav>Root</nav> */}
        <aside>left</aside>
        <Outlet/>
        <aside>right</aside>
    </>
  )
}
