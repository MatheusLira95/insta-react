export default function Fundo(props){
    const actions = ["heart-outline","chatbubble-outline","paper-plane-outline"]
    return (
        <>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        {actions.map(action => (<ion-icon name={action}></ion-icon>))}
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.imagemCurtiu} />
                    <div class="texto">
                        Curtido por <strong> {props.perfilCurtiu} </strong> e <strong>outras {props.numeroCurtiu} pessoas</strong>
                    </div>
                </div>
            </div>
        </>
    );
}