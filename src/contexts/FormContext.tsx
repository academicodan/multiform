// Context, Reducer., Provider, Hook

import { createContext, ReactNode, useContext, useReducer } from "react"

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
}

type Action = {
  type: FormActions;
  payload: any;
}

type ContextType = {
  state: State;
  dispatch: (action: Action) => void
}

type FormProviderprops = {
  children: ReactNode;
}

// objeto de dados iniciais 

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  github: '',
  email: ''
}

// Context 
const FormContext = createContext<ContextType | undefined>(undefined)

// Reducer
// enum actions
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}

// O formReducer ele vai ser para uso interno apenas
const formReducer = (state: State, action: Action) => {

  switch(action.type) {
    case FormActions.setCurrentStep: 
      return {...state, currentStep: action.payload };
    case FormActions.setName:
      return {...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return {...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default: 
      return state;
  }
}

// Provider
export const FormProvider = ({children}: FormProviderprops) => {
// dispatch possui um função para executar ações

  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch}
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}
// Hook
export const useForm = () => {
  const context = useContext(FormContext);

  if(context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider');
  }

  return context;
}