import sunriseImage from './Images/sunrise.jpg'

function Home() {
  return (
    <div className="Home">
        <img src={sunriseImage} alt="Sunrise Walk"/> 
        <h3>Start your journey to mental health</h3>
        <p>Let this website be your guide to a happier, healthier mindset. With MindfulMentor, you can explore a variety of mental health resources, activities and tips. With a MindfulMentor account you can save your favorite resources and tips and refer back to them at any time. Connecting with others with similar mental health goals is a great way to help you reach yours. With this website, you can connect with friends and others to take your mental health journeys together. Login or sign up below to begin your journey and take the first step toward improved mental health.</p>
        <button type="button">Sign Up</button>
    </div>
  );
}

export default Home;
