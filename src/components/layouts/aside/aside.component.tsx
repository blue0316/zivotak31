import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import classnames from 'classnames';

import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { toggleAside, toggleFilter } from '@/redux/features/header/header-slice';

import aside from '@/data/aside.data.json';

import { FaEllipsisV } from 'react-icons/fa';
import { BsCheck, BsDribbble, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgSoftwareDownload } from 'react-icons/cg';

import styles from './aside.module.scss';

const Aside = () =>
{
    const router = useRouter();
    const { t } = useTranslation();

    const asideOpen = useAppSelector(state => state.header.asideOpen);
    const dispatch = useAppDispatch();

    const handleToggleClick = () =>
    {
        dispatch(toggleAside());
        dispatch(toggleFilter());
    };

    return (
        <aside className={classnames(styles.aside, { [styles.asideActive]: asideOpen })}>
            <span className={styles.asideToggleUi} onClick={handleToggleClick}>
                <FaEllipsisV />
            </span>
            <div className={styles.asideUser}>
                <span className={styles.asideUserImageContainer}>
                    <Image
                        className={styles.asideUserImage}
                        src='/images/my-image1.png'
                        alt='zivotakondic'
                        width={100}
                        height={100}
                    />
                    <span className={styles.asideUserImageContainerStatus} />
                </span>

                <div className={styles.asideUserInfoContainer}>
                    <Link href='/' className={styles.asideUserName}>
                        Zivota Kondic
                    </Link>
                    <span className={styles.asideUserTitle}>{t('common:aside.0.userTitle')}</span>
                    <span className={styles.asideUserTitle}>{t('common:aside.1.userSubtitle')}</span>
                </div>
            </div>

            <div className={styles.asideInformation}>
                <div className={styles.asideInformationWebLanguages}>
                    {
                        router.locales?.map(locale =>
                        {
                            return (
                                <Link
                                    key={locale}
                                    href={router.asPath}
                                    locale={locale}
                                    className={classnames([styles.asideInformationWebLanguagesOption, [`${ locale === router.locale ? styles.asideInformationWebLanguagesOptionActive : null }`]])}>
                                    {locale.toUpperCase()}
                                </Link>
                            );
                        })
                    }
                </div>

                <div className={styles.aside__divider} />

                <ul className={styles.asideInformationPersonalList}>
                    <li className={styles.asideInformationPersonalListItem}>
                        <span>{t('common:aside.2.residence')}:</span>
                        <span>Serbia</span>
                    </li>
                    <li className={styles.asideInformationPersonalListItem}>
                        <span>{t('common:aside.3.city')}:</span>
                        <span>Vladicin Han, Serbia</span>
                    </li>
                    <li className={styles.asideInformationPersonalListItem}>
                        <span>{t('common:aside.4.age')}:</span>
                        <span>{new Date().getFullYear() - 1995}</span>
                    </li>
                </ul>

                <div className={styles.aside__divider} />

                <div className={styles.asideInformationPersonalLanguages}>
                    <div className={styles.asideInformationPersonalLanguagesContent}>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' strokeDasharray='100, 100'/>
                            <text x='18' y='20.35'>100%</text>
                        </svg>
                        <span>{t('common:aside.5.chinese')}</span>
                    </div>
                    <div className={styles.asideInformationPersonalLanguagesContent}>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' strokeDasharray='80, 100'/>
                            <text x='18' y='20.35'>80%</text>
                        </svg>
                        <span>{t('common:aside.6.english')}</span>
                    </div>
                    <div className={styles.asideInformationPersonalLanguagesContent}>
                        <svg viewBox='0 0 36 36'>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831'/>
                            <path d='M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831' strokeDasharray='60, 100'/>
                            <text x='18' y='20.35'>60%</text>
                        </svg>
                        <span>{t('common:aside.7.german')}</span>
                    </div>
                </div>

                <div className={styles.aside__divider} />

                <div className={styles.asideInformationSkills}>
                    {
                        aside.skills.map(skill =>
                        {
                            return (
                                <div className={styles.asideInformationSkillsBar} key={skill.id}>
                                    <div className={styles.asideInformationSkillsBarInfo}>
                                        <span>{skill.name}</span>
                                        <span>{skill.progress}</span>
                                    </div>
                                    <div className={styles.asideInformationSkillsBarProgress}>
                                        <span className={styles.asideInformationSkillsBarProgressActive} style={{ width: skill.progressActive }} />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className={styles.aside__divider} />

                <ul className={styles.asideInformationLibrariesList}>
                    {
                        aside.libraries.map(library =>
                        {
                            return (
                                <li className={styles.asideInformationLibrariesListItems} key={library.id}>
                                    <BsCheck />
                                    <span>{library.names}</span>
                                </li>
                            );
                        })
                    }
                </ul>
{/* 
                <div className={styles.aside__divider} />

                <a href='/resume.pdf' download className={styles.asideInformationCV}>
                    <CgSoftwareDownload />
                    <span>{t('common:aside.8.download')}</span>
                </a> */}
            </div>

            {/* <div className={styles.asideFooter}>
                <a href='https://www.instagram.com/ZivotaKondic/' target='_blank'>
                    <BsInstagram />
                </a>
                <a href='https://dribbble.com/ZivotaKondic' target='_blank'>
                    <BsDribbble />
                </a>
                <a href='https://twitter.com/IntelligentQM' target='_blank'>
                    <BsTwitter />
                </a>
                <a href='https://github.com/blue0316' target='_blank'>
                    <BsGithub />
                </a>
                <a href='https://www.linkedin.com/in/zivotakondic-sharp/' target='_blank'>
                    <BsLinkedin />
                </a>
            </div> */}
        </aside>
    );
};

export default Aside;
