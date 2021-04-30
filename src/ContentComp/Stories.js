import Storie from "./Storie";

export default function Stories(){
    const storiesData = [
        {imagem: "assets/img/9gag.svg", user: "9gag"},
        {imagem: "assets/img/meowed.svg", user: "meowed"},
        {imagem: "assets/img/barked.svg", user: "barked"},
        {imagem: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
        {imagem: "assets/img/wawawicomics.svg", user: "wawawicomics"},
        {imagem: "assets/img/respondeai.svg", user: "respondeai"},
        {imagem: "assets/img/filomoderna.svg", user: "filomoderna"},
        {imagem: "assets/img/memeriagourmet.svg", user: "memeriagourmet"}
    ];
    return (
        <>
            <div class="stories">
                {storiesData.map(storieData => (<Storie image={storieData.imagem} username={storieData.user}/>))}   
            </div>
        </>
    );
}
