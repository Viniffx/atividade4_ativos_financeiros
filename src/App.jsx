import { CardAtivo } from './component/CardAtivo.jsx';
import { Heading } from './component/Heading.jsx';
import './styles/theme.css';

export function App() {
  return (
    <div className="container">
      {/* Teste o Desafio Nível Tubarão mudando para "Meu Portfólio: Lucro Máximo" ou "Prejuízo" */}
      <Heading>Portfólio de Vinicius:</Heading>

      <div className="grid">
        {/* Card de Bitcoin */}
        <CardAtivo titulo="Bitcoin (BTC)">
          <p>Preço: R$ 350.000,00</p>
          <span style={{ color: 'var(--alta)', fontWeight: 'bold' }}>+5.2% hoje</span>
        </CardAtivo>

        {/* Card de Fundo Imobiliário */}
        <CardAtivo titulo="Fundo Imobiliário (HGLG11)">
          <p>Dividendo: R$ 1,10</p>
          <span style={{ color: 'var(--alta)', fontWeight: 'bold' }}>Rendimento estável</span>
        </CardAtivo>

        {/* Card de Ação */}
        <CardAtivo titulo="Empresa X (VALE3)">
          <p>Preço: R$ 65,20</p>
          <span style={{ color: 'var(--baixa)', fontWeight: 'bold' }}>-1.8% hoje</span>
        </CardAtivo>
      </div>
    </div>
  );
}