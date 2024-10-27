
import { NavBarLink } from "@/types";
import Link from "next/link";




export default function NavBar()
{
    const LINKS : Array<NavBarLink> = [
        new NavBarLink('/','Home'),
        new NavBarLink('/livros','Catálogo'),
        new NavBarLink('/livros/new','Novo Livro')
    ]
    function getLinks()
    {
        return LINKS.map((item,index)=>
            <li key={index} className="nav-item" >
                
                <Link className="nav-link text-white" color="white"   href={item.to}>{item.label}</Link>

            </li>
        )
    }


    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {getLinks()}
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}