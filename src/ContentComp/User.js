export default function User(){
    const user = {imagem: "assets/img/catanacomics.svg", tag: "catanacomics", name: "Catana" }
    return (
        <>
            <div class="usuario">
                <img src={user.imagem} />
                <div class="texto">
                    <strong>{user.tag}</strong>
                    {user.name}
                </div>
            </div>
        </>
    );
}