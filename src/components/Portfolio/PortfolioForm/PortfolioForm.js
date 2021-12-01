import { Formik,Field,Form,FieldArray } from "formik";
import axios from "axios";
import "./PortfolioForm.css";
import {AddCircle,RemoveCircle} from "@material-ui/icons";

const API_URL='https://portfoliocreater-backend.herokuapp.com/info/formInfo';

const initialValues={
  fullName:"",
  email:"",
  about:"",
  resume:"",
  facebook:"",
  instagram:"",
  linkedIn:"",
  github:"",
  Skills: [
    {
      name: "",
      percentage: ""
    }
  ],
  Project: [
    {
      project_name: "",
      project_description:"",
      project_link: ""
    }
  ],
  Experience: [
    {
      position: "",
      company_name: "",
      duration:""
    }
  ]
}
 

function PortfolioForm (props){
  return (
   <Formik
   initialValues={initialValues}
     validate={()=>{
       return{};
     }}
       onSubmit={async(values)=>{
        await axios.post(API_URL,{
          fullName:values.fullName,
          email:values.email,
          about:values.about,
          resume:values.resume,
          Skills:values.Skills,
          Project:values.Project,
          Experience:values.Experience,
          facebook:values.facebook,
          instagram:values.instagram,
          linkedIn:values.linkedIn,
          github:values.github
      }
      ,{headers:{'auth':`${localStorage.getItem('auth')}`}})
      .then(res=>{
         props.history.push("/portfolio");
      })
       }}
     >
       {({handleChange,handleSubmit,errors,values,touched,handleReset})=>{
         return(
                <div className="background_portfolioForm" >
                  <div className="portfolio__form" >
                  <h1>Portfolio Information</h1>
                  <p>Already filled the form? <button className="redirect_button" onClick={()=>{
                    props.history.push("/portfolio");}} >click here</button></p>
                  <Form onSubmit={handleSubmit} > 
                  <div >
                  <input 
                  type="text"
                  name='fullName'
                  placeholder="Name"
                  value={values.fullName}
                  onChange={handleChange}
                  className="portfolioform__FormInputs"
                  />
                  {errors.fullName && <p>{errors.fullName}</p>} 

                  </div>
                  <div >
                  <input 
                  type="email"
                  name='email'
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  className="portfolioform__FormInputs"
                  />
                  {errors.email && <p>{errors.email}</p>} 
                  </div>
                  <div >
                  <input 
                  type="text"
                  name='facebook'
                  placeholder="Facebook profile link"
                  value={values.facebook}
                  onChange={handleChange}
                  className="portfolioform__FormInputs"
                  />
                  {errors.facebook && <p>{errors.facebook}</p>} 
                  </div>
                  <div >
                  <input 
                  type="text"
                  name='instagram'
                  placeholder="Instagram Profile Link"
                  value={values.instagram}
                  onChange={handleChange}
                  className="portfolioform__FormInputs"
                  />
                  {errors.instagram && <p>{errors.instagram}</p>} 
                  </div>
                  <div >
                  <input 
                  type="text"
                  name='linkedIn'
                  placeholder="linkedIn link"
                  value={values.linkedIn}
                  onChange={handleChange}
                  className="portfolioform__FormInputs"
                  />
                  {errors.linkedIn && <p>{errors.linkedIn}</p>} 
                  </div>
                  <div >
                  <input 
                  type="text"
                  name='github'
                  placeholder="github link"
                  value={values.github}
                  onChange={handleChange}
                  className="portfolioform__FormInputs"
                  />
                  {errors.github && <p>{errors.github}</p>} 
                  </div>
                  <div >
                  <input 
                  type="text"
                  name='about'
                  placeholder="About"
                  value={values.about}
                  onChange={handleChange}
                  className="portfolioform__FormInputs"
                  />
                  {errors.about && <p>{errors.about}</p>} 
                  </div>
                  <div >
                  <input 
                  type="text"
                  name='resume'
                  placeholder="resumelink"
                  value={values.resume}
                  onChange={handleChange}
                  className="portfolioform__FormInputs"
                  />
                  {errors.resume && <p>{errors.resume}</p>} 
                  </div>
                  <br/>
                  <h3>Skills</h3>
                  <FieldArray 
                  name="Skills"
                  render={({ insert, remove, push }) => (
                  <div >
                  {values.Skills.length > 0 &&
                    values.Skills.map((skill, index) => (
                      <div key={index}>
                        <div >
                          <Field
                            name={`Skills.${index}.name`}
                            placeholder="Skill"
                            type="text"
                            className="portfolioform__FormInputs"
                          />
                          {errors.Skills &&
                            errors.Skills[index] &&
                            errors.Skills[index].name &&
                            touched.Skills &&
                            touched.Skills[index].name && (
                              <div className="field-error">
                                {errors.Skills[index].name}
                              </div>
                            )}
                        </div>
                        <div >
                          <Field
                            name={`Skills.${index}.percentage`}
                            placeholder="percentage"
                            type="number"
                            className="portfolioform__FormInputs"
                          />
                          {errors.Skills &&
                            errors.Skills[index] &&
                            errors.Skills[index].percentage &&
                            touched.Skills &&
                            touched.Skills[index].percentage && (
                              <div className="field-error">
                                {errors.Skills[index].percentage}
                              </div>
                            )}
                        </div>
                        <div >
                          <button
                            type="button"
                            className="portfolioform__button"
                            onClick={() => remove(index)}
                            
                          >
                            <RemoveCircle />
                          </button>
                        </div>
                      </div>
                    ))}
                  <button 
                    type="button"
                    className="portfolioform__button"
                    onClick={() => push({ name: "", percentage: "" })}
                  >
                  <AddCircle />
                  </button>
                  </div>
                  )}
                  />
                  <br/>
                  <h3>Projects</h3>
                  <FieldArray 
                  name="Project"
                  render={({ insert, remove, push }) => (
                  <div>
                  {values.Project.length > 0 &&
                    values.Project.map((skill, index) => (
                      <div  key={index}>
                        <div >
                          <Field
                            name={`Project.${index}.project_name`}
                            placeholder="Project Name"
                            type="text"
                            className="portfolioform__FormInputs"
                          />
                          {errors.Project &&
                            errors.Project[index] &&
                            errors.Project[index].project_name &&
                            touched.Project &&
                            touched.Project[index].project_name && (
                              <div className="field-error">
                                {errors.Project[index].project_name}
                              </div>
                            )}
                        </div>
                        <div>
                          <Field
                            name={`Project.${index}.project_description`}
                            placeholder="project_description"
                            type="text"
                            className="portfolioform__FormInputs"
                          />
                          {errors.Project &&
                            errors.Project[index] &&
                            errors.Project[index].project_description &&
                            touched.Project &&
                            touched.Project[index].project_description && (
                              <div className="field-error">
                                {errors.Project[index].project_description}
                              </div>
                            )}
                        </div>
                        <div>
                          <Field
                            name={`Project.${index}.project_link`}
                            placeholder="project_link"
                            type="text"
                            className="portfolioform__FormInputs"
                          />
                          {errors.Project &&
                            errors.Project[index] &&
                            errors.Project[index].project_link &&
                            touched.Project &&
                            touched.Project[index].project_link && (
                              <div className="field-error">
                                {errors.Project[index].project_link}
                              </div>
                            )}
                        </div>
                          <button 
                            type="button"
                            className="portfolioform__button"
                            onClick={() => remove(index)}
                          >
                            <RemoveCircle />
                          </button>
                      </div>
                    ))}
                  <button 
                    type="button"
                    className="portfolioform__button"
                    onClick={() => push({ project_name: "",project_description:"", project_link: "" })}
                  >
                    <AddCircle />
                  </button>
                  </div>
                  )}
                  />
                  <br />
                  <h3>Experience</h3>
                  <FieldArray 
                  name="Experience"
                  render={({ insert, remove, push }) => (
                  <div>
                  {values.Experience.length > 0 &&
                    values.Experience.map((skill, index) => (
                      <div key={index}>
                        <div >
                          <Field
                            name={`Experience.${index}.position`}
                            placeholder="position"
                            type="text"
                            className="portfolioform__FormInputs"
                          />
                          {errors.Experience &&
                            errors.Experience[index] &&
                            errors.Experience[index].position &&
                            touched.Experience &&
                            touched.Experience[index].position && (
                              <div className="field-error">
                                {errors.Experience[index].position}
                              </div>
                            )}
                        </div>
                        <div>
                          <Field
                            name={`Experience.${index}.company_name`}
                            placeholder="company_name"
                            type="text"
                            className="portfolioform__FormInputs"
                          />
                          {errors.Experience &&
                            errors.Experience[index] &&
                            errors.Experience[index].company_name &&
                            touched.Experience &&
                            touched.Experience[index].company_name && (
                              <div className="field-error">
                                {errors.Experience[index].company_name}
                              </div>
                            )}
                        </div>
                        <div >
                          <Field
                            name={`Experience.${index}.duration`}
                            placeholder="duration"
                            type="text"
                            className="portfolioform__FormInputs"
                          />
                          {errors.Experience &&
                            errors.Experience[index] &&
                            errors.Experience[index].duration &&
                            touched.Experience &&
                            touched.Experience[index].duration && (
                              <div className="field-error">
                                {errors.Experience[index].duration}
                              </div>
                            )}
                        </div>
                        
                          <button 
                            type="button"
                            className="portfolioform__button"
                            onClick={() => remove(index)}
                          >
                          <RemoveCircle />
                          </button>
                      </div>
                    ))}
                  <button 
                    type="button"
                    className="portfolioform__button"
                    onClick={() => push({ position: "", company_name: "", duration:"" })}
                  >
                    <AddCircle />
                  </button>
                  </div>
                  )}
                  />
                  <button
                   className="portfolioform__FormButton"
                  onClick={event => {
                  event.preventDefault();
                  handleReset();
                  }}
                  >
                  Reset
                  </button>


                  <button 
                  className="portfolioform__FormButton" 
                  type="submit">
                  SUBMIT
                  </button>
                  </Form>
                  </div> 
                  </div>
                  )
                  }}

   </Formik>   
  )
}

export default PortfolioForm;
