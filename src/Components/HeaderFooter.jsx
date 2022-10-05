import styled from "../App.module.scss"

function Header(){
    return (
        <header>
            <h1 className={styled.logo}>Домашние задания 7 "Б"</h1>
        </header>
    )
}

function Footer(){
    return (
        <footer>
            <h1 className={styled.logo}>Домашние задания 7 "Б"</h1>
        </footer>
    )
}

export {Header , Footer};