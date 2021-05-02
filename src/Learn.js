import learn from './Images/learn.png';
export default function Learn() {
  return (
    <div className="Resources">

        <div><img src={learn} alt="Learn Logo" className="featured-image learn-image" /></div>
        
        <h1><strong>Learn About Mental Illness</strong></h1><br />
        <h2><b>Mental Illness Types</b></h2>

        <h3>Anxiety Disorders</h3>
        <p>People with anxiety disorders tend to repond to siutations with fear and dread</p>
        <u1>
            <li>Generalized Anxiety</li>
            <li>Panic Disorder</li>
            <li>Social Anxiety</li>
            <li>Specific Phobias</li>
        </u1>
        <h3>Mood Disorders</h3>
        <p>People with persistent feelings of sadness or feeling overly happy</p>
        <u1>
            <li>Depression</li>
            <li>Bipolar Disorder</li>
            <li>Cyclothymic Disorder</li>
        </u1>
        <h3>Psychotic Disorders</h3>
        <p>People with distorted awareness and thinking</p>
        <ul>
            <li>Hallucinations</li>
            <li>Delusions</li>
            <li>Schizophrenia</li>
        </ul>
        <h3>Eating Disorders</h3>
        <p>People with extreme emotions/behaviors about weight and food</p>
        <ul>
            <li>Anorexia Nervosa</li>
            <li>Bulimia Nervosa</li>
            <li>Binge Eating</li>
        </ul>
        <h3>OCD</h3>
        <p>People with constant thoughts or fears causing them to perform certain routines</p>
        <ul>
            <li>Obsessions</li>
            <li>Compulsions</li>
        </ul>
        <h3>PTSD</h3>
        <p>People who experienced a traumatic event, that have lasting frightening thoughts</p>


        <hr/>

        <h2><b>Covid-19 Impacts On Mental Illness</b></h2>

        <h3>Warning Signs</h3>
        
        <ul>
            <li>Feelings of anger, sadness, worry, frustration</li>
            <li>Changes in appetite, energy, interests</li>
            <li>Difficulty concentrating</li>
            <li>Difficulty sleeping</li>
            <li>Physical Reactions</li>
            <ul>
                <li>Headaches</li>
                <li>Body Pains</li>
                <li>Stomach problems</li>
                <li>Skin rashes</li>
            </ul>
            <li>Increased alcohol, tobacco, and other substances use</li>
        </ul>
        <h3>Coping during a difficult time</h3>
        <p>In order to cope during the difficult time of the Covid-19 pandemic, it is encouraged
            to take breaks from social media. Stay informed, but constantly hearing news can be depressing. 
            Disconnect for a few times a day to take care of your body. Same ways to do this are taking deep breaths,
            exercising, eating healthy, and getting plenty of sleep. Connect with others, either through
            a phone call or outdoor activity. Don't forget to help others along the way, so we can all getting through
            the difficult times together!
        </p>
    </div>
  );
}
