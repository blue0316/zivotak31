import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import hobbies from '@/data/hobbies.data.json';

import HobbyCard from '@/components/pages/hobbies/hobby-card/hobby-card.component';

import styles from '@/styles/hobbies.module.scss';

const Hobbies: NextPage = () =>
{

    return (
        <Fragment>
            <Head>
                <meta name='Classification' content='Portfolio Hobbies'/>
                <meta name='subject' content='Portfolio Hobbies'/>
                <meta name='description' content='ZivotaKondic Hobbies'/>
                <meta name='keywords' content='ZivotaKondic, IQ, Quantum, Intelligent, Hobbies'/>
                <meta name='author' content='ZivotaKondic'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://zivotakondic.vercel.app/hobbies'/>
                <meta property='og:title' content='ZivotaKondic'/>
                <meta property='og:description' content='ZivotaKondic Hobbies'/>
                <meta property='og:image' content='https://zivotakondic.vercel.app/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://zivotakondic.vercel.app/hobbies'/>
                <meta property='twitter:title' content='ZivotaKondic'/>
                <meta property='twitter:description' content='ZivotaKondic Hobbies'/>

                <title>ZivotaKondic &mdash; Hobbies</title>
            </Head>

            <section className={styles.hobbies}>
                <h2 className={styles.hobbiesHeading}>Hobbies</h2>

                <div className={styles.hobbiesBoxes}>
                    {
                        hobbies.map(hobby =>
                        {
                            return (
                                <HobbyCard
                                    key={hobby.id}
                                    src={hobby.src}
                                    title={hobby.title}
                                    description={hobby.description}
                                    width={hobby.width}
                                    height={hobby.height}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </Fragment>
    );
};

export default Hobbies;
