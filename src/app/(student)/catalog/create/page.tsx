import { Section } from "@/components/layout/section";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { InputText } from "@/components/ui/input-text";
import { Textarea } from "@/components/ui/textarea";
export default function CreateOrder(){
    return (
           <PageWrapper>
            <Section title="Створити замовлення" className="flex flex-col  gap-4">
                <InputText title="Назва" placeholder="Допомога з тригонометрією" id="name"></InputText>
                <Textarea title="Опис" placeholder="Пояснити всі теми тригонометрії" id="description"></Textarea>
            </Section>
           </PageWrapper>

    );
} 