"use client"
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Section } from "@/components/layout/section";
import OrderCard from "@/components/cards/order-card";
import Pagination from "@/components/layout/pagination";
import { useEffect, useState } from "react";
import { getSavedOrders } from "@/services/profile";
import type { SavedOrder } from "@/types/order";

export default function SavedOrders() {
    const [orders, setOrders] = useState<SavedOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getSavedOrders()
            .then(setOrders)
            .catch((e) => setError(e.message || "Помилка завантаження"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <PageWrapper>
            <Section title="Збережені замовлення" >
                {loading && <div>Завантаження...</div>}
                {error && <div className="text-red-500">{error}</div>}
                <div className="grid grid-cols-2 gap-5">
                    {orders.map((saved) => (
                        <OrderCard
                            key={saved.id}
                            variant="full"
                            title={saved.order?.title}
                            subject={saved.order?.subject?.name}
                            description={saved.order?.description}
                            price={saved.order?.totalPrice}
                            category={saved.order?.category?.name}
                            created={saved.order?.createdAt ? (typeof saved.order.createdAt === 'string' ? saved.order.createdAt : saved.order.createdAt.toLocaleDateString()) : undefined}
                        />
                    ))}
                </div>
                <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
            </Section>
        </PageWrapper>
    );
}