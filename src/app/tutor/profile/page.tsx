"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Section } from "@/components/layout/section";
import { PrimaryButton, SecondaryButton, DangerButton } from "@/components/ui/button";
import { InputText } from "@/components/ui/input-text";
import { Textarea } from "@/components/ui/textarea";
import Avatar from "public/assets/avatars/Avatars";
import { useFormState } from "@/lib/hooks/use-form-state";
import { Separator } from "@/components/ui/separator";

export default function TutorProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const { formState, handleChange, resetForm } = useFormState({
        name: "Марія",
        surname: "Смирнова",
        phone: "+380 99 999 99 99",
        email: "email@example.com",
        bio: "Я, Смирнова Марія Олексіївна, маю ступінь бакалавра в галузі математики і вже більше року займаюся викладанням математики онлайн. Моя професія — це не просто робота, а покликання. Я щиро вірю, що математичні знання є фундаментом для розвитку мислення та здатності розв'язувати складні завдання. Викладаючи математику, я завжди намагаюся зробити цей процес максимально зрозумілим і доступним для моїх учнів, застосовуючи індивідуальний підхід до кожного.",
    });

    const handleSave = () => {
        // Here you would typically save the data to your backend
        setIsEditing(false);
    };

    const handleCancel = () => {
        resetForm(); // Reset to original values
        setIsEditing(false);
    };

    const sharedFieldStyles = "w-full bg-white-bg shadow-small rounded-medium";

    return (
        <PageWrapper>
            <Section title="Мій профіль">
                <div className="flex gap-[60px]">
                    <div className="flex flex-col w-[200px] gap-4">
                        <Avatar id={6} size={200} />
                        <div className="flex flex-col gap-2">
                            <PrimaryButton>Змінити</PrimaryButton>
                            <SecondaryButton>Зберегти</SecondaryButton>
                            <DangerButton>Видалити</DangerButton>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col gap-6">
                            <div className="grid grid-cols-2 gap-6">
                                <InputText
                                    value={formState.name}
                                    id="name"
                                    title="Ім'я"
                                    placeholder="Ваше ім'я"
                                    onChange={handleChange}
                                    className={sharedFieldStyles}
                                    readOnly={!isEditing}
                                />
                                <InputText
                                    value={formState.surname}
                                    id="surname"
                                    title="Прізвище"
                                    placeholder="Ваше прізвище"
                                    onChange={handleChange}
                                    className={sharedFieldStyles}
                                    readOnly={!isEditing}
                                />
                                <InputText
                                    value={formState.phone}
                                    id="phone"
                                    title="Телефон"
                                    placeholder="Ваш телефон"
                                    onChange={handleChange}
                                    type="tel"
                                    className={sharedFieldStyles}
                                    readOnly={!isEditing}
                                />
                                <InputText
                                    value={formState.email}
                                    id="email"
                                    title="Email"
                                    placeholder="Ваш Email"
                                    onChange={handleChange}
                                    type="email"
                                    className={sharedFieldStyles}
                                    readOnly={!isEditing}
                                />
                            </div>
                            <Textarea
                                value={formState.bio}
                                id="bio"
                                title="Біографія"
                                placeholder="Розкажіть про себе"
                                onChange={handleChange}
                                className={`min-h-[200px] ${sharedFieldStyles} p-4`}
                                readOnly={!isEditing}
                            />
                            <div className="flex w-full justify-end gap-4">
                                {isEditing ? (
                                    <>
                                        <SecondaryButton onClick={handleCancel}>Скасувати</SecondaryButton>
                                        <PrimaryButton onClick={handleSave}>Зберегти</PrimaryButton>
                                    </>
                                ) : (
                                    <PrimaryButton onClick={() => setIsEditing(true)}>
                                        Редагувати
                                    </PrimaryButton>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </PageWrapper>
    );
}
