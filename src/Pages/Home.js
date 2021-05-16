import React, { Component } from 'react';
import pfp from '../Images/pfp.png';
import { MDBAnimation, MDBCol, MDBRow } from 'mdbreact';
import { FiGithub, FiMail, RiTelegramLine } from 'react-icons/all';
import '../Stylesheets/Header.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <MDBAnimation type={'fadeIn'}>
          <div
            className={
              'col row justify-content-center align-items-center p-0 m-0'
            }
            style={{
              minHeight: '100vh',
            }}
          >
            <div className={'row text-center mx-auto'}>
              <Link to="/about">
                <img
                  className="img-fluid shadow-lg mx-auto my-auto pfp"
                  src={pfp}
                  style={{
                    borderRadius: '50%',
                    maxWidth: '120px',
                    maxHeight: '120px',
                  }}
                />
              </Link>
              <MDBCol middle className={'text-sm-left'}>
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
          </div>
        </MDBAnimation>
      </>
    );
  }
}

export default Home;