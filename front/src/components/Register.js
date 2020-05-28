import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

function Register(props) {

  const [datebirth,setDate]= useState();
  const [age,setAge]= useState({});


  const calculate_age = (dob1) => {

    const birthDate = new Date(dob1); 
    const difference = Date.now() - birthDate.getTime();
    const age_now = new Date(difference);
    console.log(age_now);
    return Math.abs(age_now.getUTCFullYear() - 1970);
 
  }

  const handleChange_age = (event) => {
    console.log("DOB:", event.target.value);

    setDate({ datebirth: event.target.value }, () => {
      // example of setState callback
      // this will have the latest this.state.dob1
      console.log(datebirth);
    })

    // call calculate_age with event.target.value
    const age_latest = {age_latest: calculate_age(event.target.value)}
    console.log(age_latest);

    setAge(age_latest )
      // this will have the latest this.state.age1
      console.log("Age:", age);

  }

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();

  const fetching = async () => {
    fetch("/register");
  }


  const [state, setState] = React.useState({
    occupation: '',
    name: 'hai',
    gender:''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div
                  className="col-lg-6 d-none d-lg-block bg-login-image"
                  id="bg-login-image"
                >
                  {" "}
                  <img
                    width="450"
                    height="740"
                    src="https://user-images.githubusercontent.com/26877363/81580679-5e400f00-9373-11ea-92ee-fbc1f92df077.jpg"
                    alt="Prendas de vestir"
                  ></img>
                </div>

                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Sign Up</h1>
                    </div>

                    <form method="POST" onSubmit={fetching}>
                      

                    <div className="form-group">
                        <label className="label-input" htmlFor="nameRegister">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="nameRegister"
                          id="nameRegister"
                          className="form-control"
                          required
                        />
                      </div>
                   
                      <div className="form-group">
                        <label className="label-input" htmlFor="username">
                          Username
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="username"
                          id="usernameRegister"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-input" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="passwordRegister"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="label-input"
                          htmlFor="password2Register"
                        >
                          Repeat password
                        </label>
                        <input
                          type="password"
                          name="password2Register"
                          id="password2Register"
                          className="form-control"
                          required
                        />
                      </div>


                      <div className="form-group">
                        <label
                          className="label-input"
                          htmlFor="Age"
                        >
                         Age
                        </label>
                        <input
                          type="age"
                          name="age"
                          id="age"
                          className="form-control"
                          required
                        />
                      </div>

                       <div className="form-group col-lg-12">
                   <InputLabel htmlFor="occupation">Occupation</InputLabel>
                    <Select
                    native
                    className="form-control"
                    value={state.occupation}
                    onChange={handleChange}
                     inputProps={{
                    name: 'occupation',
                     id: 'occupation',
                    }}
                     name="occupation"
                    
                    >
                    <option aria-label="None" value="" />
                     <option value="Student">Student</option>
                      <option value="Worker">Worker</option>
                      <option value="Other">Other</option>
                      </Select>
                       </div>

                       <div className="form-group col-lg-12">
                   <InputLabel htmlFor="gender">Gender</InputLabel>
                    <Select
                    native
                    className="form-control"
                    value={state.gender}
                    onChange={handleChange}
                     inputProps={{
                    name: 'gender',
                     id: 'gender',
                    }}
                     name="gender"
                    
                    >
                    <option aria-label="None" value="" />
                     <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                      </Select>
                       </div>


                      <div className="form-group">
                        <label
                          className="label-input"
                          htmlFor="phone_register"
                          className="primary"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          name="phoneRegister"
                          id="phoneRegister"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-input" htmlFor="email_register">
                          Email
                        </label>
                        <input
                          type="email"
                          name="emailRegister"
                          id="emailRegister"
                          className="form-control"
                          required
                        />
                      </div>
                      <button type="submit" className="btn">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Register;
