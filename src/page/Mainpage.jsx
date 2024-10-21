import styled from "styled-components"
import Maincss from './css/style.module.css'
import { Link } from "react-router-dom"

const Mainpage = () => {

    const Header = styled.header`
        background-image: url('images/header_img.png');
        background-size: cover;
        background-position: center;
        height: 60vh;
        background-position-y: 60vh;
    `

  return (
    <>
      <Header className={Maincss.site_header}>
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
              <div className={Maincss.site_p}>
                  <p>EcoGourmet을 통해<br></br> 여러분의 텃밭을 완성하세요.</p>
                  <p>저희는 여러분들의 농업의 길에 관심을 가지게 하기위해<br></br> 늘 노력합니다.</p>
                  <div>
                      <div className={Maincss.box1}>
                          <p>Get started</p>
                      </div>
                      <div className={Maincss.box2}>
                          <p>Learn More</p>
                          <img src="./images/arrow-right.png" alt="#"></img>
                      </div>
                  </div>
              </div>
      </Header>
      <main className={Maincss.container}>
        <div className={Maincss.p0}>
            <div className={Maincss.p1}>
                <p>도매시장 경락가격</p>
            </div>
            <div className={Maincss.p2}>
                <p>더보기</p>
                <img src="./images/icons8-right-48.png" alt="#"></img>
            </div>
      </div>
          <div className={Maincss.main_box}>
              <div className={Maincss.b1}>
                  <img src="./images/Rectangle 17 (1).png" alt="#"></img>
                  <div className={Maincss.boxText}>
                      <p>감자</p>
                      <img src="./images/right.png" alt="#"></img>
                  </div>
              </div>
            
              <div className={Maincss.b1}>
                  <img src="./images/Rectangle 17 (2).png" alt="#"></img>
                  <div className={Maincss.boxText}>
                      <p>토마토</p>   
                      <img src="./images/right.png" alt="#"></img>
                  </div>
              </div>
              <div className={Maincss.b1}><img src="./images/Rectangle 17.png" alt="#"></img>
                  <div className={Maincss.boxText}>
                      <p>상추</p>
                      <img src="./images/right.png" alt="#"></img>
                  </div>
              </div>
          </div>
          <div className={Maincss.p0}>
              <div className={Maincss.p1}>
                  <p>텃밭 분양 상세정보</p>
              </div>
              <div className={Maincss.p2}>
                  <p>더보기</p>
                  <img src="./images/icons8-right-48.png" alt="#"></img>
              </div>
          </div>  
          <div className={Maincss.main_box}>
              <div className={Maincss.b1}>
                  <img src="./images/Rectangle 17 (1).png" alt="#"></img>
                  <div className={Maincss.boxText}>
                      <p>텃밭A</p>
                      <img src="./images/right.png" alt="#"></img>
                  </div>
              </div>
            
              <div className={Maincss.b1}>
                  <img src="./images/Rectangle 17 (2).png" alt="#"></img>
                  <div className={Maincss.boxText}>
                      <p>텃밭B</p>   
                      <img src="./images/right.png" alt="#"></img>
                  </div>
              </div>
              <div className={Maincss.b1}><img src="./images/Rectangle 17.png" alt="#"></img>
                  <div className={Maincss.boxText}>
                      <p>텃밭C</p>
                      <img src="./images/right.png" alt="#"></img>
                  </div>
              </div>
          </div>
          <div className={Maincss.padding}>
              
          </div>
      </main>
          <footer>
              <div className={Maincss.footer_logo}>
                  <p>EcoGourmet</p>
              </div>
              <div className={Maincss.About}>
                  <p>About</p>
                  <p>About</p>
                  <p>About</p>
                  <p>About</p>
                  <p>About</p>
              </div>
              <div className={Maincss.footer_icon}>
                  <img src="./images/discord-brands-solid (2).svg" alt="#"></img>
                  <img src="./images/facebook_icon.svg" alt="#"></img>
                  <img src="./images/instargram_icon.svg" alt="#"></img>
                  <img src="./images/twitter_icon.svg" alt="#"></img>
                  <img src="./images/youtube_icon.svg" alt="#"></img>
              </div>
              <div className={Maincss.copyright}>
                  <p>Copyright @ EcoGourmet. All Right Reserved</p>
              </div>
      </footer>
    </>
  )
}

export default Mainpage