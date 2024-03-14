import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
const MakeAppointment = () => {
    return (
        <section className='mt-32 ' style={{
            background: `url(${appointment})`
        }}>
            <div className="">
                <div className="flex ">
                    <div className='w-1/2 hidden md:flex'>
                        <img src={doctor} alt="" className="" />
                    </div>

                    <div className='w-full md:w-1/2 flex justify-center items-center '>
                        <div className='p-10'>
                            <h4 className='text-lg text-teal-500 font-bold'>Appointment</h4>
                            <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
                            <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButton >Appointment</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default MakeAppointment;