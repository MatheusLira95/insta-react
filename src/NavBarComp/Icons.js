export default function Icons(){
    const icons = ["paper-plane-outline","compass-outline","heart-outline","person-outline"]
    return (
        <>
            <div class="icones">
                {icons.map(icon => (<ion-icon name={icon}></ion-icon>))}
            </div>

            <div class="icones-mobile">
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        </>
    );
}