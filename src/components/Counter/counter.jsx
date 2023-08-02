import { useState } from 'react';

import {
  CounterBckGColor,
  SubContainer,
  CounterCardBody,
  ContainerBtn,
  BtnPlus,
  BtnMinus,
} from './counter.styled';

import React from 'react';

const Counter = () => {
  const [total, setTotal] = useState(0);

  const handleClickIncrement = () => {
    setTotal(prevState => prevState + 1);
  };

  const handleClickDicrement = () => {
    setTotal(prevState => prevState - 1);
  };

  return (
    <CounterBckGColor>
      <SubContainer>
        <CounterCardBody>
          <h1>Counter</h1>
          <p>{total} </p>
          <ContainerBtn>
            <BtnPlus onClick={handleClickIncrement}> + </BtnPlus>
            <BtnMinus onClick={handleClickDicrement}> - </BtnMinus>
          </ContainerBtn>
        </CounterCardBody>
      </SubContainer>
    </CounterBckGColor>
  );
};

export default Counter;

// class Counter extends Component {
//   state = {
//     value: 0,
//   };
//   handleClickIncrement = () => {
//     this.setState(prevState => {
//       return { value: prevState.value + 1 };
//     });
//   };
//  handleClickDicrement = () => {
//     this.setState(prevState => {
//       return { value: prevState.value - 1 };
//     });
//   };
//   render() {
//     const { value } = this.state;
//     return (
//       <CounterBckGColor>
//         <SubContainer>
//           <CounterCardBody>
//             <h1>Counter</h1>
//             <p>{value} </p>
//             <ContainerBtn>
//               <BtnPlus onClick={this.handleClickIncrement}> + </BtnPlus>
//               <BtnMinus onClick={this.handleClickDicrement}> - </BtnMinus>
//             </ContainerBtn>
//           </CounterCardBody>
//         </SubContainer>
//       </CounterBckGColor>
//     );
//   }
// }

// export default Counter;
