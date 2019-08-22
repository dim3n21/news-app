import React from 'react';
import { Panel } from 'react-bootstrap';
import { FooterPanel } from './styled-components/styled';

const Footer = () => {
    return (
        <div>
           <FooterPanel>
                <Panel.Footer>
                    <a href="https://newsapi.org/"  target="_blank"  style={{color: '#000000', textDecoration: 'none', textAlign: 'right'}}>News API</a>
                    <p style={{textAlign: 'right'}}>&copy; Dmitry Andrianov. All right reserved.</p>
                </Panel.Footer>
            </FooterPanel> 
        </div>
    );
};

export default Footer;