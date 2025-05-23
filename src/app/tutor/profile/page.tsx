"use client";

import { useState, useMemo } from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Section } from "@/components/layout/section";
import { PrimaryButton, SecondaryButton, DangerButton } from "@/components/ui/button";
import { InputText } from "@/components/ui/input-text";
import { Textarea } from "@/components/ui/textarea";
import Avatar from "public/assets/avatars/Avatars";
import { useFormState } from "@/lib/hooks/use-form-state";
import { Separator } from "@/components/ui/separator";
import { useProfile, useUpdateProfile } from "@/hooks/use-profile";
import React from "react";

export default function TutorProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const { data: profile, isLoading } = useProfile();
    const updateProfile = useUpdateProfile();
    
    // Initialize form state with memoized values
    const initialFormState = useMemo(() => ({
        firstName: profile?.firstName || "",
        lastName: profile?.lastName || "",
        contactInfo: profile?.profile?.contactInfo || "",
        email: profile?.email || "",
        bio: profile?.profile?.bio || "",
    }), [profile?.firstName, profile?.lastName, profile?.profile?.contactInfo, profile?.email, profile?.profile?.bio]);

    const { formState, handleChange, resetForm, updateField } = useFormState(initialFormState);

    // Only update form when entering edit mode or when profile first loads
    React.useEffect(() => {
        if (profile && !isEditing) {
            resetForm();
        }
    }, [profile, isEditing, resetForm]);

    const handleSave = async () => {
        try {
            await updateProfile.mutateAsync({
                firstName: formState.firstName,
                lastName: formState.lastName,
                profile: {
                    bio: formState.bio,
                    contactInfo: formState.contactInfo,
                    updatedAt: new Date().toISOString()
                }
            });
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleCancel = () => {
        resetForm();
        setIsEditing(false);
    };

    const handleEdit = () => {
        if (profile) {
            updateField('firstName', profile.firstName);
            updateField('lastName', profile.lastName);
            updateField('contactInfo', profile.profile?.contactInfo || '');
            updateField('email', profile.email);
            updateField('bio', profile.profile?.bio || '');
        }
        setIsEditing(true);
    };

    const sharedFieldStyles = "w-full bg-white-bg shadow-small rounded-medium";

    if (isLoading) {
        return (
            <PageWrapper>
                <Section title="Мій профіль">
                    <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                </Section>
            </PageWrapper>
        );
    }

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
                                    value={formState.firstName}
                                    id="firstName"
                                    title="Ім'я"
                                    placeholder="Ваше ім'я"
                                    onChange={handleChange}
                                    className={sharedFieldStyles}
                                    readOnly={!isEditing}
                                />
                                <InputText
                                    value={formState.lastName}
                                    id="lastName"
                                    title="Прізвище"
                                    placeholder="Ваше прізвище"
                                    onChange={handleChange}
                                    className={sharedFieldStyles}
                                    readOnly={!isEditing}
                                />
                                <InputText
                                    value={formState.contactInfo}
                                    id="contactInfo"
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
                                    readOnly={true}
                                    disabled={true}
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
                                        <PrimaryButton 
                                            onClick={handleSave}
                                            disabled={updateProfile.isPending}
                                        >
                                            {updateProfile.isPending ? 'Збереження...' : 'Зберегти'}
                                        </PrimaryButton>
                                    </>
                                ) : (
                                    <PrimaryButton onClick={handleEdit}>
                                        Редагувати
                                    </PrimaryButton>
                                )}
                            </div>
                        </div>
                        <Separator />
                    </div>
                </div>
            </Section>
        </PageWrapper>
    );
}
