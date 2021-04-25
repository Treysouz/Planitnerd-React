import React, { Component } from 'react';

export default class Home extends Component {
    inViewport = (elem) => {
        var bounding = elem.getBoundingClientRect();
        // console.log(bounding);
        // console.log( bounding.bottom <=
        //   (window.innerHeight || document.documentElement.clientHeight));
        // console.log( bounding.right <=
        //   (window.innerWidth || document.documentElement.clientWidth));
        return (
            bounding.top >= -(window.innerHeight / 1.5) &&
            bounding.left >= 0 &&
            bounding.bottom <=
                (window.innerHeight + window.innerHeight / 1.5 ||
                    document.documentElement.clientHeight +
                        document.documentElement.clientHeight / 1.5) &&
            bounding.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    componentDidMount() {
        window.addEventListener('scroll', () => {
            // console.log(this.inViewport(document.querySelectorAll(".featureContainer")[0]));
            var scroll = window.scrollY;
            const element = document.getElementById('navHeader');
            if (scroll > 0) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
            document.querySelectorAll('.featureContainer').forEach((el) => {
                if (
                    this.inViewport(el) &&
                    !el.children[0].classList.contains('fadeInRight') &&
                    !el.children[1].classList.contains('fadeInLeft')
                ) {
                    el.children[0].classList.add('fadeInRight');
                    el.children[1].classList.add('fadeInLeft');
                }
            });
        });
        window.addEventListener('load', () => {
            // console.log(this.inViewport(document.querySelectorAll(".featureContainer")[0]));
            document.querySelectorAll('.featureContainer').forEach((el) => {
                if (
                    this.inViewport(el) &&
                    !el.children[0].classList.contains('fadeInRight') &&
                    !el.children[1].classList.contains('fadeInLeft')
                ) {
                    el.children[0].classList.add('fadeInRight');
                    el.children[1].classList.add('fadeInLeft');
                }
            });
        });
    }

    render() {
        return (
            <section id='mainSection'>
                <div className='banner'>
                    <div className='actionCallContainer fadeInUp'>
                        <div className='introContainer'>
                            <h1>Your Personal Travel Points Planner</h1>
                            <p>
                                Build and browse iteneraries, have your points
                                questions answered, learn best ways to use and
                                earn points for future travel.
                            </p>
                        </div>

                        <div className='callToAction'>
                            <div className="inputContainer">
                                <input
                                    type='email'
                                    placeholder='Enter your email'></input>
                                <button>Get Early Access</button>
                            </div>
                            <span className='errorMsg'>Email is required</span>
                        </div>
                    </div>
                    <img
                        className='growIn'
                        src={require('../Assets/Images/phone-top.png')}
                        alt='Phone'></img>
                </div>
                <div id="features" type="anchor" className="anchor"></div>
                <div className='featureContainer'>
                    <img className="sectionImage" style={{"clipPath": "inset(2px 2px 2px 2px)"}}
                        src={require('../Assets/Images/luggage.gif')}
                        alt='Points Flow'></img>
                    <div className='featureInfo'>
                        <h2>
                            Got Points? Explore Different Ways to Redeem For
                            Travel <span role="img" aria-label="airplane">&#9992;&#65039;</span>
                        </h2>
                        <p>
                            Leveraging your credit card points is confusing.
                            Build your own or browse through different
                            iteneraries to see how your peers have redeemed
                            their points and miles for their trips!
                        </p>
                    </div>
                </div>
                <div className='featureContainer'  id="pointsSection">
                    <div className='featureInfo'>
                        <h2>We Are Calling All (Points) Nerds <span role="img" aria-label="glasses">&#129299;</span></h2>
                        <p>
                            Creating a community for veteran card points hacking
                            enthusiasts and beginnners looking to get in on the
                            action. Get all your credit cards and points earning
                            questions answered in one place from trusted
                            resources-- your friends!
                        </p>
                    </div>
                    <img className="sectionImage"
                        src={require('../Assets/Images/phones.png')}
                        alt='Phones'></img>
                </div>
                <div className='featureContainer' id="creditSection">
                    <img className="sectionImage"
                        src={require('../Assets/Images/cc.gif')}
                        alt='Credit Card'></img>
                    <div className='featureInfo'>
                        <h2>Learn All About Which Credit Cards To Get Next <span role="img" aria-label="money">&#128184;</span></h2>
                        <p>
                            There are many credit cards out there, but which one
                            is right for you? Explore your options and benefits
                            all in one place.
                        </p>
                    </div>
                </div>
                <div className='topFooter'>
                    <h2>Are You A Points Guru? We Want To Hear From You!</h2>
                    <p>
                        <b>Contact us</b> to become a guide & get paid to help
                        others navigate their points strategies.
                    </p>
                </div>
            </section>
        );
    }
}
