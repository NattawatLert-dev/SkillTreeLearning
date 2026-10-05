import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [message, setMessage] = useState("กำลังโหลด...");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error(error);
        setMessage("ไม่สามารถเชื่อมต่อ Backend ได้");
      });
  }, []);

  return (
    <div>
      <h1>Skill Tree Learning</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
