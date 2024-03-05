import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import HomePage from "./components/home";
import Solutions from "./components/solutions";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen flex flex-col">
      <Header/>
      <div id="home" className="flex h-screen w-full -mt-16 pt-16 md:pt-24 px-4 md:px-24">
        <HomePage/>
      </div>
      <div id="about" className="flex md:h-screen w-full pb-4 md:pb-0 pt-16 md:pt-24 px-4 md:px-24">
        <About/>
      </div>
      <div id="solutions" className="flex h-[120vh] md:h-screen w-full pb-4 md:pb-0 pt-16 md:pt-24 px-4 md:px-24">
        <Solutions/>
      </div>
      <div id="contact" className="flex h-screen w-full pt-16 md:pt-24">
        <Contact/>
      </div>
    </main>
  );
}
