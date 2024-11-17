import "./App.css";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="h-1/5 w-full bg-[#121214]">
          <Header />
        </div>
        <div className="h-4/5 w-full bg-[#202024]"></div>
      </div>
    </>
  );
}
