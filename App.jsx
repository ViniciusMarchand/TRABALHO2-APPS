
import { CarrinhoProvider } from 'contexts/CarrinhoContext';
import './gesture-handler';
import './global.css';
import Navigator from 'components/navigators';

export default function App() {
  return (
    <CarrinhoProvider>
      <Navigator/>
    </CarrinhoProvider>
  );
}
