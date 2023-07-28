
"use Client"
import Link from "next/link";
import {useState, useEffect} from 'react'; 


const fetchMessage = async () =>{ 
  const res = await fetch('/api/todos');
  const message = await res.json();
  setMessage(message); 
}

export default function CSR(){
  const [message, setMessage] = useState([]);

  return ( // Corrected the return statement by using parentheses instead of curly braces
    <main>
      <Link href="/about/page.js">Navigate to about page</Link>
      <h1 onClick={fetchMessage}>hello Next 13</h1>
   
    </main>
  );
}

