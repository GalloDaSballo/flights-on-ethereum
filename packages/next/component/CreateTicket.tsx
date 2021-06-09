import { FormEvent, useState } from "react"
import { Contract } from "ethers"
import PlaneTicketDeployment from "@mono/hardhat/deployments/kovan/PlaneTicket.json"
import { useUser } from "../context/UserContext"

const CreateTicket: React.FC = () => {
  const [id, setId] = useState("")
  const user = useUser()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    // This is where we mint
    const planeTicketContract = new Contract(
      PlaneTicketDeployment.address, 
      PlaneTicketDeployment.abi, 
      user.provider.getSigner()
    )

    const tx = await (await planeTicketContract.mint(id)).wait()
    console.log("tx", tx)
  }

  return (
    <div>
      <h2>Create a new Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" value={id} onChange={(event) => setId(event.target.value)} />
        <button>Mint</button>
      </form>
    </div>
  )
}

export default CreateTicket