import Navbar from '../modules/Navbar/Navbar';
import style from '../components/App.module.css';
import UserRoutes from '../UserRouters';

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <UserRoutes />
    </div>
  );
}

export default App;
