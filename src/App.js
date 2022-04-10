import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Billet from "./components/Billet/Billet";

function App() {
  return (
    <div>
      {/* <Billet /> */}
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
