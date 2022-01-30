import { FaPlus, FaMinus } from "react-icons/fa";
import styled, { css } from "styled-components";

const AmountPicker = ({ value, onAdd, onMinus, onChangeValue, style }) => {
  console.log(value);
  return (
    <AmountPickerWrapper style={style}>
      <FaMinus onClick={onMinus} style={{ cursor: "pointer" }} />
      <AmountInput
        value={parseInt(value, 10)}
        maxLength={2}
        minLength={0}
        type="tel"
        onChange={(e) => {
          if (+e.target.value > 99) return;
          onChangeValue(parseInt(e.target.value, 10) || 0);
        }}
      />
      <FaPlus onClick={onAdd} style={{ cursor: "pointer" }} />
    </AmountPickerWrapper>
  );
};

const AmountPickerWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.style.distance &&
    css`
      gap: 0.2rem;
      > input {
        width: 9rem;
        font-size: ${props.style.fontSize};
      }
    `};
`;

const AmountInput = styled.input`
  padding: 0.8rem;
  font-family: "Inconsolata", sans-serif;
  font-size: 2.3rem;
  width: 13rem;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

export default AmountPicker;
