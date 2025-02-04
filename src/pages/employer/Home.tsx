import PageWrapper from '../../components/frames/pageWraper/PageWrapper';
import { Section } from '../../components/frames/section/Section';
export default function Home() {
    return (
        <>
            <PageWrapper>
                <Section title='Компонент з заголовком'></Section>
                <Section>Компонент без заголовка</Section>
                <Section></Section>

            </PageWrapper>
        </>
    )
}