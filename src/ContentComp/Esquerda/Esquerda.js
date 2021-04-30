import Stories from "./Storie/Stories";
import Posts from "./Posts/Posts";

export default function Esquerda(){
    return (
        <>
            <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
        </>
    );
}