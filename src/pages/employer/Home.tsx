import PageWrapper from '../../components/frames/pageWraper/PageWrapper';
import { Section } from '../../components/frames/section/Section';
import { PrimaryButton,SecondaryButton } from '../../components/buttons/Button';
import SubjectCard from '../../components/cards/SubjectCard';
import Icons from '../../assets/Icons';
import heroImg from '../../assets/heroImg.png';

import './Home.css';
export default function Home() {
    return (
        <>
            <PageWrapper>
                {/* <SubjectCard icon={<Icons icon='Geo'></Icons>}> Test test test</SubjectCard> */}
                {/* <Icons icon='Geo' size={100}></Icons>
                    <Icons icon='Ukr'></Icons>
                    <Icons icon='Eng'></Icons>
                    <Icons icon='Mat'></Icons>
                    <Icons icon='Phy'></Icons>
                    <Icons icon='Che'></Icons>
                    <Icons icon='Bio'></Icons>
                    <Icons icon='Inf'></Icons>
                    <Icons icon='His'></Icons>
                    <Icons icon='KR'></Icons>
                    <Icons icon='TT'></Icons>
                    <Icons icon='DR'></Icons>
                    <Icons icon='HW'></Icons>
                    <Icons icon='DT'></Icons>
                    */}
                {/* <SubjectCard icon={<Icons icon='DT' size={35}></Icons>} variant='Default'> Test Test Test</SubjectCard> */}

                <Section>
                    <div className="heroBox">
                        <div className="left">
                            <h1>
                                <span>Mind</span><span>Forge</span><br />
                                кузня твого розуму
                            </h1>
                            <div className="cardsWraper">
                                <SubjectCard icon={<Icons size={35} icon='TT'></Icons>}>Репетиторсвтво</SubjectCard>
                                <SubjectCard icon={<Icons size={35} icon='HW'></Icons>}>Домашні роботи</SubjectCard>
                                <SubjectCard icon={<Icons size={35} icon='KR'></Icons>}>Контрольні роботи</SubjectCard>
                                <SubjectCard icon={<Icons size={35} icon='DT'></Icons>}>Складні теми</SubjectCard>
                                <SubjectCard icon={<Icons size={35} icon='DR'></Icons>}>Дипломні роботи</SubjectCard>
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
                    
            </PageWrapper>
        </>
    )
}