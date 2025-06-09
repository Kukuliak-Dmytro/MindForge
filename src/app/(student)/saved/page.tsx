"use client";
import Pagination from "@/components/layout/pagination";
import { EmployeeCard } from "@/components/cards/employee-card";
import { Section } from "@/components/layout/section";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useEffect, useState } from "react";
import { getSavedTutors, saveTutor } from "@/services/profile";
import type { SavedTutor } from "@/types/order";

export default function SavedTutorsPage() {
    const [tutors, setTutors] = useState<SavedTutor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [saving, setSaving] = useState<string | null>(null);

    const isTutorSaved = (tutorId: string) => tutors.some(s => s.tutorId === tutorId);

    const handleToggleSave = async (tutorId: string) => {
        setSaving(tutorId);
        // Optimistic update
        const currentlySaved = isTutorSaved(tutorId);
        setTutors(prev => {
            let updated;
            if (!currentlySaved) {
                updated = [...prev, { id: '', studentId: '', tutorId, createdAt: '' }];
            } else {
                updated = prev.filter(s => s.tutorId !== tutorId);
            }
            return updated;
        });
        try {
            const result = await saveTutor(tutorId);
            if (result.savedTutors) {
                setTutors(result.savedTutors);
            }
        } catch (err) {
            // Revert optimistic update on error
            setTutors(prev => {
                let updated;
                if (currentlySaved) {
                    updated = [...prev, { id: '', studentId: '', tutorId, createdAt: '' }];
                } else {
                    updated = prev.filter(s => s.tutorId !== tutorId);
                }
                return updated;
            });
        } finally {
            setSaving(null);
        }
    };

    useEffect(() => {
        getSavedTutors()
            .then(setTutors)
            .catch((e) => setError(e.message || "Помилка завантаження"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <PageWrapper >
            <Section title="Збережені фахівці">
                {loading && <div>Завантаження...</div>}
                {error && <div className="text-red-500">{error}</div>}
                <div className="flex flex-col gap-4">
                    {tutors.map((saved) => (
                        <EmployeeCard
                            key={saved.id}
                            name={`${saved.tutor?.firstName || ''} ${saved.tutor?.lastName || ''}`}
                            rating={typeof saved.tutor?.rating === 'number' ? saved.tutor.rating.toFixed(1) : '-'}
                            avatarId={1}
                            education={
                                Array.isArray(saved.tutor?.education) && saved.tutor.education.length > 0
                                    ? saved.tutor.education[0].degree + ', ' + saved.tutor.education[0].institution
                                    : '-'
                            }
                            description={saved.tutor?.bio || '-'}
                            worksSince={
                                Array.isArray(saved.tutor?.experiences) && saved.tutor.experiences.length > 0
                                    ? `Працює з ${new Date(saved.tutor.experiences[0].startDate).getFullYear()} року`
                                    : '-'
                            }
                            saved={true}
                            onSave={() => handleToggleSave(saved.tutorId)}
                            onUnsave={() => handleToggleSave(saved.tutorId)}
                        />
                    ))}
                </div>
                <Pagination totalPages={1} currentPage={1} onPageChange={()=>{}}></Pagination>
            </Section>
        </PageWrapper>
    );
}