import React from 'react'
import Link from 'next/link'
import classes from './Sidebar.module.scss'
const Sidebar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>LOGO</div>
      <ul>
        <li>
          <Link href={`/table/1`}>TABLE 1</Link>
        </li>
        <li>
          <Link href={`/table/2`}>TABLE 2</Link>
        </li>
        <li>
          <Link href={`/table/3`}>TABLE 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
