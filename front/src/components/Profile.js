import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import StepperForm from "./StepperForm";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Profile(props) {

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const refPrice = useRef();
  const refDescription = useRef();
  const refImage = useRef();
  const refAddress = useRef();
  const refCity = useRef();
  const refCurrency = useRef();
  const refBathroom = useRef();
  const refFurnished= useRef();
  const refPref= useRef();
  const refPets= useRef();
  const [value, setValue] = React.useState('Pets Allowed');
  const [preference, setPreference] = React.useState('Any');

  const classes = useStyles();
  const [state, setState] = React.useState({
    furnished: '',
    name: 'hai',
    bathroom: '',
    currency: ''
  });

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleChangeValuePref = (event) => {
    setPreference(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="container">
    
      <div className="container justify-content-center">
      <div className="col-lg-12 bg-light">
        <div className="container">
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Add your Offer!</h1>
          </div>

    
          <form noValidate autoComplete="off" method="POST" action="/feed" encType="multipart/form-data">
           <div className="row">
           <div className="form-group col-lg-6">
              <label className="label-input" htmlFor="address">
               Address (main street)
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="form-control"
                required
                ref={refAddress}
              />
            </div>

                 
          <div className="form-group col-lg-6">
              <label className="label-input" htmlFor="city">
               City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
                required
                ref={refCity}
              />
            </div>
           </div>
       
          <div className="row">
          <div className="form-group col-lg-6">
           <InputLabel htmlFor="furniture">Furnished</InputLabel>
        <Select
          native
          value={state.furnished}
          onChange={handleChange}
          inputProps={{
            name: 'furnished',
            id: 'furniture',
          }}
          name="furnished"
          ref={refFurnished}
        >
          <option aria-label="None" value="" />
          <option value="Complete">Complete</option>
          <option value="Only room">Only room</option>
          <option value="No furniture">No furniture</option>
        </Select>
       </div>

       <div className="form-group col-lg-6">
           <InputLabel htmlFor="bathroom">Bathroom</InputLabel>
        <Select
          native
          value={state.bathroom}
          onChange={handleChange}
          inputProps={{
            name: 'bathroom',
            id: 'bathroom',
          }}
          name="bathroom"
          ref={refBathroom}
        >
          <option aria-label="None" value="" />
          <option value="Only Private">Only Private</option>
          <option value="Shared">Shared</option>
          <option value="Private and public">Private and public</option>
        </Select>
       </div>
          </div>
    
          <div className="row">
          <div className="form-group col-lg-6">
              <label className="label-input" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                required
                ref={refPrice}
              />
            </div>

            
            <div className="form-group col-lg-6">

            <InputLabel htmlFor="currency">Currency</InputLabel>
        <Select
          native
          value={state.currency}
          onChange={handleChange}
          inputProps={{
            name: 'currency',
            id: 'currency',
          }}
          name="currency"
         
                required
                ref={refCurrency}
        >
          <option aria-label="None" value="" />
          <option value="COL">COL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Select>
            </div>
          </div>

            <div className="form-group input-group col-lg-12">
              
              <label className="label-input" htmlFor="description">
                Description
              </label>

              <textarea
                name="description"
                id="description"
                className="form-control"
                required
                ref={refDescription}
              >
              </textarea>
            </div>
          
          <div className="row">
          <div className="form-group col-lg-6">
            <FormLabel component="legend">Pets</FormLabel>
         <RadioGroup aria-label="pets" name="pets" id="pets" value={value} onChange={handleChangeValue}  ref={refPets}>
         <FormControlLabel value="Allowed" control={<Radio />} label="Pets allowed" />
         <FormControlLabel value="Some pets" control={<Radio />} label="Some pets allowed" />
         <FormControlLabel value="No pets allowed" control={<Radio />} label="No pets allowed" />
         </RadioGroup>
         </div>

         <div className="form-group col-lg-6">
            <FormLabel component="legend">Gender Preference</FormLabel>
         <RadioGroup  className="justify-content-center" aria-label="gender preference" name="preference" id="preference" value={preference} onChange={handleChangeValuePref}  ref={refPref}>
         <FormControlLabel value="Any" control={<Radio />} label="Any gender" />
         <FormControlLabel value="Only women" control={<Radio />} label="Only women" />
         <FormControlLabel value="Only men" control={<Radio />} label="Only men" />
         </RadioGroup>
         </div>

          </div>

              
            <div className="form-group">
              <label className="label-input" htmlFor="image">
                Upload an image
              </label>
              <input
                className="form-control-file"
                type="file"
                name="image"
                id="image"
                ref={refImage}
                required
              />
            </div>


            <button className="btn" type="submit">
              Create
            </button>
          </form>
          <div className="register">
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
