import styled from "styled-components";
import FilterButton from "./FilterButton";
import SearchIcon from "../img/searchIcon.png";
import SearchIconBlue from "../img/searchIconBlue.png";
import CalendarIcon from "../img/calendarIcon.png";
import CalendarIconBlue from "../img/calendarIconBlue.png";
import ScrapFilterModal from "./ScrapFilterModal";
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

const ScrapFilterBar = () => {
  const isScrapModalOpen = useSelector(
    (state: RootState) => state.news.scrapModalOpen
  );
  const scrapFilter = useSelector((state: RootState) => state.news.scrapFilter);

  const getCountryLabel = () => {
    if (scrapFilter.country.length === 0) return "전체 국가";
    else
      return `${scrapFilter.country[0]} 외 ${scrapFilter.country.length - 1}개`;
  };

  return (
    <>
      <Container>
        <FilterButton
          iconSrc={scrapFilter.headline === "" ? SearchIcon : SearchIconBlue}
          label={scrapFilter.headline || "전체 헤드라인"}
          isSelected={scrapFilter.headline !== ""}
        />
        <FilterButton
          iconSrc={scrapFilter.date === "" ? CalendarIcon : CalendarIconBlue}
          label={scrapFilter.date || "전체 날짜"}
          isSelected={scrapFilter.date !== ""}
        />
        <FilterButton
          label={getCountryLabel()}
          isSelected={scrapFilter.country.length !== 0}
        />
      </Container>
      {isScrapModalOpen && <ScrapFilterModal />}
    </>
  );
};

export default ScrapFilterBar;
