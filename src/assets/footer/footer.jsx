import gitB from '../img/gitblack.png';
import notion from '../img/notion.png';


import './footer.css'

function Footer(){
    return(
        <footer>
        <section className="footer">
            <h2>CONTACT ME</h2>
            <h4>THANK YOU FOR VISIT</h4>
            <h3>Mina Choi</h3>
            <p>010-7607-1998</p>
            <div>
                <a href=""><img src={gitB} alt="git icon" className='git'/></a>
                <a href=""><img src={notion} alt="notion" className='notion'/></a>
            </div>
            <div className='year'>
        <div>eii1998@naver.com</div>
        <div>kakaotalk : eii1998</div>
    </div>
        </section>
        </footer>
    )
}

export default Footer;