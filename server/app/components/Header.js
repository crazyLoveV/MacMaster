import React from "react";
import logoImg from '../images/main_logo.png';
import userImg from '../images/favicon.png';
import basketImg from '../images/favicon.png';


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="mainHeader">
                <nav>
                    <table border={"0px"}>
                        <tbody>
                        <tr>
                            <td>
                                <div className="logo"><a href="/main"><img src={logoImg} alt=""/></a></div>
                            </td>
                            <td>
                                <div className="section"><a href="/main">Главная</a></div>
                            </td>
                            <td>
                                <div className="section"><a href="/goods">Товары</a></div>
                            </td>
                            <td>
                                <div className="section"><a href="/for_buyers">Покупателям</a></div>
                            </td>
                            <td>
                                <div className="section"><a href="/about_us">О нас</a></div>
                            </td>
                            <td>
                                <div className="searchField">
                                    <input type="search"></input>
                                    <button>Search</button>
                                </div>
                            </td>
                            <td>
                                <div className="userBtns">
                                    <a href="basket"><img src={basketImg} alt="" height="20px" width="20px"/></a>
                                    <a href="user"><img src={userImg} alt="" height="20px" width="20px"/></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </nav>
            </header>
        )
    }
}


export default Header