import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Employees.module.css"

export const getStaticProps = async () =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return{
        props: {employees: data}
    }
}

const employee = ({employees}) =>{
    return(
    <>
        <Head>
            <title>HR | Employees</title>
            <meta name="keyword" content="ninjas"/>
        </Head>
        <div>
            <h1>All Employees</h1>
            {employees.map( (employee) => (

                <div key={employee.id}>
                    <Link href={`/employees/${employee.id}`} className={styles.single}>
                        <h3>{employee.name}</h3>
                    </Link>
                     
                </div>
               
            ))}
        </div>
    </> 
    
    )
}

export default employee;