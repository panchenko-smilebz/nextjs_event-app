import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please introduce a correct email address');
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <main className="event_single-page">
      <div className="container-medium">
        <h1>{data.title}</h1>
        <Image
          width={1000}
          height={500}
          src={data.image}
          alt={data.title}
          className="event-image"
        />
        <p>{data.description}</p>
        <form onSubmit={onSubmit} className="email_registration">
          <label htmlFor="email">Get registered for this event!</label>
          <input
            ref={inputEmail}
            type="email"
            name="Email"
            id="email"
            placeholder="Please insert your email here"
          />
          <button type="submit">Submit</button>
          <p className="form-message">{message}</p>
        </form>
      </div>
    </main>
  );
};
export default SingleEvent;
