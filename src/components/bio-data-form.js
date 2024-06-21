import { useState, useEffect } from 'react';

const BioDataForm = ({ saveFormData, currentData }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        qualification: '',
        comments: ''
    });

    useEffect(() => {
        if (currentData) {
            setFormData(currentData);
        }
    }, [currentData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveFormData(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
            qualification: '',
            comments: ''
        });
    };
    return (
        <>
            <div className="register col-md-5 col-sm-6">
                <h1 className="title"><strong>Bio Data</strong></h1>
                <form role="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="reg_txt">Name <span>*</span></label>
                        <div className="controls form-inline">
                            <input type="text" className="input-name" placeholder="First" name="firstName" value={formData?.firstName} onChange={handleChange} required />
                            <input type="text" className="input-name" placeholder="Last" name="lastName" value={formData?.lastName} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="reg_txt">Email <span>*</span></label>
                        <input type="email" className="form-register text" placeholder="E-mail" name="email" value={formData?.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group" style={{ height: '70px' }}>
                        <label className="reg_txt">Phone Number <span>*</span></label>
                        <div className="clearfix"></div>
                        <div className="wsite-form">
                            <input type="text" className="text input-name1" placeholder="Phone" name="phoneNumber" value={formData?.phoneNumber} onChange={handleChange} required pattern="[0-9]{10}" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="reg_txt">Address <span>*</span></label>
                        <input type="text" className="form-register text" placeholder="Line 1" name="address1" value={formData?.address1} onChange={handleChange} required style={{ marginBottom: '15px' }} />
                        <input type="text" className="form-register text" placeholder="Line 2" name="address2" value={formData?.address2} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <div className="controls form-inline">
                            <input type="text" className="input-name" placeholder="City" name="city" value={formData?.city} onChange={handleChange} required />
                            <input type="text" className="input-name" placeholder="State" name="state" value={formData?.state} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="controls form-inline">
                            <input type="text" className="input-name" placeholder="Zip Code" name="zipCode" value={formData?.zipCode} onChange={handleChange} required />
                            <input type="text" className="input-name" placeholder="Country" name="country" value={formData?.country} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="reg_txt">Write Your Qualification <span>*</span></label>
                        <input type="text" className="form-register text" name="qualification" value={formData?.qualification} onChange={handleChange} required style={{ marginBottom: '15px' }} />
                    </div>
                    <div className="form-group">
                        <label className="reg_txt">comments <span>*</span></label>
                        <textarea className="form-register text" name="comments" value={formData?.comments} onChange={handleChange} required></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default submit" style={{ width: '97%' }}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BioDataForm


