import bgImage from '../../../assets/images/chair.png';
const Banner = () => {
    return (
        <div className=" flex flex-col-reverse md:flex-row justify-between p-10 gap-7 ">
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <h2 className='text-xl md:text-4xl font-bold'> Your New Smile Starts Here</h2>
                    <br />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the</p>
                    <br />
                    <button className='uppercase btn bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold'>Get started</button>
                </div>


            </div>
            <div className='flex justify-center items-center'>
                {/* Use the imported image */}
                <img src={bgImage} alt="Banner" />

            </div>

        </div>
    );
};

export default Banner;