import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../hooks/useActionCreators";
import CalendarGray from "../img/calendarIcon.png";
import { Filter } from "../interfaces";
import { RootState } from "../modules";

const COUNTRIES = [
  "대한민국",
  "중국",
  "일본",
  "미국",
  "북한",
  "러시아",
  "프랑스",
  "영국",
];

const Background = styled.div`
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: white;
  border-radius: 16px;
  width: calc(100% - 40px);
  height: 480px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Inputs = styled.div`
  width: 100%;
  flex: 1;
`;

const Label = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 7px;
`;

const HeadLineInput = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  margin-bottom: 40px;

  &::placeholder {
    color: #c4c4c4;
  }
  &:focus {
    outline: none;
  }
`;

const DateInput = styled.div`
  width: 100%;
  height: 44px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #c4c4c4;
`;

const Countries = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CountryButton = styled.div`
  height: 34px;
  padding: 6px 12px 4px;
  border-radius: 30px;
  border: 1px solid #f2f2f2;
  font-size: 14px;
  color: #6d6d6d;
`;

const ApplyButton = styled.button`
  border: none;
  background-color: #3478f6;
  border-radius: 16px;
  color: white;
  font-weight: 600;
  width: 100%;
  height: 60px;
  &:focus {
    outline: none;
  }
`;

const HomeFilterModal = () => {
  const [filterValues, setFilterValues] = useState<Filter>();

  const homeFilter = useSelector((state: RootState) => state.news.homeFilter);

  const { closeHomeModal } = useActionCreators();

  const onHeadLineInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCurrentHeadLine = e.target.value;
    const newFilterValues: Filter = {
      ...homeFilter,
      currentHeadLine: newCurrentHeadLine,
    };

    setFilterValues(newFilterValues);
  };

  const onApplyButtonClick = () => {
    closeHomeModal();
  };

  return (
    <>
      <Container>
        <Inputs>
          <Label>헤드라인</Label>
          <HeadLineInput
            placeholder={"검색할 헤드라인을 입력해주세요."}
            onChange={onHeadLineInputChange}
          />

          <Label>날짜</Label>
          <DateInput>
            {"날짜를 정해주세요."}
            <img src={CalendarGray} alt="date" />
          </DateInput>

          <Label>국가</Label>
          <Countries>
            {COUNTRIES.map((country) => (
              <CountryButton>{country}</CountryButton>
            ))}
          </Countries>
        </Inputs>
        <ApplyButton onClick={onApplyButtonClick}>필터 적용하기</ApplyButton>
      </Container>
      <Background />
    </>
  );
};

export default HomeFilterModal;
