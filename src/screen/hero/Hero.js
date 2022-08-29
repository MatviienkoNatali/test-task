import '../../style/global.scss';
import "./Hero.module.scss";

function Hero() {
    const idVideo = 'RK1K2bCg4J8';
    const srcImgYT = `//img.youtube.com/vi/${idVideo}/0.jpg`;
    const srcVideoYT = `https://www.youtube.com/embed/${idVideo}?autoplay=1&mute=1`;

    function handleClick(){
        const player = document.querySelector('#player');
        player.innerHTML = `<iframe src=${srcVideoYT}" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'`
    }

    return (
        <section className="hero">
            <div className="container">
                <div className="col wrap">
                    <h1>embed RK1K2bCg4J8</h1>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa deserunt dignissimos enim ?</p>
                    <a className='link' href="https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s</a>
                </div>
                <div className="col" id="player">
                    <button onClick={handleClick}>
                        <picture className="icon-youTube">
                            <img src={srcImgYT} alt="img-iframe"/>
                        </picture>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
