export default function AppWindow({ title, onMinimize, children }) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-zinc-900 text-white flex flex-col z-50">
        <header className="bg-zinc-800 text-lg px-4 py-2 flex justify-between items-center shadow">
          <span>{title}</span>
          <button onClick={onMinimize} className="text-xl font-bold hover:text-gray-300">−</button>
        </header>
        <main className="flex-grow overflow-auto p-4">
          {children}
        </main>
      </div>
    );
  }
  