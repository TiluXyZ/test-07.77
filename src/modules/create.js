/* eslint-disable linebreak-style */
const create = (element, clase, attribute, father) => {
  const elemento = document.createElement(element);

  elemento.classList.add(clase);

  elemento.setAttribute('id', attribute);

  father.appendChild(elemento);
};

export default create;
