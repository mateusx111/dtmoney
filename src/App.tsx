import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { Header } from "./components/Header";
import { Dashboar } from "./components/Dashboard";
import Modal from 'react-modal';
import { NewtransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewModalTransacionOpnen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewModalTransacionOpnen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewModalTransacionOpnen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     
      <Dashboar />  {/* Summary esta aqui dentro de Dashboard */}
     
      <NewtransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}