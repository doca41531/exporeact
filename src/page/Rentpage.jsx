
import { Link } from 'react-router-dom'
import Maincss from './css/style.module.css'
import styled from "styled-components"

const Rentpage = () => {

    const rent = [{
            "num" : "01",
            "location" : "남양주시 조안면 송촌리 964",
            "proprietor" : "김 형 식 (☏010-4065-9224)"
        },{
            "num" : "02",
            "location" : "남양주시 조안면 삼봉리 347",
            "proprietor" : "김 형 식 (☏010-4065-9224)"
        },{
            "num" : "03",
            "location" : "양평군 양서면 부용리 647-1",
            "proprietor" : "이성근 (☏010-3721-8119)"
        },{
            "num" : "04",
            "location" : "양평군 양서면 부용리 582-1",
            "proprietor" : "민 기 영 (☏010-9009-6284, 010-5325-6764)"
        },{
            "num" : "05",
            "location" : "양평군 서종면 수능리 395-1",
            "proprietor" : "이 상 국 (☏010-7668-2021)"
        },{
            "num" : "06",
            "location" : "광주시 남종면 귀여리 393-2",
            "proprietor" : "홍 현 섭(☏010-9105-7137)"
        },{
            "num" : "07",
            "location" : "광주시 퇴촌면 도마리 203",
            "proprietor" : "최 응 범 (☏010-3309-4536)"
        },{
            "num" : "08",
            "location" : "고양시 덕양구 성사동 617-3",
            "proprietor" : "강 신 모 (☏010-9253-6387)"
        },{
            "num" : "09",
            "location" : "고양시 덕양구 성사동 604-3",
            "proprietor" : "강 신 모 (☏010-9253-6387)"
        },{
            "num" : "11",
            "location" : "강서구 개화동 497-2",
            "proprietor" : "류 예 환 (☏)"
        }]

        const Main = styled.main`

            > div > div > p{
                font-size: 30px;
                font-weight: bold;
            }
            > div > div > a{
                font-size: 20px;
            }
            > div {
                margin-top: 30px;
            }    
            > div > div:nth-child(1){
                display: flex;
                justify-content: space-between;
                padding: 0px 10px 0px 10px;
            }
            > div > div:nth-child(2){
                display: flex;
                gap: 40px;
                overflow: scroll;
            }
        `

    return(
        <>
        <header className={Maincss.site_header}>
            <nav className={Maincss.gnb}>
                <h3 className={Maincss.header_logo}>
                    <a href="#"><p className={Maincss.title_logo}>EcoGourmet</p></a>
                </h3>
                    <ul>
                        <li>
                            <Link to='http://localhost:5173/price/'>홈</Link>
                        </li>
                        <li>
                            <Link to='http://localhost:5173/price/price'>도매시장</Link>
                        </li>
                        <li>
                            <Link to='http://localhost:5500/'>텃밭분양</Link>
                        </li>
                        <li>
                            <Link to='http://localhost:5173/price/board'>커뮤니티</Link>
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
        <Main>
            <div>
                <div>
                    <p className='title'>동행서울 친환경농장</p>
                    <a href="https://cityfarmer.seoul.go.kr/content.do?key=1905228829214#namYang01">자세히 보기 +</a>
                </div>
                <div>
                    {
                        rent.map((el) =>
                            <div key={el.num}>
                                <img src={"./images/rentImg/farmimg" + el.num + ".jpg"} alt="#" />
                                <p>{el.location}</p>
                                <p>{el.proprietor}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </Main>
        </>
    )

}

export default Rentpage