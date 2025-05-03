import { Section } from "@/components/layout/section";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { InputText } from "@/components/ui/input-text";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function CreateOrder() {
    return (
        <PageWrapper>
            <Section title="Створити замовлення" className="flex flex-col  gap-4">
                <InputText title="Назва" placeholder="Допомога з тригонометрією" id="name"></InputText>
                <Textarea title="Опис" placeholder="Пояснити всі теми тригонометрії" id="description"></Textarea>

                <div className="flex flex-col">
                    <label 
                        htmlFor="date-picker" 
                        className="pl-4 pb-1"
                    >
                        Кінцева дата
                    </label>
                    <DatePicker />
                </div>

                <div className="flex flex-col">
                    <label 
                        htmlFor="subject-select" 
                        className="pl-4 pb-1"
                    >
                        Предмет
                    </label>
                    <Select>
                        <SelectTrigger className="w-full h-[50px] rounded-medium px-4 text-base border border-primary-border shadow-small focus:outline-none focus:ring-2 focus:ring-accent" id="subject-select">
                            <SelectValue placeholder="Виберіть предмет" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Предмети</SelectLabel>
                                <SelectItem value="Mat">Математика</SelectItem>
                                <SelectItem value="Ukr">Українська мова</SelectItem>
                                <SelectItem value="Eng">Англійська мова</SelectItem>
                                <SelectItem value="Bio">Біологія</SelectItem>
                                <SelectItem value="Geo">Географія</SelectItem>
                                <SelectItem value="Phy">Фізика</SelectItem>
                                <SelectItem value="Che">Хімія</SelectItem>
                                <SelectItem value="His">Історія</SelectItem>
                                <SelectItem value="Inf">Інформатика</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                
                <div className="flex flex-col">
                    <label 
                        htmlFor="topic-select" 
                        className="pl-4 pb-1"
                    >
                        Тип роботи
                    </label>
                    <Select>
                        <SelectTrigger className="w-full h-[50px] rounded-medium px-4 text-base border border-primary-border shadow-small focus:outline-none focus:ring-2 focus:ring-accent" id="topic-select">
                            <SelectValue placeholder="Виберіть тип роботи" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Типи робіт</SelectLabel>
                                <SelectItem value="TT">Репетиторство</SelectItem>
                                <SelectItem value="HW">Домашні роботи</SelectItem>
                                <SelectItem value="KR">Контрольні роботи</SelectItem>
                                <SelectItem value="DT">Комплексні теми</SelectItem>
                                <SelectItem value="DR">Дипломні роботи</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                  
                </div>   
            <InputText placeholder="Ціна" title="Ціна" id="price"></InputText>
            <Button type='submit' > Розмістити замовлення</Button>
            </Section>
        </PageWrapper>
    );
}