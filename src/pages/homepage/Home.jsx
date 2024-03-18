import './style.css'
import SearchBar from '../../components/search-bar/SearchBar'
import missionImg from '../../assets/images/eye-img.png'
import onboardingImg from '../../assets/images/Onboarding-picture.png'

const Home = () => {
  return (
    <>
        {/* hero section */}
        <section className='hero'>
            <div className='content'>
                <SearchBar/>
                <div className='hero-text'>
                <h1>&ldquo; Discover Trusted Service Providers in Nigeria &rdquo;</h1>
                <p>Whether you&apos;re a service seeker looking for quality assistance or a talented individual ready to showcase your skills. Join us today and unlock a world of opportunities!</p>
                </div>
            </div>
        </section>

        {/* mission */}
        <section className='mission padding-y'>
            <div className='mission-text'>
                <h2>Our Mission</h2>
                <p>Our mission is to make it easy for Nigerians to find all kinds of services in one place. We want to help people connect with trustworthy professionals and showcase their own skills. By doing this, we hope to make it simpler for everyone to get things done and create more opportunities for businesses and individuals across Nigeria.</p>
            </div>
            <img src={missionImg} alt="" />
        </section>

        {/* app works */}
        {/* using same class name here becase they have same styling */}
        <section className='mission padding-y'>
            <img src={onboardingImg} alt="" />
            <div className='mission-text'>
                <h2>How our app works</h2>
                <p>Our mission is to make it easy for Nigerians to find all kinds of services in one place. We want to help people connect with trustworthy professionals and showcase their own skills. By doing this, we hope to make it simpler for everyone to get things done and create more opportunities for businesses and individuals across Nigeria.</p>
            </div>
        </section>

        {/* category display */}
        <section>
            
        </section>
    </>
  )
}

export default Home