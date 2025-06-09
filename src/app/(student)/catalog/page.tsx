"use client"

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Section } from "@/components/layout/section";
import { Filter } from "@/components/ui/filter";
import { EmployeeCard } from "@/components/cards/employee-card";
import Avatar from "public/assets/avatars/Avatars";
import Pagination from "@/components/layout/pagination";
import { fetchAllTutors } from '@/services/tutors';
import type { Tutor } from '@/types/tutor-types';
import { getSavedTutors, saveTutor } from '@/services/profile';
import type { SavedTutor } from '@/types/order';

type SubjectCode = "Mat" | "Ukr" | "Eng" | "Bio" | "Geo" | "His" | "Phy" | "Che" | "Inf";
type CategoryCode = "TT" | "HW" | "KR" | "DT" | "DR";

export default function Catalog() {
    return (
        <Suspense>
            <CatalogContent />
        </Suspense>
    );
}

function CatalogContent() {
    const searchParams = useSearchParams();
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    
    // Subject and category mappings
    const subjectCodes: SubjectCode[] = ["Mat", "Ukr", "Eng", "Bio", "Geo", "His", "Phy", "Che", "Inf"];
    const subjectNames: Record<SubjectCode, string> = {
        "Mat": "Математика",
        "Ukr": "Українська мова",
        "Eng": "Англійська мова",
        "Bio": "Біологія",
        "Geo": "Географія",
        "His": "Історія",
        "Phy": "Фізика",
        "Che": "Хімія",
        "Inf": "Інформатика"
    };
    
    const categoryCodes: CategoryCode[] = ["TT", "HW", "KR", "DT", "DR"];
    const categoryNames: Record<CategoryCode, string> = {
        "TT": "Репетиторство",
        "HW": "Домашня робота",
        "KR": "Контрольна робота",
        "DT": "Пояснення теми",
        "DR": "Написання робіт"
    };

    // Tutor fetching state
    const [tutors, setTutors] = useState<Tutor[]>([]);
    const [loadingTutors, setLoadingTutors] = useState(true);
    const [tutorsError, setTutorsError] = useState<string | null>(null);

    // Saved tutors state
    const [savedTutors, setSavedTutors] = useState<SavedTutor[]>([]);
    const [saving, setSaving] = useState<string | null>(null);

    // Initialize filters based on URL search params
    useEffect(() => {
        const subject = searchParams.get('subject');
        const category = searchParams.get('category');
        
        if (subject && subjectCodes.includes(subject as SubjectCode)) {
            setSelectedSubjects([subject]);
        }
        
        if (category && categoryCodes.includes(category as CategoryCode)) {
            setSelectedCategories([category]);
        }
    }, [searchParams]);

    useEffect(() => {
        console.log('[Catalog] Fetching all tutors...');
        setLoadingTutors(true);
        fetchAllTutors()
            .then(data => {
                console.log('[Catalog] Tutors fetched:', data);
                setTutors(data);
            })
            .catch(err => {
                console.error('[Catalog] Error fetching tutors:', err);
                setTutorsError(err?.response?.data?.message || 'Не вдалося завантажити фахівців.');
            })
            .finally(() => setLoadingTutors(false));
    }, []);

    useEffect(() => {
        getSavedTutors()
            .then(setSavedTutors)
            .catch(() => setSavedTutors([]));
    }, []);

    const isTutorSaved = (tutorId: string) => savedTutors.some(s => s.tutorId === tutorId);

    const handleToggleSave = async (tutorId: string) => {
        console.log('Toggling save for tutor:', tutorId);
        setSaving(tutorId);
        // Optimistic update
        const currentlySaved = isTutorSaved(tutorId);
        setSavedTutors(prev => {
            let updated;
            if (!currentlySaved) {
                updated = [...prev, { id: '', studentId: '', tutorId, createdAt: '' }];
            } else {
                updated = prev.filter(s => s.tutorId !== tutorId);
            }
            console.log('Optimistically updated savedTutors:', updated);
            return updated;
        });
        try {
            const result = await saveTutor(tutorId);
            console.log('API response for saveTutor:', result);
            if (result.savedTutors) {
                setSavedTutors(result.savedTutors);
                console.log('Set savedTutors from backend:', result.savedTutors);
            }
        } catch (err) {
            // Revert optimistic update on error
            setSavedTutors(prev => {
                let updated;
                if (currentlySaved) {
                    updated = [...prev, { id: '', studentId: '', tutorId, createdAt: '' }];
                } else {
                    updated = prev.filter(s => s.tutorId !== tutorId);
                }
                console.error('Reverting optimistic update due to error:', err, updated);
                return updated;
            });
        } finally {
            setSaving(null);
        }
    };

    // Handle filter changes
    const handleSubjectFilterChange = (filter: string, checked: boolean) => {
        if (checked) {
            setSelectedSubjects(prev => [...prev, filter]);
        } else {
            setSelectedSubjects(prev => prev.filter(item => item !== filter));
        }
    };

    const handleCategoryFilterChange = (filter: string, checked: boolean) => {
        if (checked) {
            setSelectedCategories(prev => [...prev, filter]);
        } else {
            setSelectedCategories(prev => prev.filter(item => item !== filter));
        }
    };

    // In a real application, you would filter employees based on selectedSubjects and selectedCategories
    // This is just a demo implementation

    return (
        <PageWrapper>
            <Section title="Пошук фахівців">
                <div className="flex gap-[100px]">
                    <div className="flex flex-col gap-4 whitespace-nowrap">
                    
                        <Filter 
                            title="Предмет" 
                            filters={subjectCodes.map((code) => ({
                                code,
                                name: subjectNames[code]
                            }))} 
                            selectedFilters={selectedSubjects}
                            onFilterChange={handleSubjectFilterChange}
                        />
                        <Filter 
                            title="Категорія" 
                            filters={categoryCodes.map((code) => ({
                                code,
                                name: categoryNames[code]
                            }))} 
                            selectedFilters={selectedCategories}
                            onFilterChange={handleCategoryFilterChange}
                        />
                    </div>
                    <div className="w-full">
                        <div className="grid gap-6">
                            {loadingTutors && <div>Завантаження фахівців...</div>}
                            {tutorsError && <div className="text-red-600">{tutorsError}</div>}
                            {!loadingTutors && !tutorsError && tutors.length === 0 && <div>Фахівців не знайдено.</div>}
                            {!loadingTutors && !tutorsError && tutors.map((tutor, idx) => (
                                <EmployeeCard
                                    key={tutor.id}
                                    name={`${tutor.firstName} ${tutor.lastName}`}
                                    rating={''}
                                    avatarId={((idx % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                                    education={''}
                                    worksSince={''}
                                    description={tutor.bio || ''}
                                    saved={isTutorSaved(tutor.id)}
                                    onSave={() => handleToggleSave(tutor.id)}
                                    onUnsave={() => handleToggleSave(tutor.id)}
                                />
                            ))}
                        </div>
                    </div>
                    {/* <Pagination></Pagination> */}
                </div>
                 <Pagination totalPages={20} currentPage={2} onPageChange={()=>{console.log('Page changed!')}}></Pagination>
            </Section>
        </PageWrapper>
    );
} 