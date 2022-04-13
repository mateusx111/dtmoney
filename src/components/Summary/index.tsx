import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import TotalImg from '../../assets/Total.svg'
import { Container } from "./styles";

export function Summary(){
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saindas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> -R$500,00</strong>
      </div>
      <div className="heighlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}