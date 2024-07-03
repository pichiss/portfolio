import Html from '../img/HTML.png'
import Css from '../img/CSS3.png'
import Vscode from '../img/Visual Studio.png'
import GitHub from '../img/GitHub.png'
import Js from '../img/JavaScript.png'
import React from '../img/React.png'
import Sql from '../img/SQL.png'
import Figma from '../img/Figma.png'
import Node from '../img/Delete Node.png'
import Three from '../img/Three.png'
import Illu from '../img/Adobe Illustrator.png'
import Photo from '../img/Adobe Photoshop-1.png'
import Blender from '../img/blender.png'
import Jquery from '../img/jquery.png'
import './skillcss.css'


function SkillList(){
    const skillList=[
        {id : 1,
        class : 'item1',
        name : 'vscode',
        src : Vscode,
        text : '주로 사용하는 코딩툴이며, 코딩에 편리한 확장프로그램들을 설치해 사용하고 있습니다.'
    },
        {id : 2,
        class : 'item2',
        name : 'github',
        src : GitHub,
        text : 'commit, push, pull, clone 등 git 명령어를 사용하여 레파지토리에 접근할 수 있습니다.'
    },
    {id : 3,
    class : 'item3',
    name : 'html',
    src : Html,
    text : '웹접근성, 표준성을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.'
    },
    {id : 4,
    class : 'item4',
    name : 'css',
    src : Css,
    text : 'position, display를 적절히 사용하여 반응형웹을 적용할 수 있습니다.'
    },
    {id : 5,
    class : 'item5',
    name : 'JavaScript',
    src : Js,
    text : 'Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할 수 있습니다.'
    },
    {id : 6,
    class : 'item6',
    name : 'React',
    src : React,
    text : 'React 구조와 여러가지 hook들을 잘 알고 있으며, 재사용 가능한 컴포넌트 설계를 할 수 있습니다.'
    },
    {id : 7,
    class : 'item7',
    name : 'Jquery',
    src : Jquery,
    text : '관련 라이브러리와 애니메이션, 여러 메소드들을 잘 활용할 수 있습니다.'
    },
    {id : 8,
    class : 'item8',
    name : 'MySQL',
    src : Sql,
    text : '로컬서버를 열어서 데이터를 주고 받을 수 있습니다.'
    },
    {id : 9,
    class : 'item9',
    name : 'Node.js',
    src : Node,
    text : '서버의 API를 구축할 수 있으며, DB와 연동하여 CRUD 기능을 수행할 수 있습니다.'
    },
    {id : 10,
    class : 'item10',
    name : 'photoshop',
    src : Photo,
    text : '마스크효과, 레이어 활용 등을 이용해 다양한 그래픽 요소를 제작할 수 있습니다.'
    },
    {id : 11,
    class : 'item11',
    name : 'Illustrator',
    src : Illu,
    text : '펜툴 활용과 기타도구들을 이용해서 벡터 형식의 디자인 요소를 제작할 수 있습니다.'
    },
    {id : 12,
    class : 'item12',
    name : 'Figma',
    src : Figma,
    text : '데스크톱, 모바일 UI/UX 시안을 작업 할 수 있습니다.'
    },
    {id : 13,
    class : 'item13',
    name : 'blender',
    src : Blender,
    text : '모델링과 텍스쳐링, 렌더링을 할 수 있으며 리깅과 애니메이션을 넣을 수 있습니다.'
    },
    {id : 14,
    class : 'item14',
    name : 'Three.js',
    src : Three,
    text : 'Camera, scene,light를 이용하여, 도형이나 glb를 불러와 여러 애니메이션효과를 넣을 수 있습니다.'
    }
]


    return(
    <>
    <div className='skillist'>
    {skillList.map(function(skill){
        return(
        <figure 
        className={skill.class} 
        data-aos="zoom-in"
        data-aos-duration="1000"
        >
        <img src={skill.src} alt={skill.name} />
        <p>{skill.name}</p>
        <figcaption>{skill.text}</figcaption>
    </figure>

        )
    })}
    </div>
    </> 
    )
}

export default SkillList;