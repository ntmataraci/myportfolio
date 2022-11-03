import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/layout'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import {useSelector} from "react-redux"
import { RootState } from '../store/store'
export default function Home() {
// const [darkMode,setDarkMode]=useState(false)
// const darkModeHandler =() => {
// setDarkMode(!darkMode)
// }
const darkmode=useSelector((state:RootState)=>state.Information.darkmode)
  return (
<div className={`${darkmode?"dark":"lightMode"}`}>
  <div className=' bg-slate-900 dark:bg-white py-5 lg:px-10 px-2 text-slate-400 font-Inter'>
   <Layout />
   </div>
   </div>
  )
}
