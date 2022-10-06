import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    company: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        company: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xeqnrool',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, 'Thank you, your message has been submitted.');
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit} className="flex flex-col space-y-2 w-full mx-auto">
        <div className="flex space-x-2">
          <input
            className="contactInput"
            id="name"
            type="text"
            placeholder="Name"
            onChange={handleOnChange}
            required
            value={inputs.name}
          />

          <input
            className="contactInput"
            id="email"
            type="email"
            placeholder="Email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
        </div>

        <input
          className="contactInput"
          type="text"
          placeholder="Subject"
          id="subject"
          onChange={handleOnChange}
          value={inputs.subject}
        />

        <textarea
          className="contactInput"
          placeholder="Message"
          // rows="4"
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button
          type="submit"
          className="bg-[#E1AE00] py-5 px-10 text-black font-bold text-xl tracking-widest"
          disabled={status.submitting}
        >
          {!status.submitting ? (!status.submitted ? 'Send' : 'Submitted') : 'Submitting...'}
        </button>
      </form>
      {status.info.error && <div className="error">Error: {status.info.msg}</div>}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};

export default ContactForm;
