import CarHeader from '../../assets/images/car-header.png';
import { Link } from 'react-router-dom';
import ButtonHome from '../../components/Button/catalogbutton';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
           Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <img src={CarHeader} alt="Car header" />
        </div>
      </div>
      <div className="home-button-container base-card">
        <Link to="/products">
        <ButtonHome />
        </Link>
        <div className="button-content-container">
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;