/* eslint-disable react/prop-types */

const PrimaryButton = ({children}) => {
    return (
        <button 
        className="btn btn-primary bg-gradient-to-r from-teal-400 to-cyan-500 text-white ">{children}</button>
    );
};

export default PrimaryButton;