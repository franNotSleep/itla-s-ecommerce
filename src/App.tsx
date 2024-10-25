import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  email: string;
  lastName: string;
};

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("user");

    const userData = data ? (JSON.parse(data) as User) : null;

    if (!userData) {
      navigate("/sign-in");
    } else {
      setUser(userData);
    }
  }, []);

  return (
    <>
      <h1>Hello !!</h1>
    </>
  );
}

export default App;
