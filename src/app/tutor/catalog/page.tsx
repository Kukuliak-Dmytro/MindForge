"use client"

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Section } from "@/components/layout/section";
import { Filter } from "@/components/ui/filter";
import { EmployeeCard } from "@/components/cards/employee-card";
import Avatar from "public/assets/avatars/Avatars";
import Pagination from "@/components/layout/pagination";
import OrderCard from "@/components/cards/order-card";
import { fetchOrders, getSubjects, getCategories } from '@/services/subjects';
import type { Order } from '@/types/order';
import type { Subject, Category } from '@/types/subject';
import { getSavedOrders, saveOrder } from '@/services/profile';
import type { SavedOrder } from '@/types/order';

type SubjectCode = "Mat" | "Ukr" | "Eng" | "Bio" | "Geo" | "His" | "Phy" | "Che" | "Inf";
type CategoryCode = "TT" | "HW" | "KR" | "DT" | "DR";

export default function OrdersCatalog() {
    return (
        <Suspense>
            <OrdersCatalogContent />
        </Suspense>
    );
}

function OrdersCatalogContent() {
    const searchParams = useSearchParams();
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [savedOrders, setSavedOrders] = useState<SavedOrder[]>([]);
    const [saving, setSaving] = useState<string | null>(null); // orderId being saved/unsaved
    
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

    // Fetch subjects and categories for mapping
    useEffect(() => {
        getSubjects().then(res => setSubjects(res.data)).catch(() => setSubjects([]));
        getCategories().then(res => setCategories(res.data)).catch(() => setCategories([]));
    }, []);

    // Fetch orders
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetchOrders()
            .then(data => setOrders(data))
            .catch(err => setError(err?.response?.data?.message || err.message || 'Не вдалося завантажити замовлення.'))
            .finally(() => setLoading(false));
    }, []);

    // Fetch saved orders on mount
    useEffect(() => {
        getSavedOrders()
            .then(setSavedOrders)
            .catch(() => setSavedOrders([]));
    }, []);

    // Filter helpers
    const getSubjectName = (id: string) => subjects.find(s => s.id === id)?.name || '—';
    const getCategoryName = (id: string) => categories.find(c => c.id === id)?.name || '—';

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

    const isOrderSaved = (orderId: string) => savedOrders.some(s => s.orderId === orderId);

    const handleToggleSave = async (orderId: string) => {
        console.log('Toggling save for order:', orderId);
        setSaving(orderId);
        // Optimistic update
        const currentlySaved = isOrderSaved(orderId);
        setSavedOrders(prev => {
            let updated;
            if (!currentlySaved) {
                updated = [...prev, { id: '', tutorId: '', orderId, createdAt: '' }];
            } else {
                updated = prev.filter(s => s.orderId !== orderId);
            }
            console.log('Optimistically updated savedOrders:', updated);
            return updated;
        });
        try {
            const result = await saveOrder(orderId);
            console.log('API response for saveOrder:', result);
            if (result.savedOrders) {
                setSavedOrders(result.savedOrders);
                console.log('Set savedOrders from backend:', result.savedOrders);
            }
        } catch (err) {
            // Revert optimistic update on error
            setSavedOrders(prev => {
                let updated;
                if (currentlySaved) {
                    updated = [...prev, { id: '', tutorId: '', orderId, createdAt: '' }];
                } else {
                    updated = prev.filter(s => s.orderId !== orderId);
                }
                console.error('Reverting optimistic update due to error:', err, updated);
                return updated;
            });
        } finally {
            setSaving(null);
        }
    };

    // In a real application, you would filter employees based on selectedSubjects and selectedCategories
    // This is just a demo implementation

    return (
        <PageWrapper>
            <Section title="Пошук замовлень">
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
                        <div className="grid gap-4">
                            {loading && <div>Завантаження замовлень...</div>}
                            {error && <div className="text-red-600">{error}</div>}
                            {!loading && !error && orders.length === 0 && <div>Замовлень не знайдено.</div>}
                            {!loading && !error && orders.map(order => (
                                <OrderCard
                                    key={order.id}
                                    id={order.id}
                                    subject={order.subject?.name}
                                    category={order.category?.name}
                                    title={order.title}
                                    description={order.description}
                                    price={order.totalPrice}
                                    created={order.createdAt ? new Date(order.createdAt).toLocaleDateString() : undefined}
                                    variant="full"
                                    saved={isOrderSaved(order.id)}
                                    onSave={() => handleToggleSave(order.id)}
                                    onUnsave={() => handleToggleSave(order.id)}
                                />
                            ))}
                        </div>
                    </div>
                 
                </div>
                 <Pagination totalPages={20} currentPage={2} onPageChange={()=>{console.log('Page changed!')}}></Pagination>
            </Section>
        </PageWrapper>
    );
} 