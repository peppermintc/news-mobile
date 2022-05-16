import styled from "styled-components";
import FilterButton from "./FilterButton";
import SearchIcon from "../img/searchIcon.png";
import SearchIconBlue from "../img/searchIconBlue.png";
import CalendarIcon from "../img/calendarIcon.png";
import CalendarIconBlue from "../img/calendarIconBlue.png";
import HomeFilterModal from "./HomeFilterModal";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #c4c4c4;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
`;

const HomeFilterBar = () => {
  const isHomeModalOpen = useSelector(
    (state: RootState) => state.news.homeModalOpen
  );
  const homeFilter = useSelector((state: RootState) => state.news.homeFilter);

  const getCountryLabel = () => {
    if (homeFilter.country.length === 0) return "전체 국가";
    else
      return `${homeFilter.country[0]} 외 ${homeFilter.country.length - 1}개`;
  };

  return (
    <>
      <Container>
        <FilterButton
          iconSrc={homeFilter.headline === "" ? SearchIcon : SearchIconBlue}
          label={homeFilter.headline || "전체 헤드라인"}
          isSelected={homeFilter.headline !== ""}
        />
        <FilterButton
          iconSrc={homeFilter.date === "" ? CalendarIcon : CalendarIconBlue}
          label={homeFilter.date || "전체 날짜"}
          isSelected={homeFilter.date !== ""}
        />
        <FilterButton
          label={getCountryLabel()}
          isSelected={homeFilter.country.length !== 0}
        />
      </Container>
      {isHomeModalOpen && <HomeFilterModal />}
    </>
  );
};

export default HomeFilterBar;
