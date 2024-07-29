import vali from './movie-images/Valimai-wm.jpg';
import ban from './movie-images/bigil.webp';
import cm from './movie-images/captain-miller.jpg';
import fir from './movie-images/fir.jpg';
import kad from './movie-images/kadaisila-briyani.jpg';
import kgf from './movie-images/kgf.webp';
import man from './movie-images/maanadu.webp';
import sp from './movie-images/soorarai-potru.jpg';
import sd from './movie-images/super-delux.jpg';
import td from './movie-images/thaandavam.jpg';
import titan from './movie-images/titanic.jpg';
import vip from './movie-images/vip.jpeg';
import Navbar from './Navbar';
import './movies.css';

export default function Movies() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="cnt1">
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt9260636/' target='_blank'><img className='images' src={ban} alt="Logo" /></a>
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt22170036/' target='_blank'><img className='images' src={cm} alt="Logo" /></a>
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt11441458/' target='_blank'><img className='images' src={kad} alt="Logo" /></a>
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt4983780/' target='_blank'></a><img className='images' src={man} alt="Logo" />
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt11468258/' target='_blank'><img className='images' src={fir} alt="Logo" /></a>
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt7838252/' target='_blank'><img className='images' src={kgf} alt="Logo" /></a>
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt10189514/' target='_blank'><img className='images' src={sp} alt="Logo" /></a>
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt2271641/' target='_blank'><img className='images' src={td} alt="Logo" /></a>
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt7852926/' target='_blank'><img className='images' src={titan} alt="Logo" /></a>
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt7019942/reviews' target='_blank'><img className='images' src={sd} alt="Logo" /></a>
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt0368400/' target='_blank'><img className='images' src={vali} alt="Logo" /></a>
                </div>
                <div className="cards">
                    <a href='https://www.imdb.com/title/tt3822396/' target='_blank'><img className='images' src={vip} alt="Logo" /></a>
                </div>
                <footer>
                    <p>&copy; 2024 My Website. All rights reserved.</p>
                    <p>Contact us at: <a href="mailto:chan638356@gmail.com">chan638356@gmail.com</a></p>
                    <p>
                        Follow us on:
                        <a href="https://x.com/mr_black_king_6" target='_blank'>Twitter</a> |
                        <a href="#">Facebook</a> |
                        <a href="https://www.instagram.com/mr._.chan._.06/" target='_blank'>Instagram</a>
                    </p>
                </footer>
            </div>
        </div>
    )
}