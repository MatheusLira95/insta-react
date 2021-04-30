import Topo from "./Top-Cont-Fund/Topo";
import Conteudo from "./Top-Cont-Fund/Conteudo"
import Fundo from "./Top-Cont-Fund/Fundo"

export default function Post(props){
    return (
        <>
            <div class="post">
                <Topo tag={props.tag} imagemPerfil={props.imagemPerfil} />
                <Conteudo imagemPost={props.imagemPost} />
                <Fundo imagemCurtiu={props.imagemCurtiu} perfilCurtiu={props.perfilCurtiu} numeroCurtiu={props.numeroCurtiu}/>
            </div>
        </>
    );
}