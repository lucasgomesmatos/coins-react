import React from 'react';
import Message from '../components/Message/Message';
import { useLocation } from 'react-router-dom';

const Projetos = () => {
  const location = useLocation();
  let message = '';
  if (location.state.message) {
    message = location.state.message;
  }

  return (
    <section>
      <h1>Meus Projetos</h1>
      {message && <Message type="success" msg={message} />}
    </section>
  );
};

export default Projetos;
