import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  LinearProgress,
} from '@mui/material';
import { AppButton, AppIconButton } from '../../../components';
import { AppForm } from '../../../components/forms';
import { useAppForm, SHARED_CONTROL_PROPS, eventPreventDefault } from '../../../utils/form';
import axios from 'axios';

const VALIDATE_FORM_SIGNUP = {
  email: {
    email: true,
    presence: true,
  },
  phone: {
    type: 'string',
    format: {
      pattern: '^$|[- .+()0-9]+',
      message: 'should contain numbers',
    },
  },
  firstName: {
    type: 'string',
    presence: { allowEmpty: false },
    format: {
      pattern: '^[A-Za-z ]+$',
      message: 'should contain only alphabets',
    },
  },
  lastName: {
    type: 'string',
    presence: { allowEmpty: false },
    format: {
      pattern: '^[A-Za-z ]+$',
      message: 'should contain only alphabets',
    },
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      maximum: 32,
      message: 'must be between 8 and 32 characters',
    },
  },
};

const VALIDATE_EXTENSION = {
  confirmPassword: {
    equality: 'password',
  },
};

/**
 * Renders "Signup" view
 * url: /auth/signup
 */
const SignupView = () => {
  const navigate = useNavigate();
  const [validationSchema, setValidationSchema] = useState({
    ...VALIDATE_FORM_SIGNUP,
    ...VALIDATE_EXTENSION,
  });
  const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError] = useAppForm({
    validationSchema: validationSchema,
    initialValues: {
      firstName: '',
      gender: '',
      lastName: '',
      region: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      DOB: '',
      desiredRegion: '',
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showCourierFields, setShowCourierFields] = useState(false);
  const values = formState.values;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let newSchema;
    if (showPassword) {
      newSchema = VALIDATE_FORM_SIGNUP;
    } else {
      newSchema = { ...VALIDATE_FORM_SIGNUP, ...VALIDATE_EXTENSION };
    }
    setValidationSchema(newSchema);
  }, [showPassword]);

  const handleShowPasswordClick = useCallback(() => {
    setShowPassword((oldValue) => !oldValue);
  }, []);

  const handleFormSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);

      try {
        // await axios.post('http://192.168.31.131:5000/api/users/register', {
        //   ...values,
        // });
        console.log(values);
        navigate('/login', { replace: true });
      } finally {
        setLoading(false);
      }
    },
    [values, navigate]
  );

  const handleCourierRole = () => {
    setShowCourierFields((prevState) => !prevState);
  };

  if (loading) return <LinearProgress />;

  return (
    <AppForm onSubmit={handleFormSubmit}>
      <Card>
        <CardHeader title="Sign Up" sx={{ textAlign: 'center' }} />
        <CardContent>
          <TextField
            required
            label="Email"
            name="email"
            value={values.email}
            error={fieldHasError('email')}
            helperText={fieldGetError('email') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            label="Phone"
            name="phone"
            value={values.phone}
            error={fieldHasError('phone')}
            helperText={fieldGetError('phone') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            label="First Name"
            name="firstName"
            value={values.firstName}
            error={fieldHasError('firstName')}
            helperText={fieldGetError('firstName') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            label="Last Name"
            name="lastName"
            value={values.lastName}
            error={fieldHasError('lastName')}
            helperText={fieldGetError('lastName') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            type={showPassword ? 'text' : 'password'}
            label="Password"
            name="password"
            value={values.password}
            error={fieldHasError('password')}
            helperText={fieldGetError('password') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AppIconButton
                    aria-label="toggle password visibility"
                    icon={showPassword ? 'visibilityon' : 'visibilityoff'}
                    title={showPassword ? 'Hide Password' : 'Show Password'}
                    onClick={handleShowPasswordClick}
                    onMouseDown={eventPreventDefault}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            label="Gender"
            name="gender"
            value={values.gender}
            error={fieldHasError('gender')}
            helperText={fieldGetError('gender') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            label="Region"
            name="region"
            value={values.region}
            error={fieldHasError('region')}
            helperText={fieldGetError('region') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <FormControlLabel control={<Checkbox onChange={handleCourierRole} />} label="I am registering as a courier" />

          {showCourierFields && (
            <>
              <TextField
                required
                type="date"
                label="DOB"
                name="DOB"
                value={values.DOB}
                error={fieldHasError('DOB')}
                helperText={fieldGetError('DOB') || ' '}
                onChange={onFieldChange}
                {...SHARED_CONTROL_PROPS}
              />
              <TextField
                required
                label="Desired Region"
                name="desiredRegion"
                value={values.desiredRegion}
                error={fieldHasError('desiredRegion')}
                helperText={fieldGetError('desiredRegion') || ' '}
                onChange={onFieldChange}
                {...SHARED_CONTROL_PROPS}
              />
            </>
          )}

          <Grid container justifyContent="center" alignItems="center">
            <AppButton type="submit" disabled={!formState.isValid}>
              Confirm and Sign Up
            </AppButton>
          </Grid>
        </CardContent>
      </Card>
    </AppForm>
  );
};

export default SignupView;
