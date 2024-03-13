import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="h-screen"> 
            {/* use react helmet */}
            
            {/* <Helmet>
                <title> Bistro Boss | Home</title>
            </Helmet> */}

           <Banner></Banner>
            
        </div>
    );
};

export default Home;