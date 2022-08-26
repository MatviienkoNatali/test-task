import '../../style/global.scss';
import "./Hero.module.scss";
import img from '../../images/image.jpeg';

function Hero() {
    function handleClick(){
        const frame = document.querySelector('.iframe-video');
        const iconYouTube = document.querySelector('.icon-youTube');

        if(!frame.getAttribute('src')){
            const link  = frame.dataset.src;
            frame.setAttribute('src', link);
            frame.removeAttribute('data-src');
            frame.classList.add('active');
            iconYouTube.style.display="none";
        }
    }
    return (
        <section className="hero">
            <div className="container">
                <div className="col wrap">
                    <h1>embed RK1K2bCg4J8</h1>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa deserunt dignissimos enim ?</p>
                    <a className='link' href="https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s</a>
                </div>
                <div className="col">
                    <button onClick={handleClick}>
                        <picture className="icon-youTube">
                            <img src={img} alt="img-iframe"/>
                        </picture>
                        <iframe className="iframe-video" allow="autoplay;" allowFullScreen height="0" width="100%" data-src="https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s" title="img-iframe" frameBorder="0"></iframe>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
