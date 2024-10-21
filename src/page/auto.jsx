import { useState, useEffect } from 'react';
import styled from 'styled-components';

const deselectedOptions = [
    'rustic',
    'antique',
    'vinyl',
    'vintage',
    'refurbished',
    '신품',
    '빈티지',
    '중고A급',
    '중고B급',
    '골동품'
  ];
  

const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';
// const activeBorderRadius = '1rem 1rem 0 0';
const inactiveBorderRadius = '1rem 1rem 1rem 1rem';

export const InputContainer = styled.div`
  margin-top: 8rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${inactiveBorderRadius};
  z-index: 3;
  box-shadow: 0;

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li {
    padding: 0 1rem;

    &.selected {
      background-color: lightgray;
    }
  }
`;

export const Autocomplete = () => {
    const [hasText, setHasText] = useState(false);
    // input에 입력값이 존재하는지 확인하는 용도
    const [inputValue, setInputValue] = useState('');
    // 입력 받은 input값을 저장하는 용도
    const [options, setOptions] = useState(deselectedOptions);
    // 자동완성으로 보여줄 값들을 저장하는 용도
  
    useEffect(() => {
      if (inputValue === '') {
        setHasText(false);
        setOptions([]);
      } else {
        setOptions(deselectedOptions.filter((option) => {
          return option.includes(inputValue)
        }))
      }
    }, [inputValue]);
    // input을 입력할 때마다, input을 포함(includes)한 요소들만 모아 options 배열 업데이트
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      console.log(event.target.value);
      setHasText(true);
    };
    // input의 onChange 이벤트 때, 입력값을 inputValue에 저장하고 hasText값 갱신
  
    const handleDropDownClick = (clickedOption) => {
      setInputValue(clickedOption);
    };
    // 보여지는 자동완성 값 중 하나를 클릭하면 해당 값이 input에 할당
  
    const handleDeleteButtonClick = (event) => {
      setInputValue('');
    };
    // 삭제 버튼을 누르면, inputValue를 초기화
  
    return (
      <div className='autocomplete-wrapper'>
        <InputContainer>
          <input onChange={handleInputChange} value={inputValue}></input>
          <div className='delete-button' onClick={handleDeleteButtonClick}>&times;</div>
        </InputContainer>
        {hasText && <DropDown options={options} handleComboBox={handleDropDownClick} />}
      </div>
    );
  };
  
  /* 자동완성 배열(options)에 들어간 값들이 드롭다운으로 보여지는 부분 */
  export const DropDown = ({ options, handleComboBox, selected }) => {
    return (
      <DropDownContainer>
        {options.map((option, index) => {
          // {console.log(option)}
          return (
            <li key = {index}
            onClick = {() => handleComboBox(option)}>
              {option}
            </li>
          )
        })}
      </DropDownContainer>
    );
  };