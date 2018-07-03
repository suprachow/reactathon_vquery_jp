import React, { Component } from 'react';
import './Home.css';
import experience from './icons/experience.png';
import location from './icons/location.png';
import blackStar from './icons/star-black.png';
import redStar from './icons/star-red.png';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        //this.state = {firstName: '', lastName: '', emailAddress: '', type: '', contactNumber : '', password : '', confirmPassword: ''};
        this.allJobs = [{"jobTitle":"Software Engineer", "experience":"12-15yrs", "location":"banglore","keySkills":"java,angular js","savedJob":'false'},
        {"jobTitle":"Software Engineer2", "experience":"12-25yrs", "location":"banglore2","keySkills":"java,angular js2","savedJob":'false'},
        {"jobTitle":"Software Engineer3", "experience":"12-35yrs", "location":"banglore3","keySkills":"java,angular js1","savedJob":'true'}];
      }

      handleClick(event) {
        alert('Job applied successfully');
        //event.preventDefault();
      }
      
   render() {
       var length = this.allJobs.length;
       var rows = [];
       for (var i = 0; i < length; i++) {
           var job = this.allJobs[i];           
            rows.push(
            <div className={"allJobsDiv"}>
                <div className={"JobsDiv"}>
                    <div className={"jobTitleDiv"}>{job.jobTitle}</div>
                    <div className={"experienceDiv"}>
                        <img src={ experience } className={"image"} />
                        {job.experience} <img src={ location } className={"image"} /> {job.location}
                    </div>
                    <div className={"keySkillsDiv"}>Key Skills : {job.keySkills}     
                        <img src={ blackStar } className={job.savedJob === 'true'? 'hidden' : 'image'}/>
                        <img src={ redStar } className={job.savedJob === 'true'? 'image' : 'hidden'}/>
                    </div>
                    <div><button onClick={this.handleClick}>Apply</button></div>
                </div>
            </div>
            );
       }
      return (
         <div>
            <h2>All Jobs</h2>
            {rows}
         </div>         
      );
   }
}

export default Home;