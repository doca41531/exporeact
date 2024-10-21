
import { Link } from 'react-router-dom'
import Maincss from './css/style.module.css'
import Pricecss from './css/Pricestyle.module.css'
import { useEffect, useState } from 'react';
import getAgreeType from "./js/common";

const Pricepage = () => {
    const [Largevalue, setLargevalue] = useState('01');
    const [isOpen, setisOpen] = useState(false)
    const [price, setprice] = useState('0')
    const [midvalue, setmidvalue] = useState('01');
    const [response, setResponse] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [userType, setUserType] = useState('01');  // 사용자가 선택한 user_type을 저장
    const [options, setOptions] = useState([]);    // type select box의 옵션을 저장
  
    const closemodal = () => {
        setisOpen(false)
    }

    const openmodal = () => {
        setisOpen(true)
    }

    // user_type이 변경될 때 호출되는 핸들러
    const handleUserTypeChange = (selectedType) => {
      setUserType(selectedType);  // user_type을 업데이트
      // getAgreeType으로부터 선택된 user_type에 맞는 옵션을 불러옴
      const arrType = getAgreeType();
      if (arrType[selectedType]) {
        const newOptions = Object.entries(arrType[selectedType]).map(([value, label]) => ({ value, label }));
        setOptions(newOptions);  // options 상태 업데이트
      } else {
        setOptions([]);  // 선택된 값에 맞는 옵션이 없으면 빈 배열로 초기화
      }
    };
    useEffect(() => {
        handleUserTypeChange(Largevalue);
    }, [Largevalue]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const res = await fetch('http://127.0.0.1:5000/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Largevalue,midvalue }),  // 사용자가 입력한 이름을 JSON으로 변환하여 전송
        });
        
        const result = await res.json()
            setResponse(result.message);  // 서버로부터 받은 메시지를 상태에 저장
            setImageSrc(`data:image/png;base64,${result.image}`);
            setprice(result.price)
      } catch (error) {
        console.error("Error:", error);
        setResponse('Failed to fetch data');
      }
    }

    return(
        <>
        <header className={Maincss.site_header}>
            <nav className={Maincss.gnb}>
                <h3 className={Maincss.header_logo}>
                    <a href="#"><p className={Maincss.title_logo}>EcoGourmet</p></a>
                </h3>
                <ul>
                    <li>
                        <Link to='/'>홈</Link>
                    </li>
                    <li>
                        <Link to='/price'>도매시장</Link>
                    </li>
                    <li>
                        <Link to='/rent'>텃밭분양</Link>
                    </li>
                </ul>
                <div className={Maincss.login}>
                    <a href="#">login</a>
                    <div className={Maincss.login2}>
                        <p>Get Started</p>
                    </div>
                </div>
            </nav>
        </header>
        <main className={Pricecss.main}>
                <form onSubmit={handleSubmit}>
                    <div className={Pricecss.box_body}>
                        <div>
                            <p>대분류</p>
                            <div className={Pricecss.input_group}>
                                <span className="input-group-addon"><i className="fa fa-building"></i></span>
                                <select className="form-control" value={userType} name="user_type" onChange={(e) => {setLargevalue(e.target.value), handleSubmit, setLargevalue(e.target.value)}}>
                                    <option value="01">미곡류</option>
                                    <option value="02">맥류</option>
                                    <option value="03">두류</option>
                                    <option value="04">잡곡류</option>
                                    <option value="05">서류</option>
                                    <option value="06">과실류</option>
                                    <option value="07">수실류</option>
                                    <option value="08">과일과채류</option>
                                    <option value="09">과채류</option>
                                    <option value="10">엽경채류</option>
                                    <option value="11">근채류</option>
                                    <option value="12">조미채소류</option>
                                    <option value="13">양채류</option>
                                    <option value="14">산채류</option>
                                    <option value="15">농산물 종자류</option>
                                    <option value="16">특용작물류</option>
                                    <option value="17">버섯류</option>
                                    <option value="18">인삼류</option>
                                    <option value="19">약용작물류</option>
                                    <option value="20">화목류</option>
                                    <option value="21">초화류</option>
                                    <option value="22">난류</option>
                                    <option value="23">선인장/다육식물류</option>
                                    <option value="24">숙근류</option>
                                    <option value="25">구근류</option>
                                    <option value="26">관엽식물류</option>
                                    <option value="27">화훼종자류</option>
                                    <option value="28">기타화훼</option>
                                    <option value="29">산림종묘</option>
                                    <option value="30">수목류</option>
                                    <option value="31">목재류</option>
                                    <option value="32">합판.보드류</option>
                                    <option value="33">목재부산물</option>
                                    <option value="34">임산부산물</option>
                                    <option value="35">토.석류</option>
                                    <option value="36">절화류</option>
                                    <option value="37">관상수류</option>
                                    <option value="41">생축(가축)류</option>
                                    <option value="42">기타생축류</option>
                                    <option value="43">국내산육류</option>
                                    <option value="44">수입육류</option>
                                    <option value="45">기타육류</option>
                                    <option value="46">우유 및 유제품</option>
                                    <option value="47">기타동물생산물</option>
                                    <option value="49">비식용생산물</option>
                                    <option value="50">배합사료</option>
                                    <option value="51">양식용 어류사료</option>
                                    <option value="52">식물성단미사료</option>
                                    <option value="53">동물성단미사료</option>
                                    <option value="54">광물성단미사료</option>
                                    <option value="55">보조사료</option>
                                    <option value="56">조사료</option>
                                    <option value="57">정액,수정란,종란</option>
                                    <option value="58">사료, 목초종자</option>
                                    <option value="61">활 해면어류</option>
                                    <option value="62">활 해면패류</option>
                                    <option value="63">활 해면갑각류</option>
                                    <option value="64">활 해면연체류</option>
                                    <option value="65">활 해면기타</option>
                                    <option value="66">활 내수면어류</option>
                                    <option value="67">활 내수면기타</option>
                                    <option value="68">(활) 내수면기타 </option>
                                    <option value="69">(활) 내수면패류 </option>
                                    <option value="6A">(활) 내수면 갑각류 </option>
                                    <option value="6B">(활) 내수면 연체류 </option>
                                    <option value="6C">(활) 내수면 조류 </option>
                                    <option value="6D">(활) 내수면 양서류 </option>
                                    <option value="6E">(활) 내수면 파충류 </option>
                                    <option value="6Z">(활) 기타 </option>
                                    <option value="71">신선 해면어류</option>
                                    <option value="72">신선 해면패류</option>
                                    <option value="73">신선 해면갑각류</option>
                                    <option value="74">신선 해면연체류</option>
                                    <option value="75">신선 해면기타</option>
                                    <option value="76">신선 해조류</option>
                                    <option value="77">신선 내수면어류</option>
                                    <option value="78">신선 내수면기타</option>
                                    <option value="79">(신선) 내수면패류 </option>
                                    <option value="7A">(신선) 내수면 갑각류 </option>
                                    <option value="7B">(신선) 내수면 연체류 </option>
                                    <option value="7C">(신선) 내수면 조류 </option>
                                    <option value="7D">(신선) 내수면 양서류 </option>
                                    <option value="7E">(신선) 내수면 파충류 </option>
                                    <option value="7Z">(신선) 기타 </option>
                                    <option value="81">냉동 해면어류</option>
                                    <option value="82">냉동 해면패류</option>
                                    <option value="83">냉동 해면갑각류</option>
                                    <option value="84">냉동 해면연체류</option>
                                    <option value="85">냉동 해면기타</option>
                                    <option value="86">냉동 내수면어류</option>
                                    <option value="87">냉동 내수면기타</option>
                                    <option value="88">(냉동) 내수면기타 </option>
                                    <option value="89">건제품</option>
                                    <option value="8A">(냉동) 내수면 갑각류 </option>
                                    <option value="8B">(냉동) 내수면 연체류 </option>
                                    <option value="8C">(냉동) 내수면 조류 </option>
                                    <option value="8D">(냉동) 내수면 양서류 </option>
                                    <option value="8E">(냉동) 내수면 파충류 </option>
                                    <option value="8Z">(냉동) 기타 </option>
                                    <option value="91">농림가공</option>
                                    <option value="92">축산가공</option>
                                    <option value="93">수산가공</option>
                                    <option value="96">약재류</option>
                                    <option value="98">GMO농산물</option>
                                    <option value="99">LMO농산물</option>
                                    <option value="A1">(건) 해면어류 </option>
                                    <option value="A2">(건) 해면패류 </option>
                                    <option value="A3">(건) 해면갑각류 </option>
                                    <option value="A4">(건) 해면연체류 </option>
                                    <option value="A5">(건) 해면기타 </option>
                                    <option value="A6">(건) 해조류 </option>
                                    <option value="A7">(건) 내수면어류 </option>
                                    <option value="A8">(건) 내수면기타 </option>
                                    <option value="A9">(건) 내수면패류 </option>
                                    <option value="AA">(건) 내수면 갑각류 </option>
                                    <option value="AB">(건) 내수면 연체류 </option>
                                    <option value="AC">(건) 내수면 조류 </option>
                                    <option value="AD">(건) 내수면 양서류 </option>
                                    <option value="AE">(건) 내수면 파충류 </option>
                                    <option value="AZ">(건) 기타 </option>
                                    <option value="B1">(염장) 해면어류 </option>
                                    <option value="B2">(염장) 해면패류 </option>
                                    <option value="B3">(염장) 해면갑각류 </option>
                                    <option value="B4">(염장) 해면연체류 </option>
                                    <option value="B5">(염장) 해면기타 </option>
                                    <option value="B6">(염장) 해조류 </option>
                                    <option value="B7">(염장) 내수면어류 </option>
                                    <option value="B8">(염장) 내수면기타 </option>
                                    <option value="B9">(염장) 내수면패류 </option>
                                    <option value="BA">(염장) 내수면 갑각류 </option>
                                    <option value="BB">(염장) 내수면 연체류 </option>
                                    <option value="BC">(염장) 내수면 조류 </option>
                                    <option value="BD">(염장) 내수면 양서류 </option>
                                    <option value="BE">(염장) 내수면 파충류 </option>
                                    <option value="BZ">(염장) 기타 </option>
                                    <option value="C1">(조미) 해면어류 </option>
                                    <option value="C2">(조미) 해면패류 </option>
                                    <option value="C3">(조미) 해면갑각류 </option>
                                    <option value="C4">(조미) 해면연체류 </option>
                                    <option value="C5">(조미) 해면기타 </option>
                                    <option value="C6">(조미) 해조류 </option>
                                    <option value="C7">(조미) 내수면어류 </option>
                                    <option value="C8">(조미) 내수면기타 </option>
                                    <option value="C9">(조미) 내수면패류 </option>
                                    <option value="CA">(조미) 내수면 갑각류 </option>
                                    <option value="CB">(조미) 내수면 연체류 </option>
                                    <option value="CC">(조미) 내수면 조류 </option>
                                    <option value="CD">(조미) 내수면 양서류 </option>
                                    <option value="CE">(조미) 내수면 파충류 </option>
                                    <option value="CZ">(조미) 기타 </option>
                                    <option value="D1">(통조림) 해면어류 </option>
                                    <option value="D2">(통조림) 해면패류 </option>
                                    <option value="D3">(통조림) 해면갑각류 </option>
                                    <option value="D4">(통조림) 해면연체류 </option>
                                    <option value="D5">(통조림) 해면기타 </option>
                                    <option value="D6">(통조림) 해조류 </option>
                                    <option value="D7">(통조림) 내수면어류 </option>
                                    <option value="D8">(통조림) 내수면기타 </option>
                                    <option value="D9">(통조림) 내수면패류 </option>
                                    <option value="DA">(통조림) 내수면 갑각류 </option>
                                    <option value="DB">(통조림) 내수면 연체류 </option>
                                    <option value="DC">(통조림) 내수면 조류 </option>
                                    <option value="DD">(통조림) 내수면 양서류 </option>
                                    <option value="DE">(통조림) 내수면 파충류 </option>
                                    <option value="DZ">(통조림) 기타 </option>
                                    <option value="EZ">(연제품) 기타 </option>
                                    <option value="F6">(한천) 해조류 </option>
                                    <option value="G1">(어유) 해면어류 </option>
                                    <option value="H1">(어분) 해면어류 </option>
                                    <option value="I1">(어비) 해면어류 </option>
                                </select>
                                </div>
                            </div>
                            <div>
                                <p>중분류</p>
                                <div className={Pricecss.input_group}>
                                <select name="type" onChange={(e) => {setmidvalue(e.target.value)}}>
                                    {options.length > 0 ? (
                                        options.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))
                                    ) : (
                                        <>
                                        <option value="99">기타</option>
                                        <option value="00">미곡류(일반)</option>
                                        <option value="01">벼</option>
                                        <option value="02">밭벼</option>
                                        <option value="03">쌀</option>
                                        <option value="04">찹쌀</option>
                                        <option value="05">찰벼</option>
                                        <option value="06">현미</option>
                                        <option value="07">총체벼</option>
                                        </>
                                    )}
                                </select>
                                </div>
                            </div>
                    </div>
                    <button type='submit' className={Pricecss.btn_3d} onClick={openmodal}>제출</button>
                </form>
                {
                    isOpen && (
                        <div className={Pricecss.footer} >
                            <div className={Pricecss.popup}>
                                <div className={Pricecss.close} onClick={closemodal}>X</div>
                                {imageSrc ? <div><img src={imageSrc} alt="Flask generated plot" /><p>{Math.round(price)}원 / kg당</p></div> : <p>로딩 중...</p>} 
                            </div>
                        </div>
                    )
                }
        </main>
        </>
    )

}

export default Pricepage