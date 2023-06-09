import React, { useState } from 'react';
import LearnCard from './components/LearnCard/LearnCard';
import './App.css';

function App() {
  const [productState, setproductState] = useState([false, 'down']);
  const [solutionsState, setsolutionsState] = useState([false, 'down']);
  const [communityState, setcommunityState] = useState([false, 'down']);

  const toggleProducts = () => {
    setproductState([!productState[0], !productState[0] ? 'up' : 'down']);
  };

  const toggleSolutions = () => {
    setsolutionsState([!solutionsState[0], !solutionsState[0] ? 'up' : 'down']);
  };

  const toggleCommunity = () => {
    setcommunityState([!communityState[0], !communityState[0] ? 'up' : 'down']);
  };

  return (
    <div className="App">
      <div className="navContainer">
        <nav className="blogsHeader">
          <div className="textWrapper">
            <a className="new">New! Premium CPU-Optimized Droplets are now available. Learn more -&gt;</a>
            <div className="blogWrapper">
              <a>We&apos;re hiring</a>
              <a>Blog</a>
              <a>Docs</a>
              <a>Get Support</a>
              <a>Contact Sales</a>
            </div>
          </div>
        </nav>
        <nav className="mainHeader">
          <div className="contentWrapper">
            <a className="alogo" href="/">
              <div className="logo">
                <svg className="logo" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 32 32" fill="#0069ff">
                  <path d="M16.098 32v-6.196c6.615 0 11.7-6.501 9.177-13.419a9.227 9.227 0 0 0-5.545-5.513C12.771 4.363 6.233 9.457 6.233 15.996H0C0 5.542 10.171-2.631 21.183.79c4.818 1.483 8.642 5.322 10.172 10.112C34.796 21.888 26.613 32 16.098 32Z" />
                  <path d="M16.097 25.842H9.902v-6.159h6.195v6.159Zm-6.194 4.751h-4.78v-4.751h4.78v4.751Zm-4.779-4.751H1.109v-3.954h3.977v3.954h.038Z" />
                </svg>
                <svg className="text" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="32 0 159 32" fill="#0069ff">
                  <path d="M57.242 9.305c-1.835-1.254-4.129-1.9-6.806-1.9h-5.812v18.399h5.812c2.677 0 4.971-.685 6.806-2.015.994-.722 1.797-1.711 2.333-2.965.535-1.255.841-2.699.841-4.334 0-1.635-.268-3.079-.841-4.296-.536-1.254-1.3-2.242-2.333-2.889Zm-9.213 1.179h1.835c2.027 0 3.709.38 4.971 1.178 1.415.837 2.141 2.471 2.141 4.79 0 2.395-.726 4.068-2.141 4.98-1.224.798-2.868 1.217-4.933 1.217h-1.835V10.484h-.038Zm16.479-3.346c-.574 0-1.032.191-1.415.571-.382.38-.612.836-.612 1.406s.192 1.027.574 1.445c.382.38.879.57 1.453.57.574 0 1.032-.19 1.453-.57.382-.38.574-.875.574-1.445 0-.57-.192-1.026-.574-1.406-.421-.342-.918-.571-1.453-.571Zm-1.683 5.664h3.288v12.963h-3.288zm15.177 1.103c-.994-.874-2.103-1.369-3.288-1.369-1.797 0-3.327.609-4.474 1.863-1.185 1.217-1.759 2.775-1.759 4.638 0 1.825.574 3.383 1.721 4.638 1.147 1.216 2.677 1.824 4.474 1.824 1.262 0 2.332-.342 3.25-1.026v.304c0 1.064-.306 1.901-.841 2.471-.574.57-1.377.874-2.333.874-1.529 0-2.447-.608-3.632-2.128l-2.218 2.128.076.076c.498.685 1.224 1.331 2.18 1.939.956.608 2.218.95 3.633.95 1.95 0 3.517-.608 4.664-1.786 1.148-1.179 1.759-2.775 1.759-4.714V12.803h-3.212v1.102Zm-.878 7.641c-.574.646-1.3.95-2.256.95-.956 0-1.683-.304-2.218-.95-.574-.646-.841-1.483-.841-2.547s.267-1.901.841-2.547c.574-.646 1.3-.95 2.218-.95.956 0 1.682.304 2.256.95.573.646.841 1.521.841 2.547.038 1.064-.268 1.901-.841 2.547Zm6.883-8.744h3.288v12.963h-3.288zm1.685-5.664c-.574 0-1.033.191-1.415.571-.382.38-.612.836-.612 1.406s.191 1.027.574 1.445c.382.38.879.57 1.453.57.573 0 1.032-.19 1.453-.57.382-.38.573-.875.573-1.445 0-.57-.191-1.026-.573-1.406-.421-.342-.88-.571-1.453-.571Zm8.793 2.167h-3.212v3.498h-1.874v2.965h1.874v5.36c0 1.672.344 2.889.994 3.573.689.684 1.874 1.064 3.518 1.064.535 0 1.071 0 1.606-.038h.153v-2.965l-1.109.076c-.765 0-1.3-.152-1.568-.418-.267-.266-.382-.836-.382-1.71v-4.904h3.059v-2.965h-3.059V9.305Zm18.43-1.939h3.288v18.4h-3.288v-18.4Zm36.364 13.762c-.574.646-1.186 1.216-1.645 1.52-.458.304-1.032.418-1.682.418-.956 0-1.759-.342-2.371-1.064-.612-.722-.956-1.635-.956-2.737s.306-2.015.918-2.737c.612-.722 1.415-1.064 2.371-1.064 1.07 0 2.179.646 3.135 1.786l2.18-2.053c-1.415-1.824-3.212-2.661-5.354-2.661-1.797 0-3.364.647-4.626 1.939-1.262 1.293-1.912 2.889-1.912 4.828 0 1.939.65 3.573 1.912 4.828 1.262 1.292 2.829 1.939 4.626 1.939 2.371 0 4.283-1.027 5.583-2.89l-2.179-2.052Zm13.459-6.501c-.459-.646-1.109-1.178-1.874-1.558-.765-.38-1.683-.57-2.715-.57-1.835 0-3.327.684-4.435 1.976-1.109 1.331-1.645 2.965-1.645 4.866 0 1.977.612 3.574 1.797 4.828 1.186 1.216 2.792 1.863 4.742 1.863 2.218 0 4.015-.875 5.391-2.623l.077-.076-2.141-2.053c-.192.228-.498.494-.727.76-.306.304-.612.532-.956.684a3.856 3.856 0 0 1-1.644.381c-.918 0-1.644-.266-2.218-.799-.535-.494-.841-1.14-.918-1.976h8.68l.039-1.179c0-.836-.115-1.635-.345-2.395-.305-.798-.65-1.482-1.108-2.129Zm-7.15 3.042a3.28 3.28 0 0 1 .841-1.521c.459-.418 1.032-.646 1.721-.646.803 0 1.414.228 1.835.684.382.418.612.912.65 1.521h-5.047v-.038Zm19.731-3.878c-.994-.836-2.37-1.255-4.091-1.255-1.109 0-2.103.229-3.021.685a5.297 5.297 0 0 0-2.218 2.09l.039.038 2.103 2.015c.879-1.368 1.835-1.862 3.097-1.862.688 0 1.262.19 1.682.532.421.342.65.798.65 1.406v.647c-.803-.229-1.606-.381-2.409-.381-1.644 0-2.944.381-3.938 1.141-.994.76-1.491 1.863-1.491 3.231 0 1.217.42 2.205 1.262 2.927.841.722 1.911 1.065 3.173 1.065s2.409-.495 3.48-1.369v1.064h3.212V17.44c-.039-1.596-.536-2.813-1.53-3.649Zm-5.813 7.032c.383-.266.88-.38 1.568-.38a7.31 7.31 0 0 1 2.485.457v1.254c-.726.646-1.682.988-2.829.988-.574 0-.994-.114-1.3-.38-.306-.228-.459-.532-.459-.95 0-.418.153-.76.535-.989Zm19.922-6.804c-.918-1.026-2.18-1.52-3.824-1.52-1.3 0-2.37.38-3.135 1.102v-.798h-3.212v12.963h3.288v-7.147c0-.988.23-1.749.689-2.319.458-.57 1.108-.836 1.95-.836.726 0 1.3.228 1.72.722.421.494.612 1.178.612 2.053v7.489h3.288v-7.489c0-1.787-.458-3.193-1.376-4.22Zm-80.64-.228c-.994-.836-2.371-1.255-4.091-1.255-1.109 0-2.103.229-3.021.685a5.291 5.291 0 0 0-2.218 2.09l.038.038 2.103 2.015c.88-1.368 1.836-1.862 3.098-1.862.688 0 1.261.19 1.682.532.421.342.65.798.65 1.406v.647c-.803-.229-1.606-.381-2.409-.381-1.644 0-2.944.381-3.938 1.141-.994.76-1.492 1.863-1.492 3.231 0 1.217.421 2.205 1.262 2.927s1.912 1.065 3.174 1.065 2.409-.495 3.48-1.369v1.064h3.211V17.44c-.038-1.596-.535-2.813-1.529-3.649Zm-5.813 7.032c.383-.266.88-.38 1.568-.38a7.31 7.31 0 0 1 2.485.457v1.254c-.726.646-1.682.988-2.829.988-.574 0-.994-.114-1.3-.38-.306-.228-.459-.532-.459-.95 0-.418.153-.76.535-.989Zm25.082 5.209c-5.238 0-9.521-4.258-9.521-9.466 0-5.208 4.283-9.466 9.521-9.466 5.239 0 9.521 4.258 9.521 9.466 0 5.208-4.244 9.466-9.521 9.466Zm-.001-15.624c-3.403 0-6.156 2.737-6.156 6.12s2.753 6.121 6.156 6.121c3.403 0 6.156-2.738 6.156-6.121 0-3.383-2.753-6.12-6.156-6.12Z" />
                </svg>
              </div>
            </a>
            <ul className="mainNav">
              <li>
                <button className="dropdownBtn" aria-expanded={productState[0]} aria-controls="products-menu" onClick={toggleProducts} type="button">
                  Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={productState[1]}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </li>
              <li>
                <button className="dropdownBtn" aria-expanded={solutionsState[0]} aria-controls="solutions-menu" onClick={toggleSolutions} type="button">
                  Solutions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={solutionsState[1]}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </li>
              <li>
                <button className="dropdownBtn" type="button">Marketplace</button>
              </li>
              <li>
                <button className="dropdownBtn" aria-expanded={communityState[0]} aria-controls="community-menu" onClick={toggleCommunity} type="button">
                  Community
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={communityState[1]}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </li>
              <li><button className="dropdownBtn" type="button">Pricing</button></li>
            </ul>
            <ul className="btnHolder">
              <li>
                <button className="dropdownBtn" id="login" type="button">Log in</button>
              </li>
              <li>
                <button className="dropdownBtn" id="signup" type="button">Sign up</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mainContentWrapper">
        <section className="stats-dream">
          <div className="bgDiv" />
          <div className="rippleHolder">
            <img className="ripple" src="https://www.digitalocean.com/_next/static/media/surface-water.7a73601a.png" alt="cloud home top center" />
          </div>
          <div className="leftHolder">
            <img className="leftImg" src="https://www.digitalocean.com/_next/static/media/servers-plant-illustration-left.257ba574.svg" alt="cloud home top center" />
          </div>
          <div className="rightHolder">
            <img className="rightImg" src="https://www.digitalocean.com/_next/static/media/servers-plant-illustration-right.0fc693fd.svg" alt="cloud home top center" />
          </div>
          <div className="dreamContainer">
            <div className="titleDiv"><h1>Dream it. Build it. Grow it.</h1></div>
            <div className="subheading">
              <p className="subtitle">
                Whatever your &quot;it&quot; is-a SaaS app, website, or eCommerce-build it here
              </p>
            </div>
            <div className="imgBtnHolder">
              <a className="imgBtn">
                <img src="https://doimages.nyc3.digitaloceanspaces.com/google-logo.svg" alt="google logo" />
                <span>Sign up with Google</span>
              </a>
              <a className="imgBtn">
                <img src="https://doimages.nyc3.digitaloceanspaces.com/github-logo.svg" alt="github logo" />
                <span>Sign up with GitHub</span>
              </a>
              <a className="imgBtn" id="blueBtn">
                Sign up with email
              </a>
            </div>
          </div>
          <div className="statContainer">
            <div className="whitebg" />
            <div className="stats">
              <div className="statStyleContainer">
                <div className="statCol">
                  <h4>#1</h4>
                  <div className="textHolder">
                    <p className="statDesc">
                      In IaaS usability, VPS for SMBs, & SMB Hosting&nbsp;
                      <a href="https://www.g2.com/products/digitalocean/reviews">on G2</a>
                    </p>
                  </div>
                </div>
                <div className="statCol">
                  <h4>15</h4>
                  <div className="textHolder">
                    <p className="statDesc">Globally distributed datacenters</p>
                  </div>
                </div>
                <div className="statCol">
                  <h4>99.99%</h4>
                  <div className="textHolder">
                    <p className="statDesc">Uptime SLA for Droplets and Volumes block storage</p>
                  </div>
                </div>
                <div className="statCol">
                  <h4>&#62;600k</h4>
                  <div className="textHolder">
                    <p className="statDesc">Customers building with DigitalOcean</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="s2">
          <div className="waveTop" />
          <div className="sliderHolder">
            <h2 className="sliderTitle">How real businesses use DigitalOcean to accelerate their growth</h2>
            <div className="styledContainer">
              <div className="styledSliderContainer">
                <div className="blueContainer">
                  <img className="garnish" src="https://www.digitalocean.com/_next/static/media/garnish-blue.26799a4e.svg" alt="garnish" />
                  <div className="blueBox">
                    <div className="infoCardHeader">
                      <img className="businesslogo" src="https://www.digitalocean.com/_next/static/media/datacake-logo.649cea4d.svg" alt="logo" />
                      <div className="buttonArrowHeader">
                        <button className="arrowBtn" type="button">&#60;—</button>
                        <button className="arrowBtn" type="button">—&gt;</button>
                      </div>
                    </div>
                    <h4 className="cardTitle">Datacake relies on DigitalOcean to support their low-code platform through rapid growth.</h4>
                    <p>“We make it easy to start a server or whatever you are looking for.”</p>
                    <p>—Simon Kemper, CEO, Founder</p>
                    <div className="infoCardFooter">
                      <a className="textLinkWithArrow" href="/">Watch the video</a>
                    </div>
                  </div>
                </div>
                <div className="businessImgContainer">
                  <img src="https://www.digitalocean.com/_next/static/media/datacake-image.6c12e662.png" alt="datacake image" className="datacakeImg" />
                  <img src="https://www.digitalocean.com/_next/static/media/garnish-2-blue.5aa0f894.svg" alt="garnish2" className="garnish2" />
                </div>
              </div>
            </div>
          </div>
          <div className="bottomWaveBg" />
        </section>
        <section className="trialCard">
          <div className="trialContainer">
            <div className="bannerWrapper">
              <img className="cloudJourney" src="https://www.digitalocean.com/_next/static/media/lighthouse-clouds-blue.8a1f1a95.svg" />
              <div className="trialTextHolder">
                <div color="#fff" className="bannerTitleStyle">
                  <h3 className="bannerTitle">Build eCommerce stores and websites seamlessly with Cloudways</h3>
                </div>
                <div className="bannerDesc" color="#fff">
                  <p>Sign up for hosting through Cloudways now and get $100 in free credit.</p>
                </div>
                <div className="bannerLink">
                  <p>
                    <a>Start my free trial</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="expertContainerOuter">
          <div className="wrapperInner">
            <div className="sliceContainer">
              <div className="headline">
                <div className="hlStyle">
                  <h2 className="expertHL">Learn from the experts</h2>
                  <div className="hlBody">
                    <div className="hlBodyStyle">
                      <p>Whatever you want to learn, we have the educational resources for you.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardsContainer">
                <LearnCard
                  id="docs"
                  imgsrc="https://www.digitalocean.com/_next/static/media/digitalocean-docs.26159f78.svg"
                  header="Product documentation"
                  body="Learn how to spin up a VM and more with in-depth documentation."
                  href="https://docs.digitalocean.com/"
                />
                <LearnCard
                  id="advice"
                  imgsrc="https://www.digitalocean.com/_next/static/media/boat-storm-lighthouse.4bdddec0.png"
                  header="Business advice"
                  body="The Wave is our hub for startup content on funding and hiring."
                  href="https://docs.digitalocean.com/"
                />
                <LearnCard
                  id="expertise"
                  imgsrc="https://www.digitalocean.com/_next/static/media/heart-speech-bubble-asterisk-graphic.6eb0678f.svg"
                  header="Technical expertise"
                  body="Visit our Community Website to learn from wide range of tutorials."
                  href="https://docs.digitalocean.com/"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="newCTABand">
          <div className="lightTopWave" />
          <div className="CTABandContainer">
            <div className="CTAStyledDiv">
              <div className="CTATitle">
                <h2>Start building today</h2>
              </div>
              <div className="CTABody">
                <p>Sign up now and you will be up and running on DigitalOcean in just minutes.</p>
              </div>
              <div className="CTABtn">
                <a href="https://cloud.digitalocean.com/registrations/new">Sign up to get started</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="footerWave" />
      <div className="seaFloor">
        <div className="sfLeft">
          <img src="https://www.digitalocean.com/_next/static/media/seaFloorLeft.53f70537.svg" />
        </div>
        <div className="sfMid">
          <img src="https://www.digitalocean.com/_next/static/media/seaFloorMiddle.b8dc47b6.svg" />
        </div>
        <div className="sfRight">
          <img src="https://www.digitalocean.com/_next/static/media/seaFloorRight.9cccc865.svg" />
        </div>
      </div>
    </div>
  );
}

export default App;
