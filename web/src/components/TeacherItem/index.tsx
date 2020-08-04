import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/11811935?s=460&u=089518eda2deacdb997457eb8a4fadeb5d8a6cb7&v=4" alt="Foto do professor" />
        <div>
          <strong>Henrique Pini</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisaas em lboratório e por mudar a vida das pessoas através de experiências.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Ícone do Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
};

export default TeacherItem;