import { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Theme } from '../../Components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as C from './styles';


// useHistory = historico de navegação

export const FormStep1 = () => {
  const history = useHistory()
  const { state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, [])

  const handleNextStep = () => {
    if(state.name !== '') {
      history.push('/step2')
    } else {
      alert("Preencha os dados")
    }

  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />

        <label htmlFor="">
          Seu nome completo
          <input
            type="text"
            value={state.name}
            autoFocus
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}