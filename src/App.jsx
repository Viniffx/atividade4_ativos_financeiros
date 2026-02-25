import { CardAtivo } from './component/CardAtivo.jsx';
import { Heading } from './component/Heading.jsx';
import './styles/theme.css';

export function App() {
  return (
    <div className="container">
      
      <Heading>Portfólio de Vinicius:</Heading>

      <div className="grid">
        
        <CardAtivo titulo="Bitcoin (BTC)">
          <p>Preço: R$ 350.000,00</p>
          <span style={{ color: 'var(--alta)', fontWeight: 'bold' }}>+5.2% hoje</span>
        </CardAtivo>

        <CardAtivo titulo="Fundo Imobiliário (HGLG11)">
          <p>Dividendo: R$ 1,10</p>
          <span style={{ color: 'var(--alta)', fontWeight: 'bold' }}>Rendimento estável</span>
        </CardAtivo>

    
        <CardAtivo titulo="Empresa X (VALE3)">
          <p>Preço: R$ 65,20</p>
          <span style={{ color: 'var(--baixa)', fontWeight: 'bold' }}>-1.8% hoje</span>
        </CardAtivo>

      </div>
      
      <Heading>Lucro do mês</Heading>
      <Heading>Lucro acumulado</Heading>
    </div>
  );
}