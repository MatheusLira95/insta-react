import Post from "./Post";

export default function Posts(){
    const postOwners = [
        {tag:"meowed", 
        imagemPerfil:"assets/img/meowed.svg", 
        imagemPost:"assets/img/gato-telefone.svg", 
        imagemCurtiu:"assets/img/respondeai.svg", 
        perfilCurtiu:"respondeai",
        numeroCurtiu:"101.523"
        },
        {tag:"barked", 
        imagemPerfil:"assets/img/barked.svg", 
        imagemPost:"assets/img/dog.svg", 
        imagemCurtiu:"assets/img/adorable_animals.svg", 
        perfilCurtiu:"adorable_animals",
        numeroCurtiu:"99.159"
        }
    ]
    return (
        <>
            <div class="posts">
                {postOwners.map(postOwner => 
                    (<Post 
                    tag={postOwner.tag} 
                    imagemPerfil={postOwner.imagemPerfil} 
                    imagemPost={postOwner.imagemPost}
                    imagemCurtiu={postOwner.imagemCurtiu} 
                    perfilCurtiu={postOwner.perfilCurtiu}
                    numeroCurtiu={postOwner.numeroCurtiu} 
                    />)
                    )
                }
            </div>
        </>
    );
}




