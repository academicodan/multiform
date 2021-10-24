import * as C from './styles'

import { Theme } from "../../Components/Theme";
import { Link, useHistory } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';

export const Revision = () => {
  const history = useHistory()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') {
      history.push('/');
    } else if (state.email === '' || state.github === '') {
      history.push('/step3')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
      });
    }
  }, []);

  const handleNextStep = () => {
    console.table(state)
  }

  return (
    <Theme>
      <C.Container>
        <p>Revisão</p>
        <h1>Suas informações</h1>
        <hr />
        <article>
          <h2>
            Nome:
          </h2>
          <p>
            {state.name}
          </p>
        </article>
        <article>
          <h2>
            Level:
          </h2>
          <p>
            {state.level}
          </p>
        </article>
        <article>
          <h2>
            GitHub:
          </h2>
          <p>
            {state.github}
          </p>
        </article>
        <article>
          <h2>
            Email:
          </h2>
          <p>
            {state.email}
          </p>
        </article>
        <Link to="/step3" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </C.Container>
    </Theme>
  );

}