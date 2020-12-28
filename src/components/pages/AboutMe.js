import React from 'react';
import './AboutMe.css';
import Footer from './../Footer'

function AboutMe() {
    return (
        <div className="about-me">
            <div className="about-me--head-container end">
                <div className="about-me--head">

                    <h1 className="about-me--name">Ahmed Khaled</h1>
                    <h3 className="about-me--job-title">Frontend Developer</h3>

                </div>
                <img src="images/aboutme2.png" alt="Ahmed Khaled" className="about-me--img" />

            </div>

            <section className="about-me--info">
                <p className="about-me--info-text">
                    Hello there!
                    <br />
                    <br />
                    <apan>This is my Story How I got hooked into Software Development</apan> it all starts When I was a kid I enjoyed computer games so much, and I always wonder how Computers work?
                    <br />
                    <br />
                    Let me introduce you to how I found out. In 2016 I asked a friend of mine who was a computer science student how computers work?
                    <br />
                    and he explains some Zeros and 1’s stuff for me, introduce me to HTML/CSS tutorial and we talk about how the web work.
                    <br />
                    <br />
                    at this time a became a student at the faculty of commerce at Helwan university which I will later major in Economics and graduate in 2020.
                    <br />
                    <br />
                    Back in 2016, I make some cool websites for fun and learning purpose with HTML and CSS later I tried to learn javascript this time it was frustrated, and the tutorial I was learning from wasn’t really for the beginner so I stopped and concentrate more on academic study and got work at event planning job, Which I learn a lot from it like how to lead a small team how to work with the team effectively, time planning, and how to deal with urgent problems.
                    <br />
                    <br />
                    In 2019 I decided to continue my learning journey in web development and computer science so I got some skills and became familiar with topics like Python, javascript, CS, bootstrap, jQuery, git, node, express, React.js, and many more.
                    <br />
                    <br />
                    I have to say for me learning how to code was so challenging, rewarding, and fun I still remember the moment I produced “Hello World” in the console of my first application, or the first snake game I make with Python I knew I was hooked into the world of software development.
                    <br />
                    <br />
                    This was about my learning journey to became a front-end developer a real passioned one, but web and Computer science isn’t my only passion, I’m passionate about Economics, entrepreneurship, How big companies work, and learning new stuff, I’m residing at sites like Coursera, Udacity, Udemy, and many more.
                    <br />
                    <br />
                    I also join some activities from 2019 and 2020 where I met awesome people, learn awesome skills, and became familiar with many awesome topics. And today I’m building my portfolio to Breaking into the job market.
                    <br />
                    <br />
                    Thank you for reading hope this Summary introduce me very well.
                    </p>

                <div className="about-me--contact-me">
                    <h2 className="about-me--contact-me-head end sub-title">Contact Me</h2>
                    <p>Sphinx St - Mashal</p>
                    <br />
                    <p>Giza/Egypt</p>
                    <br />

                    <p>Post/Zip Code 12557</p>
                    <br />
                    <p>01159593645</p>
                    <br />
                    <p>ahmed.khaled.hussain@gmail.com</p>
                </div>
                <div>
                </div>
            </section>

            <section className="about-me--skills">
                <h2 className="end sub-title">
                    skills
                </h2>
                <div className="about-me--skills-container">
                    <div className="skills-text">
                        <ul>
                            <li>Web apps responsive to all screen sizes.</li>
                            <li>Proficient understanding of web markup, including HTML5, CSS3.</li>
                            <li>Proficient understanding of code versioning tools (Git/GitHub).</li>
                            <li>Basic understanding of server-side CSS pre-processing platforms, SASS.</li>
                            <li>Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery and React.</li>
                        </ul>
                    </div>
                    <div className="skills-imgs">

                        {/* Html */}
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="html5" class="skills-img svg-inline--fa fa-html5 fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#FD7E14" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>

                        {/* CSS */}
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="css3-alt" class="skills-img svg-inline--fa fa-css3-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#15AABF" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg>

                        {/* javascript */}
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="node-js" class="skills-img svg-inline--fa fa-node-js fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FFD93A" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path></svg>

                        {/* Bootstrap */}
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bootstrap" class="skills-img svg-inline--fa fa-bootstrap fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#BE4BDB   " d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"></path></svg>

                        {/* React */}
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="react" class="skills-img svg-inline--fa fa-react fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#08D9FF" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>

                        {/* Git */}
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="git-alt" class="skills-img svg-inline--fa fa-git-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#F03C2E" d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"></path></svg>

                        {/* GitHub */}
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="skills-img svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>

                        {/* Python */}
                        <svg class="skills-img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#366a96" /><stop offset="1" stop-color="#3679b0" /></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffc836" /><stop offset="1" stop-color="#ffe873" /></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)" /><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)" /><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff" /></g></svg>

                        {/* jQuery */}
                        <svg height="94" width="100" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(.945094 0 0 .945094 6.301403 4.347014)"><path d="m20.44 13.78c-5.283 7.733-4.625 17.793-.6 26l.296.585.2.37c.037.072.08.143.118.213.07.13.14.255.2.383l.385.673.22.37.447.712.2.3c.2.32.426.638.648.952.005.008.012.017.018.025.035.05.074.1.1.15.192.27.4.536.6.8l.222.288.545.682.208.254a31.65 31.65 0 0 0 .76.884l.016.016c.01.013.02.02.03.033a23.73 23.73 0 0 0 .772.83l.248.254.617.616.252.244a34.49 34.49 0 0 0 .845.783l.16.14.767.66.318.258.64.5.342.265.978.715c.025.017.047.035.072.052.23.16.463.315.697.47l.302.205 1.092.68.302.173.82.468c.15.082.303.16.453.238l.586.3.135.066.24.118.93.438.197.1a32.93 32.93 0 0 0 1.084.459l.264.106 1.023.386.128.046a34.62 34.62 0 0 0 1.14.38l.275.084c.4.12.775.263 1.177.34 25.548 4.756 32.971-15.626 32.971-15.626-6.233 8.27-17.296 10.45-27.778 8.023-.397-.1-.782-.217-1.17-.334l-.292-.1c-.378-.118-.754-.243-1.126-.373l-.155-.057a35.02 35.02 0 0 1 -.993-.375l-.28-.112a31.57 31.57 0 0 1 -1.072-.454l-.214-.096-.904-.43-.26-.128a30.9 30.9 0 0 1 -.7-.363l-.467-.25a26.89 26.89 0 0 1 -.838-.479l-.283-.16c-.368-.22-.732-.45-1.092-.68-.1-.065-.196-.134-.295-.2l-.777-.526-.25-.18-.735-.54-.326-.25-.663-.528-.296-.24-.825-.7c-.028-.025-.06-.05-.1-.077-.294-.263-.583-.533-.868-.804l-.244-.24-.624-.622-.244-.25a31.33 31.33 0 0 1 -.765-.824c-.012-.014-.026-.027-.038-.04a31.49 31.49 0 0 1 -.776-.9l-.203-.246-.56-.703-.205-.26-.645-.875c-5.82-8.085-7.9-19.235-3.26-28.393m12.283-1.188c-3.82 5.6-3.613 13.094-.633 19.016a24.87 24.87 0 0 0 1.69 2.873c.572.835 1.207 1.83 1.967 2.5.275.3.563.6.857.906.074.077.15.15.226.227a25.21 25.21 0 0 0 .876.829c.012.01.023.022.036.032a26.31 26.31 0 0 0 1.031.87l.232.184a25.13 25.13 0 0 0 1.07.796.6.6 0 0 0 .03.023c.16.113.325.22.488.328.078.052.152.107.23.156a21.65 21.65 0 0 0 .793.495l.112.066.7.4c.082.047.166.088.25.132l.5.258c.025.013.05.023.074.035.337.17.676.33 1.023.485.074.033.15.063.226.095.277.12.557.236.84.347l.36.134a26.33 26.33 0 0 0 .77.273l.348.113c.367.117.73.263 1.113.328 19.725 3.328 24.28-12.14 24.28-12.14-4.105 6.02-12.054 8.894-20.538 6.652a21.09 21.09 0 0 1 -1.117-.33c-.113-.035-.224-.072-.336-.1a22.36 22.36 0 0 1 -.781-.274l-.353-.134c-.283-.1-.563-.225-.84-.345-.076-.033-.152-.063-.227-.098a19.53 19.53 0 0 1 -1.03-.487c-.174-.087-.345-.178-.516-.268l-.298-.156a20.05 20.05 0 0 1 -.653-.375l-.156-.1a25.46 25.46 0 0 1 -.79-.492c-.08-.052-.158-.1-.238-.162l-.512-.345a27.46 27.46 0 0 1 -1.066-.794l-.24-.192c-3.713-2.986-6.657-7.066-8.056-11.693-1.467-4.8-1.15-10.185 1.4-14.556m10.648-.38c-2.252 3.376-2.473 7.568-.9 11.296 1.648 3.957 5.025 7.062 8.966 8.533.162.062.325.117.5.173l.216.07c.232.074.463.16.702.206 10.892 2.143 13.846-5.692 14.632-6.845-2.588 3.795-6.937 4.706-12.273 3.387-.42-.105-.885-.26-1.3-.406a15.62 15.62 0 0 1 -1.533-.649 15.81 15.81 0 0 1 -2.688-1.671c-4.785-3.69-7.752-10.728-4.636-16.46" fill="#0868ac" /><g fill="#131b28"><path d="m26.576 74.06-.738 2.616.738-2.615zm3.796 5.678-.813-.005zm-.2 3.906-4.872.018zm1.02-3.9-.814-.005zm-.582 3.568.85-3.237zm17.93-14.907-1.58 7.433zm-4.065 0-1.2 5.553z" /><path d="m48.26 68.07h-3.38c-.188 0-.374.15-.414.334l-2.4 11.107c-.04.183-.226.333-.413.333h-2.393c-2.368 0-2.094-1.637-1.6-3.88l.015-.068.287-1.53.124-.63 1.092-5.332c.038-.184-.085-.335-.273-.335h-3.47a.44.44 0 0 0 -.412.334l-1.563 7.414c-.86 3.924-.632 7.666 4.04 7.783l.135.003h7.332c.188 0 .373-.15.413-.334l3.162-14.866c.04-.184-.083-.334-.27-.334zm13.487 11.813c.188 0 .3.15.273.334l-.328 1.605m-.328 1.606.328-1.606zm-.412.338-6.23.03z" /><path d="m52.704 77.817c-.003-.176.197-.478.385-.478l-.422-.007c-.2 1.914.037.485.037.485zm2.326 5.978h-.065zm6.717-3.912c.188 0 .3.15.273.334l-.382 1.866m-5.008 1.717h-.014zm-.83-.006h-.048zm-.253.001h-.08zm-.247 0h-.07zm.462-.001h-.205z" /><path d="m56.617 83.8-.816.003zm4.337-.025-4.325.026zm.4-.347.275-1.344-.275 1.345zm-5.896.367h-.158.178zm-.495 0h-.24zm.257 0h-.2zm-49.46-5.938.525-2.328-.6 2.66-.07.334.146-.668zm6.286-9.825h-3.713a.45.45 0 0 0 -.417.333l-.704 3.1a.26.26 0 0 0 .266.333h3.742c.188 0 .374-.15.414-.333l.68-3.107c.04-.183-.08-.333-.27-.333zm-.808 5.168-1.1 5.038zm-10.786 16.695 3.062.024c-.904 0-2.397-.017-3.063-.025z" /><path d="m6.8 73.2-.526 2.328zm4.17-.333h-3.743a.45.45 0 0 0 -.417.333l-1.05 4.656-.146.668-1 4.753a7.16 7.16 0 0 1 -.18.657s-.7 2.08-1.874 2.057l-1.165-.022a.45.45 0 0 0 -.42.326l-.775 3.263a.26.26 0 0 0 .261.336l3.063.025c2.936 0 4.483-1.627 5.476-6.307l2.25-10.4c.04-.183-.082-.333-.27-.333zm53.162 10.738c-.188 0-.3-.15-.27-.334l2.815-13.186m1.367 13.185 1.14-5.628z" /><path d="m63.903 83.438c-.023-.092-.01-.317.03-.5l1.336-6.26-1.408 6.593c-.04.184.082.334.27.334h.342c-.188 0-.548-.075-.57-.167zm3.92.092c-.102.04-.34.075-.528.075h.342a.44.44 0 0 0 .41-.335l.068-.334c-.037.184-.2.553-.3.594zm.79-3.074.503-2.484zm11.108-9.488.155.64c.043.183-.076.332-.263.333" /><path d="m68.112 82.936.5-2.48zm11.456-12.636.153.656zm-10.452 7.672.138-.664.537-2.515-.608 2.848-.067.33zm-2.393-8.104-.117.55-1.336 6.26 1.408-6.593.045-.216z" /><path d="m79.877 71.608-.155-.64-.23-1c-.304-1.18-1.196-1.863-3.134-1.863l-8.92-.006a.44.44 0 0 0 -.412.334l-.138.653-.2.987-2.744 12.853c-.04.184-.053.4-.03.5s.383.167.57.167h2.82c.188 0 .425-.034.528-.075s.254-.4.3-.594l1.07-5.294 1.145-5.364c.04-.183.225-.332.412-.333l8.873-.004c.187 0 .306-.15.263-.333zm11.423-5.793-.683.003h-2.84a.73.73 0 0 0 -.534.282l-6.28 9.2c-.106.155-.227.132-.27-.05l-.462-2.027a.45.45 0 0 0 -.417-.333h-4.037c-.188 0-.3.147-.248.328l1.8 6.338c.052.18.055.477.01.66l-.8 3.067a.25.25 0 0 0 .257.331h4c.188 0 .38-.15.426-.33l.8-3.067a2.04 2.04 0 0 1 .29-.604l10.206-13.533c.113-.15.052-.272-.136-.27l-1.07.007zm-32.076 7.937c-.024.2-.212.35-.4.35h-5.12c-.177 0-.267-.12-.24-.27l.004-.027.023-.087c.5-1.3 1.485-2.153 3.356-2.153 2.107 0 2.518 1.03 2.375 2.187zm-1.502-5.908c-6.57 0-8.127 3.988-9 8.013-.874 4.103-.798 7.94 6 7.94h1.078l.83-.003 4.326-.026a.44.44 0 0 0 .407-.335l.657-3.212c.038-.184-.085-.334-.273-.334h-6.112c-2.43 0-3.153-.646-2.887-2.545h9.77c.16-.003.305-.1.362-.252.01-.027.02-.056.024-.085 1.45-5.47 1.034-9.157-5.18-9.157zm-31.054 5.886-.092.327c0 .001-.738 2.616-.738 2.616l-.738 2.614a.48.48 0 0 1 -.434.328h-3.906c-2.962 0-3.683-2.317-2.962-5.734.72-3.495 2.135-5.668 5.05-5.888 3.984-.3 4.78 2.502 3.82 5.736zm2.678 5.685s1.84-4.47 2.26-7.053c.57-3.457-1.16-8.47-7.845-8.47-6.647 0-9.533 4.786-10.634 10-1.1 5.24.342 9.836 6.95 9.8l10.086-.037a.47.47 0 0 0 .427-.332l.85-3.238a.25.25 0 0 0 -.255-.332l-1.627-.01c-.16-.001-.25-.104-.232-.24.004-.025.01-.05.02-.076z" /><path d="m62.25 76.424c0 .124-.1.224-.224.224s-.224-.1-.224-.224.1-.224.224-.224.224.1.224.224z" /></g></g></svg>
                    </div>
                </div>
            </section>

            <section className="about-me--more-container">
                <small className="about-me--more">
                    For further information about Education, And Work Experiance etc Plaese check <a className="more-linked-in" href="https://www.linkedin.com/in/ahmedelbedfy/" target="_blank" rel='noopener noreferrer'>Linked in.</a>
                </small>
            </section>
            <Footer></Footer>

        </div>
    )
}

export default AboutMe;
