import React, { Component } from 'react';
import Git from '../assets/tech/git.jpg';
import Java from '../assets/tech/java.jpg';
import React_JS from '../assets/tech/react.jpg';
import Node_JS from '../assets/tech/node.jpg';
import Boot_strap from '../assets/tech/bootstrap.jpg';
import Mongo_db from '../assets/tech/mongo.jpg';
import Python from '../assets/tech/python.jpg';
import Html from '../assets/tech/html.jpg';
import Css from '../assets/tech/css.jpg';
import Mysql from '../assets/tech/mysql.jpg';
import Tensorflow from '../assets/tech/tensorflow.jpg';
import Javascript from '../assets/tech/javascript.jpg';

class Skills extends Component {
  render() {

    return (
      <section id="skill">

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns">
            <div className="row">

              <div className="three columns feature-item">
                <img className='skill' alt='Git' src={Git} />
                <h5>Git</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='Java' src={Java} />
                <h5>Java</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='React Js' src={React_JS} />
                <h5>React Js</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='Node Js' src={Node_JS} />
                <h5>Node Js</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='Bootstrap' src={Boot_strap} />
                <h5>Bootstrap</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='MongoDB' src={Mongo_db} />
                <h5>MongoDB</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='Python' src={Python} />
                <h5>Python</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='Html' src={Html} />
                <h5>HTML</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='Css' src={Css} />
                <h5>CSS</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='Mysql' src={Mysql} />
                <h5>MySql</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='Tensorflow' src={Tensorflow} />
                <h5>Tensorflow</h5>
              </div>

              <div className="three columns feature-item">
                <img className='skill' alt='Javascript' src={Javascript} />
                <h5>Javascript</h5>
              </div>	 
			</div>
            <div className="row">
                <br/>
                <br/>
                <h5>Additional Details</h5>
                <br/>

                <ul>
                    <li>
                        <span><i class="fa fa-check"></i></span>
                        <span className="details">Frameworks/libraries: </span><span className="details-1"> Redux, ExpressJS, Mongoose, Matplotlib, OpenCV, Keras, Scikit-Learn, Numpy, Pandas, SpringBoot, Hibernate</span>
                    </li>
                    <li>
                        <span><i class="fa fa-check"></i></span>
                        <span className="details">IDE and Tools:</span> <span className="details-1">Eclipse, Spyder, Visual Studio Code, Atom, Jupyter, GitHub, Postman, Google Colab</span>
                    </li>
                    <li>
                        <span><i class="fa fa-check"></i></span>
                        <span className="details">Project Management: </span><span className="details-1">Agile, Waterfall, Scrum, JIRA</span>
                    </li>
                    <li>
                        <span><i class="fa fa-check"></i></span>
                        <span className="details">Cloud Environment:</span> <span className="details-1">AWS, Google Cloud</span>
                    </li>
                </ul>
            </div>        
        </div>
    </div>
   </section>
    );
  }
}

export default Skills;
