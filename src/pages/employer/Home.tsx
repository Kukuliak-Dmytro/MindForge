import PageWrapper from '../../components/frames/pageWraper/PageWrapper';
import { Section } from '../../components/frames/section/Section';
import { PrimaryButton } from '../../components/buttons/Button';
export default function Home() {
    return (
        <>
            <PageWrapper>
                <Section title='Компонент з заголовком'></Section>
                <Section>Компонент без заголовка</Section>
                <Section><PrimaryButton>ffds</PrimaryButton></Section>

            </PageWrapper>
        </>
    )
}