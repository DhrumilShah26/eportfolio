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

class Education extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        </div>
      })
      /*
      var skills = this.props.data.skills.map(function(skills){
      var projectImage = 'eportfolio/images/tech/'+skills.image;
        return <div key={skills.name} className="columns feature-item">
                  <img className='skill' alt={skills.name} src={projectImage} />
                  <h5>{skills.name}</h5>
                  
               </div>
      })*/
    }

    return (
      <section id="education">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div>
           <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>
				   <ul className="bgrid-quarters s-bgrid-thirds cf">

              <div className="columns feature-item">
                <img className='skill' alt='Git' src={Git} />
                <h5>Git</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='Java' src={Java} />
                <h5>Java</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='React Js' src={React_JS} />
                <h5>React Js</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='Node Js' src={Node_JS} />
                <h5>Node Js</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='Bootstrap' src={Boot_strap} />
                <h5>Bootstrap</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='MongoDB' src={Mongo_db} />
                <h5>MongoDB</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='Python' src={Python} />
                <h5>Python</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='Html' src={Html} />
                <h5>HTML</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='Css' src={Css} />
                <h5>CSS</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='Mysql' src={Mysql} />
                <h5>MySql</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='Tensorflow' src={Tensorflow} />
                <h5>Tensorflow</h5>
              </div>

              <div className="columns feature-item">
                <img className='skill' alt='Javascript' src={Javascript} />
                <h5>Javascript</h5>
              </div>
					 </ul>
			  </div>
      </div>
   </section>
    );
  }
}

export default Education;
