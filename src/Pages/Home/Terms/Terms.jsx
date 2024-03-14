/* eslint-disable react/no-unescaped-entities */
import treatmentImage from '../../../assets/images/treatment.png';
import PrimaryButton from "../../../Component/PrimaryButton/PrimaryButton";


const Terms = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between p-10 gap-7 mt-32">
            <div className='flex justify-center items-center w-1/2'>
                <img src={treatmentImage} alt="" />
            </div>


    
            <div className="flex flex-col justify-center items-center w-1/2">
                <div>
                    <p className="text-4xl font-bold">Exceptional Dental Care, on Your Terms </p>
                    <br />
                    <p className=""> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <br />
                    <PrimaryButton> get started</PrimaryButton>
                </div>

            </div>

        </div>
    );
};

export default Terms;