import { useEffect } from "react"
import { AppRoutes } from "./routes"
import getUserById from "./services/users/getUserById";
import { useUserStore } from "./stores/user";

function App() {
  const addUser = useUserStore(s => s.addUser)
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const user = await getUserById('8DF30610-90D9-46C5-990B-CF560E147CC6')
    addUser(user);
  }
  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
