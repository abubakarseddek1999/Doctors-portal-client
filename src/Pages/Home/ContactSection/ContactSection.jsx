import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'

const ContactSection = () => {
    return (
        <section className='mt-32 ' style={{
            background: `url(${appointment})`
        }}>
            <div className=" flex justify-center items-center text-white">
                <form className="space-y-5 m-2 ">
                    <h2 className="text-2xl text-emerald-400 text-center font-bold ">Contact Us</h2>
                    <p className='text-center text-2xl  md:text-4xl'>Stay connected with us</p>

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-2 rounded border border-white"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full p-2 rounded border border-white"
                    />

                    <textarea
                        placeholder="Your message"
                        rows={7}
                        className="w-full p-2 rounded border border-white"
                    ></textarea>

                    <div className='flex justify-center items-center'>
                        <PrimaryButton type="submit">
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </div>


        </section>
    );
};

export default ContactSection;