import './styles.css';
import IMAGE from './react.png';
import LOGO from './react.svg';

export const App = () => {
  return (
    <>
      <div>
        <h1>React App starter Template</h1>
        <img src={IMAGE} alt='react logo' width='300' height='300' />
        <img src={LOGO} alt='react logo' width='300' />
      </div>
    </>
  );
};
