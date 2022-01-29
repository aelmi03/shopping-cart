import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";

const AmountPicker = (props) => {
  return (
    <AmountPickerWrapper>
      <FaMinus />
      <AmountInput value={0} max={999} min={0} />
      <FaPlus />
    </AmountPickerWrapper>
  );
};

const AmountPickerWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const AmountInput = styled.input`
  padding: 0.8rem;
  font-family: "Inconsolata", sans-serif;
  font-size: 2.3rem;
  width: 13rem;
  text-align: center;
`;

export default AmountPicker;
