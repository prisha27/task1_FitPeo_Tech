import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  return (
   <>
  <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        </div>
        </div>
   </>
  )
}

export default App
