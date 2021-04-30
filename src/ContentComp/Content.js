import Esquerda from "./Esquerda";
import Sidebar from "./Sidebar";
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