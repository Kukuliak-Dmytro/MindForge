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
    const { formState: myData, handleChange: setMyData } = useFormState({
        name: "Марія",
        surname: "Смирнова",
        phone: "+380 99 999 99 99",
        email: "email@example.com",
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsEditing(false);
    };

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
                        {isEditing ? (
                            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                                <InputText
                                    defaultValue={myData.name}
                                    id="name"
                                    title="Ім'я"
                                    placeholder="Ваше ім'я"
                                    onChange={setMyData}
                                />
                                <InputText
                                    defaultValue={myData.surname}
                                    id="surname"
                                    title="Прізвище"
                                    placeholder="Ваше прізвище"
                                    onChange={setMyData}
                                />
                                <InputText
                                    defaultValue={myData.phone}
                                    id="phone"
                                    title="Телефон"
                                    placeholder="Ваш телефон"
                                    onChange={setMyData}
                                    type="tel"
                                />
                                <InputText
                                    defaultValue={myData.email}
                                    id="email"
                                    title="Email"
                                    placeholder="Ваш Email"
                                    onChange={setMyData}
                                    type="email"
                                />
                                <div className="col-span-2 justify-self-end">
                                    <SecondaryButton>Зберегти</SecondaryButton>
                                </div>
                            </form>
                        ) : (
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-1">
                                    <p className="pl-4 text-sm">Ім'я</p>
                                    <h5 className="h-[50px] w-full flex items-center bg-white shadow-small pl-4 rounded-medium">
                                        {myData.name}
                                    </h5>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="pl-4 text-sm">Прізвище</p>
                                    <h5 className="h-[50px] w-full flex items-center bg-white shadow-small pl-4 rounded-medium">
                                        {myData.surname}
                                    </h5>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="pl-4 text-sm">Телефон</p>
                                    <h5 className="h-[50px] w-full flex items-center bg-white shadow-small pl-4 rounded-medium">
                                        {myData.phone}
                                    </h5>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="pl-4 text-sm">Email</p>
                                    <h5 className="h-[50px] w-full flex items-center bg-white shadow-small pl-4 rounded-medium">
                                        {myData.email}
                                    </h5>
                                </div>
                                <div className="col-span-2 justify-self-end">
                                    <PrimaryButton onClick={() => { setIsEditing(true); }}>
                                        Редагувати
                                    </PrimaryButton>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </PageWrapper>
    );
} 