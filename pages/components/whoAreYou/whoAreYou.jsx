import React, { useState } from 'react';
import Title from '../title/title';
import Details from './details/details';
import styles from './whoAreYou.module.css'
import selfie from '../../../public/selfie.jpg'
import Image from 'next/image';

const WhoAreYou = (props) => {
    const [show,setShow] = useState(false)

    const onClick = () => {
        setShow(true)
    }
    const onCloseDetails=() =>{
        setShow(false)
    } 

    return(
        <article className={styles.article}>
            <Title name ='WHO ARE YOU'/>
            <div className={styles.container}>
                <div className={styles.img} > 
                <Image src={selfie} layout='intrinsic'/></div>
               
                <div className={styles.text}>
                    <p>
                        "끝"에서 꿈을 찾은 front-end 개발자 김태남 입니다.
                    </p>
                    <p> 
                        "나는 무엇을 하고 싶을까?"  라는 질문에 답을 오랜기간 찾아 헤맸고,
                        늦은 나이지만 결국 찾았기에, 열정이 불타오르고 배움에 목마른 뉴비입니다. 
                        <button className={styles.button} onClick = {onClick}>want TMI?</button>
                    </p>
                    {show&&<Details onCloseDetails={onCloseDetails}/>}
                    <p>
                        React와 Next.js 를 주로 사용합니다.
                    </p>
                    <p>
                        node.js의 web framework인 express.js와 mySQL를 이용해 간단한 서버를 만들어 본 경험이 있습니다.
                    </p>
                    <p>
                        배움에는 자신이 있어, 빠른 시일 내에 full-stack개발자가 되는 미래를 그리고 있습니다
                    </p>
                </div>
                                
            </div>

        </article>    
    );}

export default WhoAreYou;