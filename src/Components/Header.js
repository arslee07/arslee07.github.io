import React, { Component } from 'react';
import pfp from '../Images/pfp.png';
import { MDBCard, MDBCol, MDBRow } from 'mdbreact';
import { FiGithub, FiMail, RiTelegramLine } from 'react-icons/all';

class Header extends Component {
  render() {
    return (
      <>
        <div className={'row text-center'}>
          <img
            className="img-fluid shadow-lg"
            src={pfp}
            style={{
              borderRadius: '50%',
              maxWidth: '120px',
              maxHeight: '120px',
            }}
          />
          <MDBCol middle className={'text-left'}>
            <h1 className={'m-0'}>arslee 💻</h1>
            <h3 className={'text-muted mx-0 mt-0 mb-2'}>i build things</h3>
            <MDBRow around>
              <a
                href={'https://github.com/arslee07'}
                style={{ color: '#211F1F' }}
              >
                <FiGithub fontSize={26} />
              </a>
              <a href={'https://t.me/arslee'} style={{ color: '#0088CC' }}>
                <RiTelegramLine fontSize={30} />
              </a>
              <a href={'mailto:me@arslee.dev'} style={{ color: '#EA4335' }}>
                <FiMail fontSize={26} />
              </a>
            </MDBRow>
          </MDBCol>
        </div>
      </>
    );
  }
}

export default Header;
