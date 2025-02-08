import heroImg from '../../assets/heroImg.png';
import Icons from '../../assets/Icons';

import PageWrapper from '../../components/frames/pageWraper/PageWrapper';
import { Section } from '../../components/frames/section/Section';
import { PrimaryButton, SecondaryButton } from '../../components/buttons/Button';
import SubjectSnippet from '../../components/cards/subjectSnippet/SubjectSnippet';
import SubjectCard from '../../components/cards/subjectCard/SubjectCard';

import './Home.css';
export default function Home() {
    return (
        <>
            <PageWrapper>
                <Section>
                    <div className="heroBox">
                        <div className="left">
                            <h1>
                                <span>Mind</span><span>Forge</span><br />
                                кузня твого розуму
                            </h1>
                            <div className="snippetsWraper">
                                <SubjectSnippet title='Репетиторство'><Icons size={35} icon='TT'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Домашні роботи'><Icons size={35} icon='HW'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Контрольні роботи'><Icons size={35} icon='KR'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Комплексні теми'><Icons size={35} icon='DT'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Дипломні роботи'><Icons size={35} icon='DR'></Icons></SubjectSnippet>
                            </div>
                            <div className="buttonsWrapper">
                                <PrimaryButton>Знайти фахівця</PrimaryButton>
                                <SecondaryButton>Розмістити замовлення</SecondaryButton>
                            </div>
                        </div>
                        <div className="right">
                            <img src={heroImg} alt="" />
                        </div>
                    </div>
                </Section>
                <Section><div className="subjectsBox">
                    <h1>Доступні предмети на сайті:</h1>
                    <div className="cardsFrame">
                        <SubjectCard title='Математика' link='#'> <Icons size={100} icon='Mat' ></Icons></SubjectCard>
                        <SubjectCard title='Українська мова' link='#'> <Icons size={100} icon='Ukr' ></Icons></SubjectCard>
                        <SubjectCard title='Англійська мова' link='#'> <Icons size={100} icon='Eng' ></Icons></SubjectCard>
                        <SubjectCard title='Біологія' link='#'> <Icons size={100} icon='Bio' ></Icons></SubjectCard>
                        <SubjectCard title='Географія' link='#'> <Icons size={100} icon='Geo' ></Icons></SubjectCard>
                        <SubjectCard title='Фізика' link='#'> <Icons size={100} icon='Phy' ></Icons></SubjectCard>
                        <SubjectCard title='Хімія' link='#'> <Icons size={100} icon='Che' ></Icons></SubjectCard>
                        <SubjectCard title='Історія' link='#'> <Icons size={100} icon='His' ></Icons></SubjectCard>
                        <SubjectCard title='Інформатика' link='#'> <Icons size={100} icon='Inf' ></Icons></SubjectCard>
                    </div>
                        <PrimaryButton link='#' large width={300}>Перейти</PrimaryButton>
                </div>
                </Section>
            </PageWrapper>
        </>
    )
}