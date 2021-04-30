export default function NavBar(){
    const sugestoes = [
        {imagem: "assets/img/bad.vibes.memes.svg", tag: "bad.vibes.memes", razao: "Segue você"},
        {imagem: "assets/img/chibirdart.svg", tag: "chibirdart", razao: "Segue você"},
        {imagem: "assets/img/razoesparaacreditar.svg", tag: "razoesparaacreditar", razao: "Novo no Instagram"},
        {imagem: "assets/img/adorable_animals.svg", tag: "adorable_animals", razao: "Segue você"},
        {imagem: "assets/img/smallcutecats.svg", tag: "smallcutecats", razao: "Segue você"},
    ]
    return (
        <>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoes.map(sugestao => (
                    <div class="sugestao">
                        <div class="usuario">
                            <img src={sugestao.imagem} />
                            <div class="texto">
                                <div class="nome">{sugestao.tag}</div>
                                <div class="razao">{sugestao.razao}</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                ))}
            </div>
        </>
    );    
}