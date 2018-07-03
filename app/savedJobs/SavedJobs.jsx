import React, { Component } from 'react';
import './SavedJobs.css';
import experience from './icons/experience.png';
import location from './icons/location.png';
import blackStar from './icons/star-black.png';
import redStar from './icons/star-red.png';

class SavedJobs extends Component {
    constructor(props) {
        super(props);
        //this.state = {firstName: '', lastName: '', emailAddress: '', type: '', contactNumber : '', password : '', confirmPassword: ''};
        this.savedJobs = [{"jobTitle":"Software Engineer", "experience":"12-15yrs", "location":"banglore","keySkills":"java,angular js","savedJob":'true'},
        {"jobTitle":"Software Engineer2", "experience":"12-25yrs", "location":"banglore2","keySkills":"java,angular js2","savedJob":'true'},
        {"jobTitle":"Software Engineer3", "experience":"12-35yrs", "location":"banglore3","keySkills":"java,angular js1","savedJob":'true'}];
      }
      
   render() {
       var length = this.savedJobs.length;
       var rows = [];
       for (var i = 0; i < length; i++) {
           var job = this.savedJobs[i];           
            rows.push(
            <div className={"savedJobsDiv"}>
                <div className={"JobsDiv"}>
                    <div className={"jobTitleDiv"}>{job.jobTitle}</div>
                    <div className={"experienceDiv"}>
                        <img src={ experience } className={"image"} />
                        {job.experience} <img src={ location } className={"image"} /> {job.location}
                    </div>
                </div>
            </div>
            );
       }
      return (
         <div>
            <h2>Saved Jobs</h2>
            {rows}
         </div>         
      );
   }
}

export default SavedJobs;