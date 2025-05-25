import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import DashboardMainContent from "./components/DashboardMainContent"

function App() {

  return (
   <>
  <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <DashboardMainContent />
          </main>
        </div>
        </div>
   </>
  )
}

export default App
