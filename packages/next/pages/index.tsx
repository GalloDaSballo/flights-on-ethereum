import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PlaneTicketDeployment from "@mono/hardhat/deployments/kovan/PlaneTicket.json"
import CreateTicket from '../component/CreateTicket'
import VerifyOwnership from '../component/VerifyOwnership'

const Home:React.FC =() => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <p>1 + 1</p>
        <p>{1 + 1}</p>

        <p>Address of Contract: {PlaneTicketDeployment.address}</p>

        <CreateTicket />
        <VerifyOwnership />

      </main>
    </div>
  )
}

export default Home
