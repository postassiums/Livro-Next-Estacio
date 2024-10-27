import { LayoutProp } from "@/types";
import NavBar from "./NavBar";



export default function MainLayout({children} : LayoutProp)
{
    return (
        <>
        <NavBar>

        </NavBar>
        <main className="container mt-5">
            {children}
        </main>
        </>
    )
}