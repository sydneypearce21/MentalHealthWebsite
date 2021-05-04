import {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const axios = require('axios').default;

/*class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
        username: "",
        email: "",
        password: ""
    };
  }

// when component mounts, first thing it does is fetch all existing data in our db
// then we incorporate a polling logic so that we can easily see if our db has
// changed and implement those changes into our UI
componentDidMount() {
  this.getDataFromDb();
}

// never let a process live forever
// always kill a process everytime we are done using it
componentWillUnmount() {
  if (this.state.intervalIsSet) {
    clearInterval(this.state.intervalIsSet);
    this.setState({ intervalIsSet: null });
  }
}

getDataFromDb = () => {
  fetch('http://localhost:9000/testDB')
    .then((user) => user.json())
    .then((res) => this.setState({ user: res.user }));
};

putDataToDB = (username, email, password) => {
  axios.post('http://localhost:9000/testDB', {
    username: username,
    email: email,
    password: password,
  });
};*/

const initialFormData = Object.freeze({
  email: "",
  password: ""
});

const Register = (props) => {
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    axios({
      method: 'post',
      url: '/api/register',
      data: formData
    });
  };

  return (
      <>

    <h1>Create an account</h1>

    <Form>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="email" name="email" id="Email" placeholder="Enter your email address" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" placeholder="Enter your password" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Button type="button" onClick={handleSubmit}>Submit</Button>
      </FormGroup>
    </Form>

    <h4>Create an account to receive updates via our weekly newsletters!</h4>
    </>
  );
}

export default Register;
