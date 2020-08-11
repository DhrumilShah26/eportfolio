import React, { Component } from 'react';
import TicTacToe from '../assets/projects/tic-tac-toe.png';
import TwitterSA from '../assets/projects/twitter-sentiment-analysis.png';
import WeatherFinder from '../assets/projects/weather-finder.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class Projects extends Component {
  render() {

    return (
      <section id="projects">

      <div className="row">
        <div className="twelve columns collapsed">
          <h1>projects</h1>
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <span className='heading'>Restaurant Management System </span>&nbsp; &nbsp;
                        <a href="https://github.com/DhrumilShah26/Restaurant-Management-Front-End" target='_blank' rel="noopener noreferrer" title="front-end"><i className='fa fa-github link-icon'></i></a>
                        &nbsp; &nbsp;
                        <a href="https://github.com/DhrumilShah26/Restaurant-Management-Back-End" target='_blank' rel="noopener noreferrer" title="back-end"><i className='fa fa-github link-icon'></i></a>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Technologies used: ReactJS, Redux, Bootstrap4, NodeJS, ExpressJS, MongoDB, Mongoose, Docker</p>
                    <span>
                      &bull; Developed a restaurant management system from which the user can login and can order various cuisines <br/>
                      &bull; Implemented user authentication and verification using passport.js and JWT <br/>
                      &bull; Database is stored in MongoDB collection using different database schemas <br/>
                      &bull; Developed various RESTful API endpoints using ExpressJS router <br/>
                    </span>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <span className='heading'>Face-Mask-Detection </span>&nbsp; &nbsp;
                        <a href="https://github.com/DhrumilShah26/Face-Mask-Detection" target='_blank' rel="noopener noreferrer" title="Source Code"><i className='fa fa-github link-icon'></i></a>
                        </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Technologies used: Python, Tensorflow, Keras, OpenCV, Pandas, Numpy, Scikit-Learn, Matplotlib</p>
                    <span>
                      &bull; Converted all the images into grayscale images using OpenCV and gave it to CNN as an input for training <br/>
                      &bull; Implemented CNN model using Keras and Tensorflow libraries with 97% accuracy <br/>
                      &bull; Live face detecting using OpenCV will give prediction whether a face is covered with a mask or not <br/>
                    </span>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <span className='heading'>Weather Finder </span>&nbsp; &nbsp;
                        <a href="https://github.com/DhrumilShah26/Weather-API" target='_blank' rel="noopener noreferrer" title="Source Code"><i className='fa fa-github link-icon'></i></a>
                        &nbsp;&nbsp;
                        <a href="https://weather-finder-webapp.netlify.app/" target='_blank' rel="noopener noreferrer" title="Demo"><i className='fa fa-link link-icon'></i></a>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Technologies used: ReactJS, Bootstrap4</p>
                    <span>
                      &bull; Fetches the weather information through an API call of openweathermap.org <br/>
                      &bull; Successfully render the information into React component <br/>
                    </span>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <span className='heading'>Tic-Tac-Toe Game </span>&nbsp; &nbsp;
                        <a href="https://github.com/DhrumilShah26/Tic-Tac-Toe" target='_blank' rel="noopener noreferrer" title="Source Code"><i className='fa fa-github link-icon'></i></a>
                        &nbsp; &nbsp;
                        <a href="https://tictactoe-game-play.netlify.app/" target='_blank' rel="noopener noreferrer" title="Demo"><i className='fa fa-link link-icon'></i></a>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Technologies used: ReactJS, Bootstrap4</p>
                    <span>
                      &bull; Developed two player tic-tac-toe game using React for learning purpose <br/>
                      &bull; Learned basic concepts of ReactJS such as Components and Props, State and LifeCycle, Handling Events, Rendering Elements <br/>
                    </span>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <span className='heading'>Web Search Engine </span>&nbsp; &nbsp;
                        <a href="https://github.com/DhrumilShah26/Web-Search-Engine" target='_blank' rel="noopener noreferrer" title="Source Code"><i className='fa fa-github link-icon'></i></a>
                        </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Technologies used: Java, Python</p>
                    <span>
                      &bull; Developed a Web Search Engine in Java <br/>
                      &bull; Implemented features such as Web Crawler, Pattern Matching, Html To Text, Inverted Index and Page Ranking <br/>
                      &bull; Concepts used - Depth First Search (DFS), Regular Expression, Jsoup Library, HashMap, Sorting <br/>
                    </span>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <span className='heading'>Twitter Sentiment Analysis </span>&nbsp; &nbsp;
                        <a href="https://github.com/DhrumilShah26/Twitter-sentiment-analysis" target='_blank' rel="noopener noreferrer" title="Source Code"><i className='fa fa-github link-icon'></i></a>
                        </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Technologies used: Python, Matplotlib</p>
                    <span>
                      &bull; Extracted live Twitter textual data to understand the real sentiment of those tweets using tweepy library <br/>
                      &bull; Classified tweets into three categories Positive, Negative and Neutral using textblob library <br/>
                      &bull; Visualized all the results combined in different charts using matplotlib library <br/>
                    </span>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>       
      </div>
    </section>
  );
  }
}

export default Projects;
