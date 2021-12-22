import React from 'react';

const DonationFormMessage = ({children}) => {
    return (
        <div className="donationForm__important">
            <h2>Wazne!</h2>
            <p>
                {children}
            </p>
        </div>
    );
};

export default DonationFormMessage;