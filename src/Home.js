import sunriseImage from './Images/sunrise.jpg'
import { Row, Col } from 'reactstrap';

function Home() {
  return (
    <>
      <Row>
        <Col xs="12">
          <img src={sunriseImage} alt="Sunrise Walk"/> 
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h3>Start your journey to mental health</h3>
          <p>Let this website be your guide to a happier, healthier mindset. With MindfulMentor, you can explore a variety of mental health resources, activities and tips. With a MindfulMentor account you can save your favorite resources and tips and refer back to them at any time. Connecting with others with similar mental health goals is a great way to help you reach yours. With this website, you can connect with friends and others to take your mental health journeys together. Login or sign up below to begin your journey and take the first step toward improved mental health.</p>
          <button className="btn btn-primary" type="button">Sign Up</button>
        </Col>
      </Row>
    </>
  );
}

export default Home;
