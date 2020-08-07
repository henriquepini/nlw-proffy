import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import successMessage from '../../assets/images/success-message.svg';

function TeacherSuccess() {
  return (
    <div id="page-teacher">
      <div id="page-teacher-content">
        <main>
          <img id="success-message" src={successMessage} alt="Cadastro realizado com sucesso"/>
          <Link to="study">Ver listagem</Link>
        </main>
      </div>
    </div>
  );
}

export default TeacherSuccess;