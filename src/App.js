import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="dark:text-white dark:bg-slate-900">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
