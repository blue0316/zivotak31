import { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import classnames from 'classnames';

import data from '@/data/projects.data.json';

import ProjectCard from '@/components/pages/projects/project-card/project-card.component';

import styles from '@/styles/projects.module.scss';

const Projects: NextPage = () =>
{
    const [projects, setProjects] = useState({ cards: data.cards, category: 'All' });

    return (
        <Fragment>
            <Head>
                <meta name='Classification' content='Portfolio Project'/>
                <meta name='subject' content='Portfolio Project'/>
                <meta name='description' content='ZivotaKondic Project'/>
                <meta name='keywords' content='ZivotaKondic, IQ, Quantum, Intelligent, Project'/>
                <meta name='author' content='ZivotaKondic'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://zivotak31.vercel.app/projects'/>
                <meta property='og:title' content='ZivotaKondic'/>
                <meta property='og:description' content='ZivotaKondic Projects'/>
                <meta property='og:image' content='https://zivotak31.vercel.app/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://zivotak31.vercel.app/Projects'/>
                <meta property='twitter:title' content='ZivotaKondic'/>
                <meta property='twitter:description' content='ZivotaKondic Projects'/>

                <title>ZivotaKondic &mdash; Projects</title>
            </Head>

            <section className={styles.projects}>
                <h2 className={styles.projectsHeading}>Projects</h2>

                <ul className={styles.projectsMenu}>
                    {
                        data.menus.map(menu =>
                        {
                            return (
                                <li
                                    key={menu.id}
                                    className={classnames(styles.projectsMenuItem, { [styles.projectsMenuItemActive]: menu.category === projects.category})}
                                    onClick={() => menu.category === 'All' ? setProjects({ cards: data.cards, category: menu.category }) : setProjects({ cards: data.cards.filter(card => card.category === menu.category), category: menu.category })}
                                >
                                    {menu.name}
                                </li>
                            );
                        })
                    }
                </ul>

                <div className={styles.projectsCards}>
                    {
                        projects.cards.map(card =>
                        {
                            return (
                                <ProjectCard
                                    key={card.id}
                                    image={card.image}
                                    alt={card.title}
                                    title={card.title}
                                    description={card.description}
                                    link={card.link}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </Fragment>
    );
};

export default Projects;
