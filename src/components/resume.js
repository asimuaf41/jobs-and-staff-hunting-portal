import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import jsPDF from 'jspdf';
import { Button } from 'react-bootstrap';
import ReactDOMServer from "react-dom/server"
import html2canvas from 'html2canvas';

export default class Resume extends Component{
    handle=()=>{
        const input = document.getElementById('divToPrint');
        
        html2canvas(input)
          .then((canvas) => {
           
           
            const imgData = canvas.toDataURL('image/jpeg', 2.0);
            const pdf = new jsPDF('p', 'mm', 'a4');
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.internal.scaleFactor = 30;
           
            pdf.addImage(imgData, 'JPEG', 0,0, width,height)
            // pdf.output('dataurlnewwindow');
            pdf.save("job-staff-hunting-resume.pdf");
          })
    }
    render(){
        return(
            <div>
                <div className="resume-button" >
                <Button onClick={this.handle}>download <i class="fa fa-download"></i></Button>
                </div>
        
          <div className="resume-page" id="divToPrint">
             <div className="resume-header">
             <div className="resume-dp">
             <div className="resume-pic">
             <img src={require('../images/asim.jpg')}
                    alt="my profile pic here"/>
                   
             </div>
             <div className="pic-detail">
             <h2>Asim Ali</h2>
             <p>React web developer /web developer</p>
             </div>
             </div>
             <div className="resume-contact-info">
             <h2>Contact information</h2>
             <p><i class="fa fa-tablet"></i> 03026046119</p>
             <p><i class="fa fa-envelope-o"></i> asimuaf41@gmail.com</p>
             <div className="address">
             <p><i class="fa fa-home"></i> chak 41/R.B tehsil:sangla hill distt nankana sahib </p>
             <p><i class="fa fa-home"></i> chak 41/R.B tehsil:sangla hill distt nankana sahib</p>
             </div>
             </div>
             </div>

             <div className="resume-skills">
             <h2><i class="fa fa-leanpub"></i> Strength and skills</h2>
             <div className="skill-element">


             <p><i class="fa fa-check-circle"></i> HTML</p>
             <p><i class="fa fa-check-circle"></i> CSS</p>
             <p><i class="fa fa-check-circle"></i> bootstrap</p>
             <p><i class="fa fa-check-circle"></i> java script</p>
             <p><i class="fa fa-check-circle"></i> J Query</p>
             <p><i class="fa fa-check-circle"></i> React</p>
             <p><i class="fa fa-check-circle"></i> React Native</p>
             <p><i class="fa fa-check-circle"></i> C++</p>
             <p><i class="fa fa-check-circle"></i> Express js</p>
             </div>
             </div>

             <div className="resume-skills">
             <h2><i class="fa fa-graduation-cap"></i> Education</h2>
             <MDBTable responsive borderless>
      <MDBTableHead>
        <tr>
          <th>Title</th>
          <th>institute</th>
          <th>score</th>
          <th>date</th>
         
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>BS(Software Engineering)</td>
          <td>university of agriculture faisalabad, Faisalabad</td>
          <td>3.7 CGPA</td>
          <td>2019</td>
          
        </tr>
        <tr>
         
          <td>FSc pre Engineering</td>
          <td>Govt degree college shahkot, shahkot</td>
          <td>70 %</td>
          <td>2015</td>
        </tr>
        <tr>
          <td>Matric</td>
          <td>govt hihg school check 42/rb, Sangla Hill</td>
          <td>86 %</td>
          <td>2013</td>
         
        </tr>
      </MDBTableBody>
    </MDBTable>
             </div>
             <div className="resume-skills">
             <h2><i class="fa fa-check-square-o"></i> Experiance Fresh</h2>
             <MDBTable responsive borderless>
      <MDBTableHead>
        <tr>
          <th>Company</th>
          <th>designation</th>
          <th>Duration</th>
          <th>Duration</th>
         
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Ideasols Technology Lahore</td>
          <td>ReactJS Developer / Web Developer</td>
          <td>Apr 2018 - Nov 2018</td>
          <td>7 months</td>
          
        </tr>
        
      </MDBTableBody>
    </MDBTable>
             </div>

             <div className="resume-skills">
             <h2><i class="fa fa-language"></i> Work History</h2>
             <div className="row1">
             <p>Ideasols Technology Lahore</p>
             <p>Apr 2018 - Nov 2018  (7 months)</p>
             </div>
             <div className="row2">
             <p>ReactJS Developer / Web Developer</p>
             <p>Lahore, Pakistan</p>
             </div>
             </div> 
            <div className="resume-other-skills">
            <div className="other-skill-row1">
            <h2><i class="fa fa-ravelry"></i> Industery</h2>
            <p>Software and web development</p>
            </div>
            <div className="other-skill-row1">
            <h2><i class="fa fa-eercast"></i> Functional Area</h2>
            <p>Software and web development</p>
            </div>
            </div>
             
            </div>
            </div>
        );
    }
}