import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
     
      <h1 className={styles.title}>Home page</h1>

      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut optio necessitatibus doloribus repudiandae neque numquam magni. Eos cum architecto, et ad provident, aut, enim minus minima vero corrupti suscipit officia.</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit inventore nisi cupiditate doloremque optio sit, magni dicta harum aliquid iste reiciendis? Voluptatum voluptates placeat veniam nisi tempora animi eligendi architecto.</p>

      <Link href="/employees" className={styles.btn}> See All Employees</Link>
      
   
    </div>

  )
}
