import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col">
      <Header/>
    </main>
  );
}
