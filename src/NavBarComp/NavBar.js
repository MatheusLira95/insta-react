import Logos from "./Logos";
import Icons from "./Icons"

export default function NavBar(){
    return (
        <>
            <div class="navbar">
                <div class="container">
                    <Logos />
                    <div class="pesquisa">
                        <input type="text" placeholder="Pesquisar" />
                    </div>
                    <Icons />
                </div>
            </div>
        </>
    );
}