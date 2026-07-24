import { useState } from 'react';
import { contactusForm } from '../../lib/api'; // Adjust the import path accordingly

const initState = { values: {}, isLoading: false }; // Initialize values properly

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Incoming Spamfilter',
    subject:'',
    email: '',
    company: '',
    message: ''
  });

  const [state, setState] = useState(initState); // Initialize the state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await contactusForm(formData); // Use formData instead of values
      // console.log("Form submitted successfully!");
      alert('Form submitted successfully!')
      setState(initState); // Reset form after successful submission
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div className="contactusform">
    <form onSubmit={onSubmit}>
        <div className='row'>
        <div className="col-md-6">
        <div className="formField">
      <label htmlFor="dedicated-form-start">
        Name
      </label>
      <br/>
      <input
          type="text"
          name="name"
          autoComplete="name"
          id="dedicated-form-start"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>

        <div className="formField">
      <label htmlFor="email">
        Your Email </label>
        <br/>
      <input
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

        <div className="formField">
      <label>
        Phone
      </label>
      <br/>
      <input
          type="tel"
          name="phone"
          placeholder=""
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>




      <div className="formField">
      <label htmlFor="cont">
        Select your service
      </label>
      <br/>
      <select
          name="service"
          id="cont"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="Incoming Spam Filter">Incoming Spam Filter</option>
          <option value="Outgoing Spam Filter">Outgoing Spam Filter</option>
          <option value="Email Archiving">Email Archiving</option>
          <option value="carbonio">carbonio</option>
          <option value="High availability">High availability</option>

        </select>
      </div>
        </div>
        <div className="col-md-6">
        <div className="formField">
      <label htmlFor="subject">
        Subject </label>
        <br/>
      <input
          type="text"
          name="subject"
          autoComplete="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="formField">
      <label htmlFor="company">
        Company Name
      </label>
      <br/>
      <input
          type="text"
          name="company"
          id="company"
          placeholder=""
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="formField">
      <label>
        Your Message
      </label>
      <br/>
      <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
        </div>
        </div>
        <button className="btn" type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Sending...' : 'Send'}
        </button>
    </form>
    </div>
  );
};

export default ContactUsForm;
