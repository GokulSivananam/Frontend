import "../Styles/Contact.css";

export const Contact = () => {
    return (
        <>
        <div className="contact-page">
            <h1>Contact Me</h1>
            <div className="contact-info">
                <div className="contact-item">
                    <span className="contact-label">Name:</span>
                    <span className="contact-value">Gokul</span>
                </div>
                <div className="contact-item">
                    <span className="contact-label">Phone Number:</span>
                    <span className="contact-value">1234567890</span>
                </div>
                <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">gokul@gmail.com</span>
                </div>
            </div>  
        </div>
        </>
    )
}