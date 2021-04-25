import React, { Component } from 'react';

export default class Contact extends Component {
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
                <div className='contactHeader'>
                    <h2>Contact Us</h2>
                </div>
                <div className='formContainer'>
                    <div className='formDescription'>
                        <h3>Send us a message</h3>
                        <br></br>
                        <p>
                            If you are a travel or points guru we want to hear
                            from you! Feel free to use the form and send us a
                            message with any questions or concerns you may have.
                        </p>
                        <br></br>
                        <br></br>
                        <p>Phone:</p>
                        <p>Email:</p>
                    </div>
                    <form>
                        <div className='formGroup'>
                            <label>
                                Let us know the reason you're reaching out:
                            </label>
                            <select name='reason'></select>
                        </div>
                        <div className='formGroup'>
                            <label>Name:</label>
                            <input type='text' placeholder='Name'></input>
                        </div>
                        <div className='formGroup'>
                            <label>Email:</label>
                            <input
                                type='text'
                                placeholder='Email address'></input>
                        </div>
                        <div className='formGroup'>
                            <label>Phone:</label>
                            <input type='text' placeholder='Phone'></input>
                        </div>
                        <div className='formGroup'>
                            <label>What else would you like us to know:</label>
                            <textarea rows={4}></textarea>
                        </div>
                     <button>Submit</button>
                    </form>
                </div>
            </section>
        );
    }
}
