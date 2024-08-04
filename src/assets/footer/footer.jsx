import gitB from '../img/gitblack.png';
import notion from '../img/notion.png';


import './footer.css'

function Footer(){
    return(
        <footer>
            <div className='year'>
                <div>eii1998@naver.com</div>
                <div>kakaotalk : eii1998</div>
            </div>
        <section id='contact' className="footer">
                <h2>CONTACT ME</h2>
                <h4>THANK YOU FOR VISIT</h4>
                <h3>Mina Choi</h3>
                <p>010-7607-1998</p>
                <div>
                    <a href="https://github.com/pichiss" target='_blank'><img src={gitB} alt="git icon" className='git'/></a>
                    <a href="https://lumpy-indigo-956.notion.site/d11cc369b5a440c1910a8a2e36e14ff8?pvs=4" target='_blank'><img src={notion} alt="notion" className='notion'/></a>
                </div>
        </section>
        </footer>
    )
}

export default Footer;