import './HomePage.scss'

import React from 'react'

import styled from 'styled-components'
import { css } from 'emotion'

export default function HomePage() {
  return (
    <Styled className="HomePage">
      <div
        className={css`
          background-image: url('https://grepp-programmers-challenges.s3.ap-northeast-2.amazonaws.com/2020-myrealtrip/image/hotel_8-min.jpg');
          background-size: cover;
          filter: blur(5px);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        `}
      />
      <div className="main-text">
        Hello, My Hotels!{' '}
        <span className="HomePage__logo" role="img" aria-label="Hotel">
          🏨
        </span>
      </div>
    </Styled>
  )
}

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .main-text {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    z-index: 1;
    color: #fff;
    font-size: 5rem;
  }
`
