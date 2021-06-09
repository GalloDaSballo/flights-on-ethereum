import { useLogin, useUser } from "../context/UserContext"

const Header: React.FC = () => {
  const login = useLogin()
  const user = useUser()

  return (
    <div>
      {user &&
        <p>Your address: {user.address}</p>
      }
      {!user &&
        <button onClick={login}>Login With Metamask (Kovan)</button>
      }
    </div>
  )
}

export default Header