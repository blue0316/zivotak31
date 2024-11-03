import { Fragment, FormEvent, useState  } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';

import { BsPerson, BsEnvelope, BsTextParagraph } from 'react-icons/bs';

import styles from '../styles/contact.module.scss';

const Contact: NextPage = () =>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const sendMessageHandler = async(e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();

        setSuccess(false);
        const response = await axios.post('/api/contact', { name, email, message }, { headers: { 'Content-Type': 'application/json' } });

        if (response.status === 200)
        {
            setName('');
            setEmail('');
            setMessage('');
            setSuccess(true);
        }
    };

    return (
        <Fragment>
            <Head>
                <meta name='Classification' content='Contact'/>
                <meta name='subject' content='Contact'/>
                <meta name='description' content='StrahinjaM Contact'/>
                <meta name='keywords' content='StrahinjaM, IQ, Quantum, Intelligent, Contact'/>
                <meta name='author' content='StrahinjaM'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://strahinjam.vercel.app/contact'/>
                <meta property='og:title' content='StrahinjaM'/>
                <meta property='og:description' content='StrahinjaM Contact'/>
                <meta property='og:image' content='https://strahinjam.vercel.app/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://strahinjam.vercel.app/contact'/>
                <meta property='twitter:title' content='StrahinjaM'/>
                <meta property='twitter:description' content='StrahinjaM Contact'/>

                <title>StrahinjaM &mdash; Contact with me</title>
            </Head>

            <section className={styles.contact}>
                <h4 className={styles.contactHeading}>Contact Information</h4>
                <div className={styles.contactCards}>
                    <div className={styles.contactCardsCard}>
                        <ul className={styles.contactCardsCardList}>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Residence:</span>
                                <span>Singapore</span>
                            </li>
                            <li className={styles.contactCardsCardListItem}>
                                <span>City:</span>
                                <span>Central, Singapore</span>
                            </li>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Age:</span>
                                <span>{new Date().getFullYear() - 1995}</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contactCardsCard}>
                        <ul className={styles.contactCardsCardList}>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Gmail:</span>
                                <a href="mailto:StrahinjaM0316@gmail.com">StrahinjaM0316@gmail.com</a>
                            </li>
                            <li className={styles.contactCardsCardListItem}>
                                <span>ProtonMail:</span>
                                <a href="mailto:stralinjo72@gmail.com">stralinjo72@gmail.com</a>
                            </li>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Discord:</span>
                                <span>_gruguru</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contactCardsCard}>
                        <ul className={styles.contactCardsCardList}>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Mobile:</span>
                                <span>+1 (510) 993-0355</span>
                            </li>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Whatsapp:</span>
                                <span>+1 (219) 779-7870</span>
                            </li>
                            <li className={styles.contactCardsCardListItem}>
                                <span>Telegram:</span>
                                <span>@devbrainy</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <h4 className={styles.contactHeading}>Get in Touch</h4>
                <div className={styles.contactForm}>
                    <form onSubmit={sendMessageHandler}>
                        <div className={styles.contactFormGroup}>
                            <label htmlFor="name">
                                <BsPerson />
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={styles.contactFormGroup}>
                            <label htmlFor="email">
                                <BsEnvelope />
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.contactFormGroup}>
                            <label htmlFor='message'>
                                <BsTextParagraph />
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                placeholder='Message'
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div className={styles.contactFormGroup}>
                            <button>Send Message</button>
                            { success && <div className={styles.contactFormGroupSuccess}>The message was sent successfully.</div> }
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;
