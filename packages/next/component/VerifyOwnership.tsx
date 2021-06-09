import { FormEvent, useState } from "react"
import { Contract } from "ethers"
import PlaneTicketDeployment from "@mono/hardhat/deployments/kovan/PlaneTicket.json"
import { useUser } from "../context/UserContext"

const VerifyOwnership: React.FC = () => {
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

    const result = await planeTicketContract.ownerOf(id)
    console.log("result", result)
  }
  return (
    <div>
      <h2>Verify your ticket</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" value={id} onChange={(event) => setId(event.target.value)} />
        <button>Verify</button>
      </form>
    </div>
  )
}
export default VerifyOwnership