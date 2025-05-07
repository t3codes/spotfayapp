export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="h-[10vh] flex shadow-md shadow-black/30">
        <div className="w-1/2 border border-yellow-500 flex items-center justify-center">
          <span className="text-sm">Div 1</span>
        </div>
        <div className="w-1/2 border border-yellow-500 flex items-center justify-center">
          <span className="text-sm">Div 2</span>
        </div>
      </header>

      {/* Conteúdo principal com 2 sections */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        <section className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Sessão 1</h2>
          <p>Conteúdo da primeira sessão.</p>
        </section>

        <section className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Sessão 2</h2>
          <p>Conteúdo da segunda sessão.</p>
        </section>
      </main>

      {/* Menu inferior */}
      <nav className="h-[60px] border-t border-gray-300 flex justify-around items-center bg-white shadow-inner">
        <a href="/dashboard" className="text-blue-600 font-medium">Home</a>
        <a href="/" className="text-blue-600 font-medium">Saque</a>
        <a href="/helper" className="text-blue-600 font-medium">Ajuda</a>
      </nav>
    </div>
  );
}
