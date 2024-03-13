import bgImage from '../../../assets/images/bg.png';
const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between">
            <div>
                <h2> Your New Smile Starts Here</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the</p>

            </div>
            <div>
                {/* Use the imported image */}
                <img src={bgImage} alt="Banner" />

            </div>

        </div>
    );
};

export default Banner;