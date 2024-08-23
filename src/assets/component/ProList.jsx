import Team1 from '../img/proimg/image 148.png';
import Team2 from '../img/proimg/image 149.png';
import Team3 from '../img/proimg/image 150.png';
import Team4 from '../img/proimg/image 151.png';
import per1 from '../img/proimg/image 111.png';
import per2 from '../img/proimg/image 112.png';
import toy from '../img/proimg/todo.png';
import mockupIcon from '../img/proimg/Group 89.png'
import gitIcon from '../img/proimg/Group 90.png'
import gopageIcon from '../img/proimg/Group 91.png'

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
            moAlt : '고궁의 밤',
            mockup : '',
            gitpage : 'https://github.com/JURAMII/Team_Period',
            gopage : 'https://juramii.github.io/Team_Period/'
        },
        {id : 2,
            num : '02',
            name : '캐치! 수학몬스터즈',
            cate : 'Team project',
            date : '2024.07.08~2024.08.06 (총 30일)',
            text : `두번째 팀 프로젝트 캐치! 수학몬스터즈입니다.
디지털교과서로 학습하는 사이트입니다. 
제가 맡은 부분은 서브탭메뉴 틀잡기, FAQ, 
학습하기의 포인트샵,내정보, 1:1문의입니다`,
            desk : Team3,
            mobile : Team4,
            moAlt : '캐치! 수학몬스터즈',
            gitpage : 'https://github.com/pichiss/TeamMMs',
            gopage : 'https://pichiss.github.io/TeamMMs/'
            }
    ]
    const soloList= [
        {id : 3,
        num : '03',
        name : '지코바 사이트 리뉴얼',
        cate : 'Persnal project',
        date : '2024.04.07~2024.04.22 (총 15일)',
        text : `개인프로젝트인 지코바 사이트 리뉴얼입니다.
기존의 지코바홈페이지에서 트렌드에 맞는 디자인으로
새롭게 만들어보았습니다.`,
        use : ['node.js', 'mySql'],
        desk : per1,
        mockup : '',
        gitpage : 'https://github.com/pichiss/gicova',
        gopage : 'https://pichiss.github.io/gicova/'
        },
        {id : 4,
        num : '04',
        name : '프론트엔드 사전',
        cate : 'Persnal project',
        date : '2024.05.03~2024.05.09 (총 7일)',
        text : `두번째 개인프로젝트인 프론트엔드 사전입니다.
CRUD 구현되어있습니다.`,
        use : ['react'],
        desk : per2,
        mockup : '',
        gitpage : 'https://github.com/pichiss/dictionary',
        gopage : 'https://pichiss.github.io/dictionary/'
            },
        {id : 5,
        num : '05',
        name : 'To do list',
        cate : 'Toy project',
        date : '2024.04.26 (총 1일)',
        text : `CRUD를 처음 배우고 익숙해지기위해
만들게된 토이프로젝트입니다.`,
        use : ['react'],
        desk : toy,
        gitpage : 'https://github.com/pichiss/todo',
        gopage : 'https://pichiss.github.io/todo/'
        }
    ]

    return(
        <>
            {teamList.map(function(pro){
                return(
                    <section className='prolist' key={pro.id}>
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
                                <a href={pro.gitpage} target='_blank'><img src={gitIcon} alt="gitIcon" />
                                <p>github</p>
                                </a>
                            </li>
                            <li>
                                <a href={pro.gopage} target='_blank'><img src={gopageIcon} alt="gopage" />
                                <p>go page</p>
                                </a>
                            </li>
                        </ul>
                        <img src={pro.desk} alt={pro.name} className='desk'
                        data-aos="fade-left"
                        data-aos-duration="1000"/>
                        <img src={pro.mobile} alt={pro.moAlt} className='mobile'
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        />
                    </div>
                    </section>
                )
            })}
             {soloList.map(function(pro){
                return(
                    <section className='prolist' key={pro.id}>
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
                                <a href={pro.gitpage} target='_blank'><img src={gitIcon} alt="gitIcon" />
                                <p>github</p>
                                </a>
                            </li>
                            <li>
                                <a href={pro.gopage} target='_blank'><img src={gopageIcon} alt="gopage" />
                                <p>go page</p>
                                </a>
                            </li>
                        </ul>
                        <img src={pro.desk} alt={pro.name} className='desk' 
                        data-aos="fade-left"
                        data-aos-duration="1000"/>
                        </div>
                    </section>
                )
            })}
            </>
    )
}

export default ProList;