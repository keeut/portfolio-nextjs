import React from 'react';
import styles from './details.module.css'

const Details = (props) => {
    const onCloseDetails = () =>{
        props.onCloseDetails()
    }
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p>
                    저는 무언가를 발명하고 만들어내는 것을 좋아합니다
                </p>
                <p>    
                    뭔가를 발명해내는 곳이라 생각해 기계공학과에 가게 되었고, 한양대학교 기계공학과를 졸업하였지만
                    생각한 것을 만들어내는 것은 기계공학과의 취직과는 거리가 멀었습니다.
                </p>
                <p>
                    그렇게 최신기술에 가까이 있는 직업에 대해 고민을 거듭하고 변리사를 준비하였으나 적성이 맞지않아 실패하였고
                    깔끔하게 포기했습니다. 이후 &quot;내가 진정 하고싶은 것이 뭘까&quot;를 더욱 고민하게 되었습니다. 
                </p>
                <p>
                    그렇게 고민한 결과, 컴퓨터로 생각한 것을 만들어보고 구현해보는
                    개발자를 생각하게 되었고, 시작해보니 매우 매력적이였고 진정한 꿈을 찾았다는 확신이 들었습니다.
                </p>
                <p>
                    실패한 모든 경험들과 시간들... 매우 아깝지만 얻은 것이 많다고 생각합니다.(자기위로일지라도ㅎㅎ)
                    극한까지의 노력, 역경을 극복하는 멘탈, 제가 진정 희망하던 직업을 찾게해주었다고 믿고 있습니다.
                </p>
                <p>
                    빠른 성장으로 저의 실패를 성공의 밑거름으로 바꾸기 위해 노력할 것입니다.
                </p>
               
            </div>
            <div className={styles.exit} onClick={onCloseDetails}>닫기</div>
            
        </div>
    );
};

export default Details;