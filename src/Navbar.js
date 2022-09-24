import { Link, useMatch, useResolvedPath } from "react-router-dom"
import 'boxicons'

export default function Navbar() {
    return ( < nav class = "sidebar close" >
        <
        header >
        <
        div class = "image-text" >
        <
        span class = "image" >
        <
        img src = "./img/Logo_excelsior.png"
        alt = "" >
        <
        /span>

        <
        div class = "text logo-text" >
        <
        span class = "name" > Excelsior < /span> <
        span class = "profession" > trading < /span> < /
        div > <
        /div>

        <
        i class = 'bx bx-chevron-right toggle' > < /i> < /
        header >

        <
        div class = "menu-bar" >
        <
        div class = "menu" >

        <
        li class = "search-box" >
        <
        i class = 'bx bx-search icon' > < /i> <
        input type = "text"
        placeholder = "Search..." >
        <
        /li>

        <
        ul class = "menu-links" >
        <
        li class = "nav-link" >
        <
        a href = "#" >
        <
        i class = 'bx bx-folder-open icon' > < /i> <
        span class = "text nav-text" > Portfolios < /span> < /
        a > <
        /li>

        <
        li class = "nav-link" >
        <
        a href = "#" >
        <
        i class = 'bx bxs-briefcase-alt-2 icon' > < /i> <
        span class = "text nav-text" > Manage Portfolio < /span> < /
        a > <
        /li>

        <
        li class = "nav-link" >
        <
        a href = "#" >
        <
        i class = 'bx bx-candles icon' > < /i> <
        span class = "text nav-text" > Quotes < /span> < /
        a > <
        /li> <
        li class = "nav-link" >
        <
        a href = "#" >
        <
        i class = 'bx bx-target-lock icon' > < /i> <
        span class = "text nav-text" > Adviser < /span> < /
        a > <
        /li>

        <
        li class = "nav-link" >
        <
        a href = "#" >
        <
        img src = "./img/stock-earnings-svgrepo-com.svg"
        class = 'bx-local' > < /img> <
        span class = "text nav-text" > Stock symbols < /span> < /
        a > <
        /li> <
        li class = "nav-link" >
        <
        a href = "#" >
        <
        i class = 'bx bx-bar-chart-alt-2 icon' > < /i> <
        span class = "text nav-text" > Reports < /span> < /
        a > <
        /li>



        <
        /ul> < /
        div >

        <
        div class = "bottom-content" >
        <
        li class = "" >
        <
        a href = "#" >
        <
        i class = 'bx bx-log-out icon' > < /i> <
        span class = "text nav-text" > Logout < /span> < /
        a > <
        /li>

        <
        li class = "mode" >
        <
        div class = "sun-moon" >
        <
        i class = 'bx bx-moon icon moon' > < /i> <
        i class = 'bx bx-sun icon sun' > < /i> < /
        div > <
        span class = "mode-text text" > Dark mode < /span>

        <
        div class = "toggle-switch" >
        <
        span class = "switch" > < /span> < /
        div > <
        /li>

        <
        /div> < /
        div >

        <
        /nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return ( <
        li className = { isActive ? "active" : "" } >
        <
        Link to = { to } {...props } > { children } <
        /Link> < /
        li >
    )
}