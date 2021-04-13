import React, { useState, memo } from "react";

//Components ==>
import { linkedList } from "./LinkedListLogic";

//Styles ==>
import Logo from "../assets/NaventLogo.svg";
import {
  Container,
  NaventHeader,
  StyledSVG,
  TransparentCard,
  StyledInput,
  StyledButton,
  Warning,
} from "./Styled";

const LinkedListComponent = () => {
  const [listItem, setListItem] = useState();
  const [list, setList] = useState([]);
  const [change, setChange] = useState(false);
  const [alter, setAlter] = useState(false);
  const [random, setRandom] = useState(false);
  const [inputNotif, setInputNotif] = useState(false);

  let problemA = `Dado una lista encadenada, y 5 valores para insertar, insertar dichos
  valores alternadamente al final y al principio de la lista. Ejemplo:
  Lista inicial: 1 -> 4 -> 5 -> 3 Lista luego de la inserción secuencial
  de los valores: 6, 7, 8, 9, 10 9 -> 7 -> 1 -> 4 -> 5 -> 3 -> 6 -> 8 ->
  10`;

  console.log(`listItem`, listItem);
  const handleRandom = () => {
    let count = 0;
    while (count < 4) {
      handleTail(Math.floor(Math.random() * 10 + 1));
      count++;
    }
    setRandom(true);
  };

  const handleEjemplo = () => {
    handleTail(1);
    handleTail(4);
    handleTail(5);
    handleTail(3);
    setRandom(true);
  };

  const handleInputChange = (e) => {
    setListItem(e.target.value);
  };

  const handleButton = () => {
    setInputNotif(false);
    !alter ? handleTail() : handleHead();
    setAlter(!alter);
  };

  const handleTail = (n) => {
    if (!n) {
      linkedList.addTail(parseInt(listItem, 10));
      setChange(false);
      setList([...list, parseInt(convertToArray(listItem))]);
    } else {
      linkedList.addTail(parseInt(n, 10));
      setChange(false);
      setList((list) => [...list, n]);
    }
  };

  const handleHead = () => {
    linkedList.addHead(linkedList.head, parseInt(listItem, 10));
    setChange(true);
    setList([parseInt(convertToArray(listItem)), ...list]);
  };

  const convertToArray = (number) => {
    let arr = [];
    if (!change) {
      arr.push(number);
    } else if (change) {
      arr.unshift(number);
      return arr[0];
    }
    return arr[0];
  };

  return (
    <Container>
      <NaventHeader>
        <StyledSVG src={Logo} />
        <h2>Navent Challenge</h2>
        <h4>
          <small>by. </small>Franco Ortiz
        </h4>
      </NaventHeader>
      <TransparentCard>
        <div className="problemContainer">
          <h4>Problema A:</h4>
          <p>{problemA}</p>
        </div>
        <div className="problemContainer">
          <h4>Solución:</h4>
          {random ? (
            <>
              <p className="showList">{JSON.stringify(list)}</p>
              <div className="codeContainer">
                <h5>Código de la LinkedList</h5>
                <p>{JSON.stringify(linkedList)}</p>
              </div>

              <p>
                Ingresa numeros para ir agregando a la lista de forma
                secuencial.
              </p>
              <StyledInput
                type="number"
                name="createList"
                onChange={handleInputChange}
              />
              <StyledButton
                onClick={
                  listItem && !!listItem.length
                    ? handleButton
                    : () => setInputNotif(true)
                }
              >
                Agregar
              </StyledButton>
              {inputNotif && <Warning>Introduce un numero por favor</Warning>}
            </>
          ) : (
            <>
              <p>
                Toca el Botón para generar una lista aleatoria o para generar la
                lista del ejemplo del ejercicio.
              </p>
              <StyledButton onClick={handleRandom}>Generar Lista</StyledButton>
              <StyledButton onClick={handleEjemplo}>Ejemplo</StyledButton>
            </>
          )}
        </div>
      </TransparentCard>
    </Container>
  );
};

export default memo(LinkedListComponent);
