import Esquerda from "./Esquerda/Esquerda";
import Sidebar from "./Sidebar/Sidebar";
export default function Content(){
    return (
        <>
            <div class="corpo">
                <Esquerda />
                <Sidebar />
            </div>
        </>
    );
};