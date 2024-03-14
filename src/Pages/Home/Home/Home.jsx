import Banner from "../Banner/Banner";
import ContactSection from "../ContactSection/ContactSection";
import InfoCards from "../InfoCards/InfoCards"
import MakeAppointment from "../MakeAppoionment/MakeAppointment";
import Services from "../Service/Services";
import Terms from "../Terms/Terms";
import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto"> 
            {/* use react helmet */}
            
            {/* <Helmet>
                <title> Doctor-portal | Home</title>
            </Helmet> */}

           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <Terms></Terms>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <ContactSection></ContactSection>
          
            
        </div>
    );
};

export default Home;