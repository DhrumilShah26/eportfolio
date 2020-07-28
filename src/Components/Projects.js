import React, { Component } from 'react';
import TicTacToe from '../assets/projects/tic-tac-toe.png';
import TwitterSA from '../assets/projects/twitter-sentiment-analysis.png';
import WeatherFinder from '../assets/projects/weather-finder.png';

class Projects extends Component {
  render() {

    /*if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = projects.image;
        return <div key={projects.title} className="columns projects-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="projects-item-meta">
                    <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
                <div>{projects.title}</div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }*/

    return (
      <section id="projects">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Work.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

              <div className="columns projects-item">
                <a href='https://master.d2ztmxrnpvicp4.amplifyapp.com/' title="Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">
                <img alt="Tic-Tac-Toe" src={TicTacToe} />
                <div className="overlay">
                  <div className="projects-item-meta">
                    <h5>Tic-Tac-Toe</h5>
                    <p>A react based Tic-Tac-Toe game</p>
                  </div>
                </div>
                <div>Tic-Tac-Toe</div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>

              <div className="columns projects-item">
                <a href='https://master.d2n1cg39pf5ptq.amplifyapp.com/' title="Weather Finder" target="_blank" rel="noopener noreferrer">
                <img alt="weather finder" src={WeatherFinder} />
                <div className="overlay">
                  <div className="projects-item-meta">
                    <h5>Weather Finder</h5>
                    <p>A React based weather finder app which fetch the data through API call</p>
                  </div>
                </div>
                <div>Weather Finder</div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>

              <div className="columns projects-item">
                <a href='https://github.com/DhrumilShah26/Twitter-sentiment-analysis' title="Twitter Sentiment Analysis" target="_blank" rel="noopener noreferrer">
                <img alt="Twitter Sentiment Analysis" src={TwitterSA} />
                <div className="overlay">
                  <div className="projects-item-meta">
                    <h5>Twitter Sentiment Analysis</h5>
                    <p>Python based sentiment analysis using tweepy and textblob</p>
                  </div>
                </div>
                <div>Twitter Sentiment Analysis</div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>

            </div>
          </div>
      </div>
    </section>
  );
  }
}

export default Projects;
