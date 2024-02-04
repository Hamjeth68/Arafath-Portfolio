import { useState } from 'react';

const useEmailJs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (formData) => {
    setIsLoading(true);
    setError(null);
    const obj ={ 
        service_id: 'service_j3v6wo8',
        template_id: 'template_qypd036',
        user_id: '7mArU2PI2PH2T6cun'
    }

    try {
      formData.append('service_id', obj.service_id);
      formData.append('template_id', obj.template_id);
      formData.append('user_id', obj.user_id);

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: formData,
      });

      // Improved error handling
      if (!response.ok) {
        let errorBody;
        try {
          errorBody = await response.json(); // Attempt to parse JSON
        } catch (jsonError) {
          errorBody = await response.text(); // Fallback to plain text
        }
        throw new Error(`Sending email failed: ${errorBody.error || errorBody}`);
      }

      alert('Your mail is sent!');
    } catch (error) {
      console.error('Email sending error:', error);
      alert(`Oops... ${error.message}`);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading, error };
};

export default useEmailJs;
