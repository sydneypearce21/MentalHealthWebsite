import skyedit from './Images/skyedit.jpg';
import activities from './Images/Activities.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (

    <div className="Activities">
        <img src={activities} alt="Helpful Activities to try" className="featured-image" />
        <h2>Recovery won’t happen overnight, but here are some daily exercises and tips to become more mindful of yourself
        and lead to overall improved mental health.</h2>
        <div style={{backgroundImage:`url(${skyedit})`, backgroundSize: '100%'}}>
        <Carousel autoPlay infiniteLoop interval="20000" transitionTime="2000">
            <div style={{ textAlign: 'left'}} >
                <h1><strong>Ways to be more productive</strong></h1>
                <ul>
                    <li><strong>Make a to-do list</strong></li>
                    <ul>
                        <li>
                            <p>Writing down daily tasks significantly increases chances of getting them done and it is gratifying to
                            check them off as you go through your day.
                            Making these lists with attainable tasks are important as well. Be easier on yourself and create
                    tasks that you are capable of completing that day considering time and resources necessary.</p>
                        </li>
                    </ul>
                    <li><strong>Take Breaks</strong></li>
                    <ul>
                        <li>
                            <p>Taking walks or exercising are good ways to give your brain a break and allowing your brain to
                            refresh.
                    Movement increases blood flow and will leave you feeling less anxious.</p>
                        </li>
                    </ul>
                    <li><strong>Focus on one goal at a time</strong></li>
                    <ul>
                        <li>
                            <p>Set aside a specific amount of time for this one goal or task.
                            Allow that time to fixate on completing this task only and not getting distracted with other tasks
                    on your to-do list.</p>
                        </li>
                    </ul>
                    <li><strong>Find your peak hours</strong></li>
                    <ul>
                        <li>
                            <p>Some people are morning people and others are not.
                            Figure out two hours of the day that you are most engaged and assign tasks that are more extraneous
                            during that time.
                    For simpler tasks, assign those around your personal peak hours.</p>
                        </li>
                    </ul>
                    <li><strong>Be optimistic</strong></li>
                    <ul>
                        <li><strong>Research shows that happiness increases productivity while being in a bad mood leads to
                        procrastination.
                        Instead of dwelling on the things you have to do, celebrate the progress you have made and look
                    forward to only making more.</strong></li>
                    </ul>
                </ul>
            </div>

            <div style={{textAlign: 'left'}}>
                <h1><strong>How to motivate yourself</strong></h1>
                <ul>
                    <li><strong>Get sunlight</strong></li>
                    <ul>
                        <li>
                            <p>Studies have shown that natural light boosts productivity and alertness.
                            Give yourself time to soak up the sun. If this is not possible especially during winter time,
                    consider purchasing a light box that brings glow to your workspace and imitates natural light.</p>
                        </li>
                    </ul>
                    <li><strong>Reward yourself</strong></li>
                    <ul>
                        <li>
                            <p>Rewards provide a personal motivation to get tasks done.
                            If completing the task is not gratifying enough, you can set rewards for yourself. Give a friend $20
                            and if you finish the task by a set time, retrieve the money.
                    If the task is not completed, you lose the money.</p>
                        </li>
                    </ul>
                    <li><strong>Start small</strong></li>
                    <ul>
                        <li>
                            <p>If large, strenuous tasks lead to you wanting to procrastinate more, start off with easy, little
                            tasks that make you feel productive to get your day flowing to find motivation to execute more
                    tasks.</p>
                        </li>
                    </ul>
                    <li><strong>Surround yourself with people who motivate you</strong></li>
                    <ul>
                        <li>
                            <p>Friends are great motivators but they can also hold you back.
                            Don’t put yourself in situations that you know will end in laying around.
                            Make plans with those who may have similar goals as you for the day and will want to achieve them
                    with you.</p>
                        </li>
                    </ul>
                    <li><strong>Listen to music that uplifts you</strong></li>
                    <ul>
                        <li><strong>Music is a great way to counteract the low energy you may have.
                        Upbeat music that inspires you to be productive can change your mindset to be more
                    motivated</strong></li>
                    </ul>
                    <li><strong>Be kinder to yourself</strong></li>
                    <ul>
                        <li><strong>Beating yourself up for having an off or lazy day will only lead to worsened moods therefore
                        being less motivated. Instead of fixating on taking a step back, focus that energy on taking a step
                        forward.
                        Be grateful for what you have. This may be as simple as being proud of yourself for getting up today
                    or having the ability to provide for yourself.</strong></li>
                    </ul>
                </ul>
            </div>

            <div style={{textAlign: 'left'}}>
                <h1><strong>How to seek help</strong></h1>
                <p>If you are enduring persistent symptoms of any mental illness described in the learn page, it may be time to seek
                further help.
                Many people go to their primary care physician for assistance.
                Primary care physicians can conduct screenings to test for depression and refer you or connect you with
                counselors, therapists, psychologists, or psychiatrists.
                Finding the right practice and provider may not be an easy process.
                Many practices may not take your insurance or have no availability to take in any new patients given the
                circumstances of the pandemic.
        It will be a search, but finding the right person for you will make it worth it!</p>
                <p>There are different mental health practitioners who are trained to provide different treatments.</p>
                <ul>
                    <li>A psychologist has a doctoral degree and is trained to evaluate a patient’s mental health through
                    interviews, psychological evaluations,
            and testing to diagnose and treat with therapy.</li>
                    <li>Counselors and therapists are also trained to evaluate a patient’s mental health to diagnose and treat with
            therapy.</li>
                    <li>Psychiatrists are licensed medical doctors who also have psychiatric training to diagnose mental health
                    conditions.
            These doctors are able to prescribe medications and monitor the effects while providing therapy.</li>
                    <li>Primary care physicians are also able to prescribe medications, but this is not their specialty.
            They can offer medication and referrals to other professionals who specialize in mental health.</li>
                </ul>
                <p>If getting professional help is not attainable for you financially, there are free services available.
                If you are a student, there are counseling services provided by the school.
                Most colleges have trained staff to address issues and provide counseling at their health centers.
        If you are not a student, there are centers and clinics that provide pro bono services.</p>
                <p>If you are not ready to seek professional help, you can start by talking to helplines which are free.
                Don’t be afraid or feel ashamed going to people you consider to be in your support system.
                The people in your life will most likely want to help and be willing to listen or just simply provide you
                company.
                Friends and family may also refer you to any of their connections and at the least provide you with their
        support.</p>
            </div>

            <div style={{textAlign: 'left'}}>
                <h1><strong>Struggling to get out of bed? Try these exercises</strong></h1>
                <p>There will be days that are worse than others. Some days it may feel impossible to get up and start your day.
        Here are some ways you can fight that.</p>
                <ul>
                    <li><strong>Be accountable to someone</strong></li>
                    <ul>
                        <li>Make plans with a friend or family member. This could be as simple as a walk, run, or grabbing a coffee.
                        Having plans are good motivators knowing you are accountable to meet these agreements to get up and do
                something, anything!</li>
                    </ul>
                    <li><strong>Visualize a successful moment</strong></li>
                    <ul>
                        <li>Whether success to you is getting an A on a test, scoring a goal, getting a bonus at work, or putting a
                        smile on someone else’s face, visualize this and imagine that positive feeling.
                Channeling this feeling may motivate you to get out of bed and start working towards success.</li>
                    </ul>
                    <li><strong>Brighten up your room</strong></li>
                    <ul>
                        <li>When you wake up, open up your curtains for natural light and turn on any additional lighting.
                Dark rooms are good for sleeping, but not for getting up. </li>
                    </ul>
                    <li><strong>Make your bed</strong></li>
                    <ul>
                        <li>Making your bed is a small easy task that provides you with instant gratification knowing you completed
                        this task.
                        It tidies up your space and will prevent you from wanting to get back in bed when it is freshly made.
            </li>
                    </ul>
                    <li><strong>Start thinking about food</strong></li>
                    <ul>
                        <li>Think about what you want for breakfast to start your day off with getting the nutrients you need.
                Cravings of food may be a good motivator to get you up.</li>
                    </ul>
                    <li><strong>Don't be afraid to ask for help</strong></li>
                    <ul>
                        <li>If you have reached a point where you are unable to motivate or help yourself, there is no shame in
                        reaching out for help.
                        If you live with anyone, you could ask them to come wake you up or just sit with you.
                Most people are open and willing to help, ask people in your life to be a motivator!</li>
                    </ul>
                </ul>
            </div>

            <div style={{textAlign: 'left'}}>
                <h1><strong>Self-love checklist</strong></h1>
                <p>Self love starts with self care and it is not selfish to seek. Caring for those around you is considered to be an
                emotionally healthy thing and taking care of yourself is, too.
                If you fail to check in on yourself, you will be left drained with nothing to give to others or yourself.
        Here are some ways to care for yourself:</p>
                <ul>
                    <li>Sleep at least seven hours a day</li>
                    <li>Exercise! This increases endorphins which are hormones that relieve pain and stress and bring a euphoric
            feeling.</li>
                    <li>Say “no” sometimes and be okay with it. Don’t feel pressured or obligated to do anything, it’s okay to focus
            on yourself.</li>
                    <li>Treat yourself! Buy yourself a gift or go for a massage. The little things can go a long way in uplifting
            your mood.</li>
                    <li>Let go of anything that does not serve you anymore. There is no need to put energy into things that don’t
            reciprocate it.</li>
                    <li>Take a hot bath.</li>
                    <li>Make a playlist of songs that leave you feeling good.</li>
                    <li>Start your day with an energizing smoothie.</li>
                    <li>Watch the sunset.</li>
                    <li>Perform a random act of kindness</li>
                    <li>Log off social media for the day.</li>
                    <li>Wash your bedding.</li>
                    <li>Make some art whether that’s coloring or starting a new project.</li>
                    <li>Meditate!</li>
                </ul>
            </div>

            <div style={{textAlign: 'left'}}>
                <h1><strong>Affirmations</strong></h1>
                <p>Practice saying or writing down daily affirmations. These are any positive thoughts that use this mindset to
        empower yourself. Here are some examples:</p>
                <ul>
                    <li>My body is healthy.</li>
                    <li>I am in control of my life and how I choose to build its foundation.</li>
                    <li>I have increased energy and happiness today.</li>
                    <li>I do not define myself with my negative thoughts.</li>
                    <li>I can forgive those who have hurt me.</li>
                    <li>I can forgive myself for my mistakes.</li>
                    <li>I have a great support system.</li>
                    <li>I have qualities that will bring great success.</li>
                    <li>I have the abilities to overcome all the challenges I face in life.</li>
                    <li>Happiness is a choice and I am choosing to be happy today.</li>
                    <li>I deserve to be happy.</li>
                    <li>Today, I am deleting unhealthy habits and bringing positive changes.</li>
                    <li>Although times are tough right now, they never last forever.</li>
                    <li>Tomorrow is a new day.</li>
                    <li>I am overcoming an illness and recovering each day.</li>
                    <li>I can accept my emotions and allow them to serve their purpose.</li>
                    <li>I am grateful for the people in my life who _______.</li>
                    <li>I am at peace with who I am.</li>
                    <li>I deserve love.</li>
                    <li>I am loved.</li>
                    <li>I am enough.</li>
                    <li>I’m in the process of becoming the best version of myself.</li>
                </ul>
            </div>

            <div style={{textAlign: 'left'}}>
                <h1><strong>Ways to Distract Yourself</strong></h1>
                <p>It can be easy to get stuck in your own thoughts that only continue to spiral downward leaving you more down,
                distressed, and anxious.
                In these times, it is important to be able to pull yourself out of these situations by redirecting your thoughts
        and here is how you can:</p>
                <ul>
                    <li>Spend time with your pets and give them a snuggle. Unlike people, these animals don’t judge and are happy to
            see you no matter how you look or feel.</li>
                    <li>Playing music is so beneficial and I can’t stress this enough. This always helps me take my mind off things
                    and has the ability to completely change my mood.
            Listening to music that makes me think of happier times helps me feel those positive emotions.</li>
                    <li>Coloring is another activity that can take your mind away from negative thoughts. Focusing on coloring can
            be soothing and relaxes your brain.</li>
                    <li>Watching your favorite show or starting a new series can fixate your thoughts elsewhere.</li>
                    <li>Journaling is another effective tool to get your thoughts and emotions down on paper to reflect.</li>
                    <li>Getting out of the house alone or with friends is a great distraction. Being out can stimulate other parts
            of your brain.</li>
                    <li>Imagine leaving your painful feelings behind. Take all the negative emotions and picture yourself putting
            them in a box and walking away.</li>
                    <li>Read a book. Dive deep into the story as if you are in the world of this book. Use the storyline as an
            escape from reality.</li>
                </ul>
            </div>
        </Carousel>
        </div>
        <h3><strong>*DISCLAIMER: This site is intended to be an additive on your path to recovery.
            It is not help from a professional source. In case of an emergency or crisis, call 9-1-1*</strong></h3>
    </div>
);