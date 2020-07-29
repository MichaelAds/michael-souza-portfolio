import styled from 'styled-components';
import Logo from '../../assets/logo.jpeg';

import Git from '../../assets/icons/git.svg';
import Face from '../../assets/icons/face.svg';
import Link from '../../assets/icons/link.svg';
import Whats from '../../assets/icons/whats.svg';
import Google from '../../assets/icons/google.svg';

export const Access = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;

    .img {
        background-position: center;
        background-size: cover;
        background-image: url(${Logo});
        border-radius: 100%;
        width: 300px;
        height: 300px;
    }

    h1 {
        font-size: 58px;
        color: #fff;
        font-weight: 100;
        margin: 10px 0;
    }

`

export const Button = styled.a`
    text-decoration: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;

    background: #ff8e26;
    border-radius: 27px;
    width: 250px;
    height: 55px;
    margin: 10px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background: #ffac5f;
    }

`

export const Footer = styled.footer`
    position: absolute;
    left: 30px;
    bottom: 30px;
    display: flex;
    justify-content: space-between;
    width: 20%;

    .link_icon {
        background-image: url(${Link});
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 99;
    }

    .face_icon {
        background-image: url(${Face});
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 99;
    }

    .git_icon {
        background-image: url(${Git});
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 99;
    }

    .whats_icon {
        background-image: url(${Whats});
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 99;
    }

    .google_icon {
        background-image: url(${Google});
        background-repeat: no-repeat;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 99;
    }

    .img-background {
        position: absolute;
        right: -137px;
        bottom: -31px;
        z-index: 0;
    }

`