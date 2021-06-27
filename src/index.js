import React from 'react';
import { render } from 'react-dom';
import './Stylesheets/bootstrap.min.css';
import pfp from './Images/pfp.png';
import { MDBAnimation, MDBCol, MDBRow } from 'mdbreact';
import { FiGithub, FiMail, RiTelegramLine } from 'react-icons/all';
import './Stylesheets/Header.css';
import ReactTooltip from 'react-tooltip';

render(
  <>
    <MDBAnimation type={'fadeIn'}>
      <div
        className={'col row justify-content-center align-items-center m-0'}
        style={{
          minHeight: '100vh',
          padding: '5rem',
        }}
      >
        <div className={'row text-center mx-auto justify-content-center'}>
          <MDBCol className={'px-0'}>
            <a href="/about.pdf">
              <img
                alt={'pfp'}
                className="img-fluid shadow mx-auto my-auto pfp"
                src={pfp}
                style={{
                  borderRadius: '50%',
                  maxWidth: '120px',
                  maxHeight: '120px',
                }}
              />
            </a>
          </MDBCol>
          <MDBCol
            middle
            className={'text-sm-left text-center'}
            style={{ minWidth: '200px' }}
          >
            <h1 className={'m-0'}>arslee 💻</h1>
            <h3 className={'text-muted mx-0 mt-0 mb-2'}>i build things</h3>

            <MDBRow around>
              <a
                data-tip
                data-for={'github'}
                href={'https://github.com/arslee07'}
                style={{ color: '#211F1F' }}
              >
                <FiGithub fontSize={26} />
              </a>
              <ReactTooltip
                place="bottom"
                type="dark"
                effect="solid"
                id={'github'}
                className={'py-1 px-2'}
              >
                <span>github.com/arslee07</span>
              </ReactTooltip>

              <a
                data-tip
                data-for={'telegram'}
                href={'https://t.me/arslee'}
                style={{ color: '#0088CC' }}
              >
                <RiTelegramLine fontSize={30} />
              </a>
              <ReactTooltip
                place="bottom"
                type="dark"
                effect="solid"
                id={'telegram'}
                className={'py-1 px-2'}
              >
                <span>t.me/arslee</span>
              </ReactTooltip>

              <a
                data-tip
                data-for={'mail'}
                href={'mailto:me@arslee.dev'}
                style={{ color: '#EA4335' }}
              >
                <FiMail fontSize={26} />
              </a>
              <ReactTooltip
                place="bottom"
                type="dark"
                effect="solid"
                id={'mail'}
                className={'py-1 px-2'}
              >
                <span>me@arslee.dev</span>
              </ReactTooltip>
            </MDBRow>
          </MDBCol>
        </div>
      </div>
    </MDBAnimation>
  </>,

  document.getElementById('root')
);
