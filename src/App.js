import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import BirthdayModal from "./components/MainContent/RightContent/BirthdayCard/BirthdayModal/BirthdayModal";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
// import Tab from "./components/MainContent/RightContent/Tab.jsx";

function App() {
  return (
    <div className="dark:text-white dark:bg-slate-900">
      {/* <Tab /> */}
      <BirthdayModal />
      <Sidebar />
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
