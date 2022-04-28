import Modal from 'react-modal';
import incomeImg from "../../assets/Entradas.svg"
import outcomeImg from "../../assets/Saídas.svg"
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewtransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  return(
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
          <button 
            type='button' onClick={onRequestClose} 
            className="react-modal-close">
            <img src={closeImg} alt="Fevahr modal" />
          </button>
          <Container>
          <h1>Cadastrar transação</h1>
          <input 
          placeholder ="Título"
          />

          <input 
          type="number" 
          placeholder="Valor"
          />

          <TransactionTypeContainer>
            <button type='button'>
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </button>

            <button type='button'>
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </button>
          </TransactionTypeContainer>
          
          <input 
          type="text" 
          placeholder="Categoria"
          />

          <button type="submit">
            Cadastrar
          </button>
          
          </Container>
        </Modal>
  );
}