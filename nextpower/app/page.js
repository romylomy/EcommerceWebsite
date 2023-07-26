
import Link from "next/link";
const fetchTodos = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json()
  return data 
}

export default async function Home() {
  const todos = await fetchTodos()
  return (
    <main>
      <Link href="/about/page.js">Navigate to about page</Link> 
      <h1>hello Next 13</h1>
      {todos.map((todo) => ( // Wrapped map function with curly braces
        <p key={todo.id}>{todo.title}</p> // Moved key prop to the correct location
      ))}
    </main>
  );
}
