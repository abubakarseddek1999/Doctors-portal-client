import Banner from "../Banner/Banner";
import MakeAppointment from "../MakeAppoionment/MakeAppointment";


const Home = () => {
    return (
        <div className="h-screen"> 
            {/* use react helmet */}
            
            {/* <Helmet>
                <title> Bistro Boss | Home</title>
            </Helmet> */}

           <Banner></Banner>
           <MakeAppointment></MakeAppointment>
          
            
        </div>
    );
};

export default Home;