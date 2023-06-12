import styled from 'styled-components';
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  /* z-index: 10; */
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`;
export const ModalWindow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: var(--modal-wndw-clr);
    max-width: 408px;
    min-height: 576px;
    width: 100%;
    border-radius: 4px;
    padding: 72px 24px 24px 24px;
`
export const ModalButton = styled.button`
  font-size: 14px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 14px;
  background-color: #0c290a;
  color: white;
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  &:hover {
    background-color: gray;
    color: navy;

    box-shadow: 0cap;
    transform: scale(1.1);
  }
`;

