import './style.css';
import { smartHomeData } from '../../smartHomeData'
import { Header } from '../../components/Header/Header';
import { Dashboard } from '../../components/Dashboard/Dashboard'
import '../../components/Header/header.css'
import '../../components/Dashboard/dashboard.css'

export const HomePage = () => {
  return (
    <div className='container'>
    <Header title='Chytrý dům' />
    <Dashboard data={smartHomeData}/>
    </div>
  );
};
