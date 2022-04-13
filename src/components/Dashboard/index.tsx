import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboar(){
  return(
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}