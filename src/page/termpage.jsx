
import { Link } from 'react-router-dom'
import Maincss from './css/style.module.css'

const Termpage = () => {
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
                <li>
                    <Link to='/board'>커뮤니티</Link>
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
        </>
    )

}

export default Termpage