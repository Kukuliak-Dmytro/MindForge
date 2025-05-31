"use client";

import { useState, useMemo } from "react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Section } from "@/components/layout/section";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { InputText } from "@/components/ui/input-text";
import { Textarea } from "@/components/ui/textarea";
import Avatar from "public/assets/avatars/Avatars";
import { useFormState } from "@/lib/hooks/use-form-state";
import { Separator } from "@/components/ui/separator";
import { useProfile, useUpdateProfile } from "@/hooks/use-profile";
import { EducationSection } from "./components/education-section";
import { ExperienceSection } from "./components/experience-section";
import { SubjectsSection } from "./components/subjects-section";
import { useQuery } from "@tanstack/react-query";
import { getSubjects, getCategories, type Subject, type Category } from "@/services/subjects";
import React from "react";

export default function TutorProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const { data: profile, isLoading } = useProfile();
    const updateProfile = useUpdateProfile();
    
    // Fetch available subjects and categories
    const { data: subjectsResponse } = useQuery({
        queryKey: ['subjects'],
        queryFn: getSubjects
    });

    const { data: categoriesResponse } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
    });

    const subjects = subjectsResponse?.data || [];
    const categories = categoriesResponse?.data || [];
    
    // Initialize form state with memoized values
    const initialFormState = useMemo(() => ({
        firstName: profile?.firstName || "",
        lastName: profile?.lastName || "",
        email: profile?.email || "",
        bio: profile?.profile?.bio || "",
        phone: profile?.profile?.phone || "",
    }), [profile?.firstName, profile?.lastName, profile?.email, profile?.profile?.bio, profile?.profile?.phone]);

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
                email: formState.email,
                profile: {
                    bio: formState.bio,
                    phone: formState.phone,
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
            updateField('email', profile.email);
            updateField('bio', profile.profile?.bio || '');
            updateField('phone', profile.profile?.phone || '');
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

    if (!profile || !('tutorProfile' in profile)) {
        return (
            <PageWrapper>
                <Section title="Мій профіль">
                    <div className="text-center py-8">
                        <p className="text-red-500">Помилка завантаження профілю</p>
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
                <EducationSection education={profile.tutorProfile.education} />
                <ExperienceSection experiences={profile.tutorProfile.experiences} />
                <SubjectsSection 
                    subjects={profile.tutorProfile.subjects}
                    availableSubjects={subjects}
                    availableCategories={categories}
                />
            </Section>
            
        </PageWrapper>
    );
}
