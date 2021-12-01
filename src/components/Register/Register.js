import {Formik} from "formik";

const validatePassword=RegExp("^(?=.*/d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$");


function Register({history}){
    return(
    <> 
        <button onClick={()=> history.push("/Home")}>Login</button>
        <Formik
            initialValues={{
                firstName:"",
                lastName:"",
                emailId:"",
                password:"",
                rePassword:"",
                passwordShow:""

            }}
            validate={(values)=>{
                const errors={};
                if (!validatePassword.test(values.password)) {
                    errors.password="Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
                }
                else if (values.password!==values.rePassword) {
                    errors.rePassword="Password doesnot match";
                }
                return errors;
            }}
            onSubmit={(values)=>{
                console.log(values)
            }}
        >
        {({handleChange, handleSubmit, values, errors})=>{
            return(
                <>
                 <form onSubmit ={handleSubmit}>
                    <h1>Register</h1>
                    <div>
                        <label><b>FirstName :</b> </label>
                        <input 
                        name="firstName"
                        type="text"
                        value={values.firstName}
                        onChange={handleChange}
                        required 
                        />
                        <span>{errors.firstName}</span>
                    </div>
                    <br/>
                    <div>
                        <label><b>LastName :</b> </label>
                        <input 
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        onChange={handleChange}
                        required 
                        />
                        <span>{errors.lastName}</span>
                    </div>
                    <br/>
                    <div>
                        <label><b>Email :</b> </label>
                        <input 
                        name="emailId"
                        type="email"
                        value={values.emailId}
                        onChange={handleChange}
                        required 
                        />
                        <span>{errors.emailId}</span>
                    </div>
                    <br/>
                    <div>
                    <label><b>Password : </b></label>
                        <input 
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        required 
                        />
                        <span>{errors.password}</span>
                    </div>
                    <br/>
                    <div>
                    <label><b> ReEnter Password : </b></label>
                        <input 
                        name="rePassword"
                        type="password"
                        value={values.rePassword}
                        onChange={handleChange}
                        required 
                        />
                        <span>{errors.rePassword}</span>
                    </div>
                    <br/>
                    <div>
                        <input 
                        name="passwordShow"
                        type="checkbox"
                        value={values.passwordShow}
                        onChange={handleChange}
                        required 
                        />
                        <label><b>Show Password</b></label>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                    <br/>
                </form>
                </>
            )
        }}
          </Formik>
          </>
    );
}

export default Register;