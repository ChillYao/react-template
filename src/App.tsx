import './styles.css';
import IMAGE from './react.png';
import LOGO from './react.svg';
import { ClickCounter } from './ClickCouter';

export const App = () => {
  const num = 0;
  return (
    <>
      <div>
        <h1>
          React App starter Template - {process.env.NODE_ENV} -{' '}
          {process.env.name}
        </h1>
        <img src={IMAGE} alt='react logo' width='300' height='300' />
        <img src={LOGO} alt='react logo' width='300' />
      </div>
      <ClickCounter />
    </>
  );
};
