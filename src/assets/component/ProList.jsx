function ProList (){
    const proList=[
        {id : 1,
        num : '01',
        name : '고궁의 밤',
        cate : 'Team project',
        date : '2024.05.16~2024.06.18 (총 33일)',
        text : `첫번째 팀 프로젝트인 고궁의밤입니다.
        고궁의 밤은 경복궁 별빛야행과 창덕궁 달빛기행의
        소개홈페이지로 제가 맡은 부분은 메인의 three.js와
        footer, 관광안내입니다.`,
        use : ['react', 'vite', 'fiber']
        },
        {id : 1,
            num : '01',
            name : '고궁의 밤',
            cate : 'Team project',
            date : '2024.05.16~2024.06.18 (총 33일)',
            text : '첫번째 팀 프로젝트인 고궁의밤입니다.고궁의 밤은 경복궁 별빛야행과 창덕궁 달빛기행의 소개홈페이지로 제가 맡은 부분은 메인의 three.js와footer, 관광안내입니다.'
            },
    ]

    return(
        <section>
            {proList.map(function(pro){
                return(
                    <div>
                    <p>{pro.num}</p>
                    <span>{pro.text}</span>
                    <p>{pro.use}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default ProList;