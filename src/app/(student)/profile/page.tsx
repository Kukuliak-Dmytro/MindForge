"use client"

import { useState } from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Section } from "@/components/layout/section";
import { PrimaryButton, SecondaryButton, DangerButton } from "@/components/ui/button";
import { InputText } from "@/components/ui/input-text";
import Avatar from "public/assets/avatars/Avatars";
import { useFormState } from "@/lib/hooks/use-form-state";

export default function StudentProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const { formState, handleChange, resetForm } = useFormState({
        name: "Марія",
        surname: "Смирнова",
        phone: "+380 99 999 99 99",
        email: "email@example.com",
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
                            <div className="col-span-2 justify-self-end flex gap-4">
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