import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import BirthdayModal from "./components/MainContent/RightContent/BirthdayCard/BirthdayModal/BirthdayModal";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

function App() {
  return (
    <div>
      <BirthdayModal />
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
