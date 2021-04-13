import React, { useState, memo } from "react";

//Components ==>
import { list1, list2, mergeTwoLists } from "./LinkedListLogic";

//Styles ==>
import { TransparentCard, StyledButton, NaventFooter } from "./Styled";

const LinkedListSort = () => {
  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);
  const [showGen, setShowGen] = useState(false);
  const [showMerged, setShowMerged] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const [mergedList, setMergedList] = useState([]);

  const problemB = `Dadas 2 listas ordenadas, obtener una 3era ordenada:
  Ejemplo:
  Listas iniciales:
  1 -> 3 -> 5 -> 8
  2 -> 3-> 6 -> 9
  Lista final luego de unirlas ordenadamente:
  1 -> 2 -> 3 -> 3 -> 5 -> 6 -> 8 -> 9`;

  const handleEjemplo = () => {
    handleList1(1);
    handleList1(3);
    handleList1(5);
    handleList1(8);

    handleList2(2);
    handleList2(3);
    handleList2(6);
    handleList2(9);
    setShowGen(true);
  };

  const handleMergeButton = () => {
    let array = handleMerge(listA, listB);
    setMergedList((mergedList) => array);
    setShowMerged(true);
    setHideButton(true);
  };

  const handleList1 = (n) => {
    list1.addTail(parseInt(n));
    setListA((list) => [...list, n]);
  };
  const handleList2 = (n) => {
    list2.addTail(parseInt(n));
    setListB((list) => [...list, n]);
  };

  const handleMerge = (listA, listB) => {
    let left = listA;
    let right = listB;
    let arr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return [...arr, ...left, ...right];
  };

  return (
    <div>
      <TransparentCard>
        <div className="problemContainer">
          <h4>Problema B:</h4>
          <p>{problemB}</p>
        </div>
        <div className="problemContainer">
          <h4>Solución:</h4>
          {!showGen && (
            <p>
              Toca el Botón para generar la lista del ejemplo del ejercicio.
            </p>
          )}
          {!showMerged ? (
            <>
              {showGen && (
                <>
                  <p className="showList">{JSON.stringify(listA)}</p>
                  <p className="showList">{JSON.stringify(listB)}</p>
                </>
              )}
            </>
          ) : (
            <p className="showList">{JSON.stringify(mergedList)}</p>
          )}

          {!showGen ? (
            <StyledButton onClick={handleEjemplo}>
              Generar lista de Ejemplo
            </StyledButton>
          ) : (
            <>
              {!hideButton && (
                <StyledButton onClick={handleMergeButton}>
                  Unir Listas
                </StyledButton>
              )}
            </>
          )}
          <div className="codeContainer">
            <h5>Lista1:</h5>
            <p>{JSON.stringify(list1)}</p>
            <h5>Lista2:</h5>
            <p>{JSON.stringify(list2)}</p>

            <h5>
              <h5>Resultado:</h5>

              <p>{JSON.stringify(mergeTwoLists(list1, list2))}</p>
            </h5>
          </div>
        </div>
      </TransparentCard>
      <NaventFooter>
        <p>
          Contacto:{" "}
          <a
            href={"mailto:ortiz.franco@yandex.com?Subject=Entrevista%20Navent"}
          >
            ortiz.franco@yandex.com
          </a>
        </p>
      </NaventFooter>
    </div>
  );
};

export default memo(LinkedListSort);
