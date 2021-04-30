export default function MobileBkGrd(){
    const icons = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];
    return (
        <>
            <div class="fundo-mobile">
                {icons.map(i => (<ion-icon name={i}></ion-icon>))}
            </div>
        </>
    );
}
