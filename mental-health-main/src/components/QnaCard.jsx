import React from 'react';
import './QnaCard.css';
import QandAimg from "../assets/QandAimg.svg";

const QnaCard = ({Qna_Question, Qna_Answer_title, Qna_Answer_para}) => {
  return (
    <div className='Qna-card'>
        <div className='Qna-card-top'>
            <img src={QandAimg} alt="ask" />
            <div className='Qna-top-txt'>{Qna_Question}</div>
        </div>
        <div className='Qna-card-bottom'>
            <div className='Qna-bottom-txt1'>{Qna_Answer_title}</div>
            <div className='Qna-bottom-txt2'>{Qna_Answer_para}</div>
        </div>
    </div>
  )
}

export default QnaCard