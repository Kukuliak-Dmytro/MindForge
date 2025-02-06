import PageWrapper from '../../components/frames/pageWraper/PageWrapper';
import { Section } from '../../components/frames/section/Section';

import SubjectCard from '../../components/cards/SubjectCard';
import Icons from '../../assets/Icons';
export default function Home() {
    return (
        <>
            <PageWrapper>
                <Section>
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
                    */}
                    <SubjectCard icon={<Icons icon='DT' size={35}></Icons>} variant='Default'> Test Test Test</SubjectCard>

                </Section>

            </PageWrapper>
        </>
    )
}