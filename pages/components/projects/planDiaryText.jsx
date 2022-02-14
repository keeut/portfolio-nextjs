import React from 'react';
import styles from './planDiaryText.module.css'

const PlanDiaryText = (props) => (
    <div className={styles.container}>
        <p>월,일 별로 계획을 세우고 보여주는 웹 서비스입니다.</p>
        <p>처음으로 스스로 프론트앤드와 백앤드를 구현해보아 server와 client의 역할, CSR등 웹의 전반적인 흐름을 알 수 있도록 도움을 준 프로젝트입니다</p>
        <p>많은 Plan들의 보관을 각각의 component에서 하기에는, 중복되고 연쇄적인 rerendering이 발생하여 Context API을 사용하였습니다.</p>
        <p>React-dev-tool을 이용해 성능을 점검해보며 memo, useCallback을 이용하였습니다. <a target='_blank' className={styles.a} href="https://keeut.tistory.com/7">블로그 글 확인</a></p>
        <p>첫 프로젝트에서 예상치 못하게 까다로웠던 것은 CSS였습니다. 생각처럼 구현하는 것이 쉽지 않았지만 css에 익숙해도록 도움이 되었습니다.</p>
    </div>   
    );

export default PlanDiaryText;