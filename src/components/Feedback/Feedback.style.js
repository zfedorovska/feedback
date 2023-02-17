import styled from 'styled-components';

import cartoon1Src from '../../images/cartoon1.png';
import cartoon2Src from '../../images/cartoon2.png';
import cartoon3Src from '../../images/cartoon3.png';
import cartoon4Src from '../../images/cartoon4.png';
import mapSrc from '../../images/Map.png';

export const MainContainer = styled.div`
  min-width: 320px;
  max-width: 1440px;
  position: relative;
  background-image: url(${cartoon1Src}), url(${cartoon2Src}),
    url(${cartoon3Src}), url(${mapSrc});
  background-repeat: no-repeat;
  background-position: 29px 23px, 763px 516px, 762px 558px, 814px -28px;
`;

export const FeedbackFormBlock = styled.div`
  width: 310px;
  font-size: 40px;
  line-height: 130%;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    width: 470px;
  }
  @media screen and (min-width: 720px) {
    width: 563px;
    margin: 0;
    padding-top: 179px;
    padding-left: 130px;
  } ;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 250px;
  height: 53px;
  font-family: 'Apercu Arabic Pro';
  font-size: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 8px;
  padding-left: 46px;
  padding-right: 8px;
  &::placeholder {
    line-height: 180%;
    color: #2d2d2d;
  }
  @media screen and (min-width: 480px) {
    width: 407px;
    height: 93px;
  }
  @media screen and (min-width: 720px) {
    width: 507px;
  }
`;

export const Textarea = styled.textarea`
  width: 250px;
  height: 93px;
  font-family: 'Apercu Arabic Pro';
  font-size: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 15px;
  padding-top: 31px;
  padding-left: 46px;
  padding-right: 8px;
  resize: none;

  &::placeholder {
    font-size: 18px;
    line-height: 180%;
    color: #2d2d2d;
  }
  @media screen and (min-width: 480px) {
    width: 407px;
    height: 189px;
  }
  @media screen and (min-width: 720px) {
    width: 507px;
  }
`;

export const Button = styled.button`
  min-width: 218px;
  background: #fad34f;
  border: none;
  border-radius: 500px;
  font-size: 18px;
  line-height: 1;
  padding-top: 28px;
  padding-bottom: 28px;
  color: #ffffff;
  margin-bottom: 40px;
  @media screen and (min-width: 480px) {
    margin-bottom: 120px;
  }
`;

export const Footer = styled.div`
  min-width: 320px;
  max-width: 1440px;
  height: 100px;
  background: #fafafa;
  border: 1px solid #d8d8d8;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    li {
      margin-right: 26px;
    }
  }
  .social-icon {
    fill: #696969;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      fill: #3498db;
    }
  }

  @media screen and (min-width: 480px) {
    height: 200px;
    background-image: url(${cartoon3Src}), url(${cartoon4Src}),
      url(${cartoon1Src});
    background-repeat: no-repeat;
    background-size: 214px 208px, 78px 97px, 88px 86px;
    background-position: 15px -38px, top right 103px, right -38px bottom 28px;
    ul {
      justify-content: left;
      margin-left: 343px;
    }
  }
`;
