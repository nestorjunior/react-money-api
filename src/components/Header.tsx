import logo from "../assets/Logo.svg";

export function Header() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className="h-1/5 w-full bg-[#121214]">
          <header className="flex justify-between items-center h-full px-8">
            <img src={logo} alt="" />
            <button className="px-4 py-2 bg-green-900 text-white rounded hover:bg-green-950 transition delay-150">
              Nova transação
            </button>
          </header>
        </div>

        {/* Divisão com 3 boxes */}
        <div className="relative w-full bg-[#181818] py-4 flex justify-between px-8 z-10">
          {/* Box 1 */}
          <div className="flex-1 bg-red-500 h-[140px] flex flex-col items-center justify-center text-white rounded shadow-md mx-2">
            <h3 className="text-lg font-semibold">Usuários</h3>
            <p className="text-2xl font-bold">1,245</p>
          </div>

          {/* Box 2 */}
          <div className="flex-1 bg-green-500 h-[140px] flex flex-col items-center justify-center text-white rounded shadow-md mx-2">
            <h3 className="text-lg font-semibold">Vendas</h3>
            <p className="text-2xl font-bold">R$ 15,200</p>
          </div>

          {/* Box 3 */}
          <div className="flex-1 bg-blue-500 h-[140px] flex flex-col items-center justify-center text-white rounded shadow-md mx-2">
            <h3 className="text-lg font-semibold">Visitas</h3>
            <p className="text-2xl font-bold">3,521</p>
          </div>
        </div>

        {/* Parte inferior (80%) */}
        <div className="h-4/5 w-full bg-[#202024] relative z-0"></div>
      </div>
    </>
  );
}
