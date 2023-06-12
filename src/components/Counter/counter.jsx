import { Component } from 'react';

import {
  CounterBckGColor,
  SubContainer,
  CounterCardBody,
  ContainerBtn,
  BtnPlus,
  BtnMinus,
} from './counter.styled';

class Counter extends Component {
  state = {
    value: 0,
  };
  handleClickIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
 handleClickDicrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <CounterBckGColor>
        <SubContainer>
          <CounterCardBody>
            <h1>Counter</h1>
            <p>{value} </p>
            <ContainerBtn>
              <BtnPlus onClick={this.handleClickIncrement}> + </BtnPlus>
              <BtnMinus onClick={this.handleClickDicrement}> - </BtnMinus>
            </ContainerBtn>
          </CounterCardBody>
        </SubContainer>
      </CounterBckGColor>
    );
  }
}

export default Counter;
