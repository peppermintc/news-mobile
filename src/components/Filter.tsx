import styled from "styled-components";

interface FilterProps {
  iconSrc?: string;
  label: string;
}

const Container = styled.div`
  height: 34px;
  border: 1px solid #c4c4c4;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px 6px 12px;
  font-size: 14px;
  color: #6d6d6d;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const Filter = ({ iconSrc, label }: FilterProps) => {
  return (
    <Container>
      {iconSrc && <Icon src={iconSrc} alt="icon" />}
      <span>{label}</span>
    </Container>
  );
};

export default Filter;
