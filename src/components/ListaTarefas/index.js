import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState([
    "Estudar react",
    "Fazer o exercicio",
    "descansar",
    "teste muito loko"
  ]);

  const [novaTarefa, setNovaTarefa] = useState("");

  const renderizarLista = lista.map((tarefa, index) => {
    return (
      <Tarefa key={index}>
        <p>{tarefa}</p>
        <RemoveButton
        onClick={()=>removeTarefa(index)}
        >
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    );
  });

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);//posso colocar o spread operator dentro do parenteses sem precisar criar o novaLista
    setNovaTarefa("");
  };

  const removeTarefa = (indexTarefa) => {
    //Com splice
    //const listaFiltrada = [...lista];
    //listaFiltrada.splice(index, 1);

    //Com Filter
    const listaFiltrada = lista.filter((item, index)=>{
      return index !== indexTarefa
    })
    
    setLista(listaFiltrada);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>{renderizarLista}</ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
