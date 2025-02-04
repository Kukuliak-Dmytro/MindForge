import React from 'react';
import PageWrapper from '../../components/frames/pageWraper/PageWrapper';
import { Section } from '../../components/frames/section/Section';
export default function Home() {
    return (
        <>
            <PageWrapper>
                <Section></Section>
                <Section title='Мої замовлення'></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>

            </PageWrapper>
        </>
    )
}