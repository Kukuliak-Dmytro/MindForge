"use client"

import { PageWrapper } from "@/components/layout/page-wrapper";
import { Section } from "@/components/layout/section";
import { SubjectCard } from "@/components/cards/subject-card";
import Icons from "@/components/ui/icons";

export default function SubjectsPage() {
  return (
    <PageWrapper>
      <Section title="Предмети">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubjectCard 
            title="Математика" 
            link="/catalog" 
            type="subject"
            code="Mat"
          >
            <Icons icon="Mat" size={64} />
          </SubjectCard>
          
          <SubjectCard 
            title="Фізика" 
            link="/catalog" 
            type="subject"
            code="Phy"
          >
            <Icons icon="Phy" size={64} />
          </SubjectCard>
          
          <SubjectCard 
            title="Хімія" 
            link="/catalog" 
            type="subject"
            code="Che"
          >
            <Icons icon="Che" size={64} />
          </SubjectCard>
        </div>
      </Section>
      
      <Section title="Категорії послуг">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubjectCard 
            title="Репетиторство" 
            link="/catalog" 
            type="category"
            code="TT"
          >
            <Icons icon="TT" size={64} />
          </SubjectCard>
          
          <SubjectCard 
            title="Домашня робота" 
            link="/catalog" 
            type="category"
            code="HW"
          >
            <Icons icon="HW" size={64} />
          </SubjectCard>
          
          <SubjectCard 
            title="Пояснення теми" 
            link="/catalog" 
            type="category"
            code="DT"
          >
            <Icons icon="DT" size={64} />
          </SubjectCard>
        </div>
      </Section>
    </PageWrapper>
  );
} 