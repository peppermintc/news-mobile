import { useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../hooks/useActionCreators";
import { RootState } from "../modules";

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
  const currentPage = useSelector((state: RootState) => state.news.currentPage);

  const { openHomeModal, openScrapModal } = useActionCreators();

  const onFilterClick = () => {
    if (currentPage === "home") return openHomeModal();
    if (currentPage === "scrap") return openScrapModal();
  };

  return (
    <Container onClick={onFilterClick}>
      {iconSrc && <Icon src={iconSrc} alt="icon" />}
      <span>{label}</span>
    </Container>
  );
};

export default Filter;
