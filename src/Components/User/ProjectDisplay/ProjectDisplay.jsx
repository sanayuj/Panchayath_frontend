import React, { useEffect } from 'react'
import "./ProjectDisplay.css"
import { getAllProjects } from '../../../Services/userApi';
const [project,setProject]=useState([])
function ProjectDisplay() {
    useEffect(()=>{
        getAllProjects().then((res)=>{
            console.log(res.data.data);
            setProject(res.data.data)
        })
    },[])
  return (
    <div>
    <h4 className='m-4 '>Panchayath's Projects</h4>
    <div className="accordion container-fluid accordionMainDiv" id="accordionPanelsStayOpenExample">
    <div className="accordion-item myAccordion">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
        <div className="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    </div>
    
  </div>
  )
}

export default ProjectDisplay