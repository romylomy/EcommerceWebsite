import Link from "next/link";

export const metadata = {
  title: 'Welcome to The About Page',
  description: 'Generated by create next app',
}

export default function About() {
  return (
    <main>
      <Link href="/">Navigate to home page</Link> {/* Corrected the href to a relative path */}
      <h1>Welcome to the about page</h1> {/* Fixed the typo "Welcome" */}
    </main>
  );
}

  