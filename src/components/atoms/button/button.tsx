import { SemanticCOLORS } from 'semantic-ui-react';
import { Styledbutton } from './style/button.styled.component';


export type buttonProps = {
  btnlabel?:string,
  color?:SemanticCOLORS,
  isLoading:boolean,
  isDisabled:boolean,
  isPrimary:boolean,
  onClickHandler?(): void;
}

const ButtonComponent = ({ 
btnlabel,
isLoading = false,
isDisabled = false,
isPrimary = true,
onClickHandler,
color,
...props }:buttonProps) => {
  return (
    <Styledbutton
      color= {color}
      primary={isPrimary}
      basic={!isPrimary}
      loading={isLoading}
      disabled={isDisabled}
      isprimaryprop={isPrimary.toString()}
      isdisableddrop={isDisabled.toString()}
      fluid
      {...props}
    >
      {btnlabel}
    </Styledbutton>
  )
}

export default ButtonComponent;