import Team1 from '../img/proimg/image 148.png';
import Team2 from '../img/proimg/image 149.png';
import Team3 from '../img/proimg/image 134.png';
import Team4 from '../img/proimg/image 135.png';
import per1 from '../img/proimg/image 111.png';
import per2 from '../img/proimg/image 112.png';
import toy from '../img/proimg/image 138.png';
import mockup from '../img/proimg/Group 89.png'
import gitIcon from '../img/proimg/Group 90.png'
import gopage from '../img/proimg/Group 91.png'

import './prolist.css'

function ProList (){
    const teamList=[
        {id : 1,
            num : '01',
            name : '고궁의 밤',
            cate : 'Team project',
            date : '2024.05.16~2024.06.18 (총 33일)',
            text : `첫번째 팀 프로젝트인 고궁의밤입니다.
고궁의 밤은 경복궁 별빛야행과 창덕궁 달빛기행의
소개홈페이지로 제가 맡은 부분은 메인의 three.js와
footer, 관광안내입니다.`,
            use : ['react', 'vite', 'fiber'],
            desk : Team1,
            mobile : Team2,
            moAlt : '고궁의 밤'
        },
        {id : 2,
            num : '02',
            name : '개발중',
            cate : 'Team project',
            date : '2024.05.16~2024.06.18 (총 33일)',
            text : '두번째 팀 프로젝트 개발중입니다.',
            desk : Team3,
            mobile : Team4,
            moAlt : '개발중'
            }
    ]
    const soloList= [
        {id : 3,
        num : '01',
        name : '지코바 사이트 리뉴얼',
        cate : 'Persnal project',
        date : '2024.04.07~2024.04.22 (총 15일)',
        text : `개인프로젝트인 지코바 사이트 리뉴얼입니다.
기존의 지코바홈페이지에서 트렌드에 맞는 디자인으로
새롭게 만들어보았습니다.`,
        use : ['node.js', 'mySql'],
        desk : per1,
        },
        {id : 4,
        num : '02',
        name : '프론트엔드 사전',
        cate : 'Persnal project',
        date : '2024.05.03~2024.05.09 (총 7일)',
        text : `두번째 개인프로젝트인 프론트엔드 사전입니다.
CRUD 구현되어있습니다.`,
        use : ['react'],
        desk : per2,
            },
        {id : 5,
        num : '01',
        name : 'To do list',
        cate : 'Toy project',
        date : '2024.04.26 (총 1일)',
        text : `CRUD를 처음 배우고 익숙해지기위해
만들게된 토이프로젝트입니다.`,
        use : ['react'],
        desk : toy
        }
    ]

    return(
        <>
            {teamList.map(function(pro){
                return(
                    <section className='prolist'>
                    <div className='homeTxt'>
                        <p>{pro.num}</p>
                        <ul>
                            <li className='protit'>{pro.name}</li>
                            <li className='procate'>{pro.cate}</li>
                            <li className='prodate'>{pro.date}</li>
                            <li className='protext'>{pro.text}</li>
                        </ul>
                    </div>
                        <div className='homepage'>
                        <ul className='iconList'>
                            <li>
                                <a href=""><img src={mockup} alt="mockup" />
                                <p>mockup</p>
                                </a>
                            </li>
                            <li>
                                <a href=""><img src={gitIcon} alt="gitIcon" />
                                <p>github</p>
                                </a>
                            </li>
                            <li>
                                <a href=""><img src={gopage} alt="gopage" />
                                <p>go page</p>
                                </a>
                            </li>
                        </ul>
                        <img src={pro.desk} alt={pro.name} className='desk' />
                        <img src={pro.mobile} alt={pro.moAlt} className='mobile'/>
                    </div>
                    </section>
                )
            })}
             {soloList.map(function(pro){
                return(
                    <section className='prolist'>
                    <div className='homeTxt'>
                        <p>{pro.num}</p>
                        <ul>
                            <li className='protit'>{pro.name}</li>
                            <li className='procate'>{pro.cate}</li>
                            <li className='prodate'>{pro.date}</li>
                            <li className='protext'>{pro.text}</li>
                        </ul>
                    </div>
                        <div className='homepage'>
                        <ul className='iconList'>
                            <li>
                                <a href=""><img src={mockup} alt="mockup" />
                                <p>mockup</p>
                                </a>
                            </li>
                            <li>
                                <a href=""><img src={gitIcon} alt="gitIcon" />
                                <p>github</p>
                                </a>
                            </li>
                            <li>
                                <a href=""><img src={gopage} alt="gopage" />
                                <p>go page</p>
                                </a>
                            </li>
                        </ul>
                        <img src={pro.desk} alt={pro.name} className='desk' />
                    </div>
                    </section>
                )
            })}
            </>
    )
}

export default ProList;