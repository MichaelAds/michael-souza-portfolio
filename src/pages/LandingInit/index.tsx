import React from 'react';

import { Access, Button, Footer } from './styles';
import Background from '../../assets/icons/background.svg';


const LandingInit: React.FC = () => {

    return (
        <>
            <Access>
                <div className="img"></div>
                <h1>&lt; Michael Souza / &gt;</h1>
                <Button>Profile</Button>
            </Access>

            <Footer>
                <span className="git_icon"></span>
                <span className="link_icon"></span>
                <span className="face_icon"></span>
                <span className="whats_icon"></span>
                <span className="google_icon"></span>
                
                <img className="img-background" src={Background}/>
            </Footer>

        </>
    );
}

export default LandingInit;