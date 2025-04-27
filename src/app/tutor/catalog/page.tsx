"use client";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionInvisible } from "@/components/layout/section";

export default function CatalogPage() {
  // Mock data for filters
  const subjects = ["Математика", "Українська мова", "Англійська мова", "Біологія", "Географія", "Історія", "Фізика", "Хімія", "Інформатика"];
  const types = ["Репетиторство", "Домашня робота", "Контрольна робота", "Пояснення теми", "Написання робіт"];
  
  // Mock data for employee cards
  const employees = [
    {
      id: 1,
      name: "Смирнова Марія",
      rating: "4.9/5",
      avatar: 1,
      education: "Магістр з інформатики, сертифікат з академічного письма",
      worksSince: "На сайті з 14.01",
      description: "Я професійно допомагаю студентам на всіх етапах написання дипломних робіт: від вибору теми та планування до написання та оформлення роботи відповідно до вимог ВНЗ."
    },
    {
      id: 2,
      name: "Іваненко Олександр",
      rating: "5/5",
      avatar: 2,
      education: "Магістр з прикладної математики, кандидат наук (PhD) у галузі інформатики",
      worksSince: "На сайті з 14.01",
      description: "Я підходжу до кожного студента з урахуванням його рівня знань та навчальних потреб, створюючи персоналізовані програми, щоб допомогти досягти найкращих результатів."
    },
    {
      id: 3,
      name: "Коваль Андрій",
      rating: "4/5",
      avatar: 5,
      education: "Доктор наук (PhD) з інформаційних технологій, університет 'Київ-Могилянська академія'",
      worksSince: "На сайті з 14.01",
      description: "Маю глибокі знання та практичний досвід у своїй сфері, що дозволяє мені не лише викладати теорію, а й передавати студентам цінні практичні навички."
    }
  ];

  return (
    <PageWrapper className="catalogPageEmployer">
      <SectionInvisible>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-[300px] flex flex-col gap-6">
            <h3 className="text-rich-black">Пошук фахівців</h3>
            
            {/* Subject Filter */}
            <div className="bg-white-fg p-4 rounded-medium shadow-small">
              <h4 className="font-medium mb-2">Предмет</h4>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject, index) => (
                  <button 
                    key={index}
                    className="px-3 py-1 bg-white-bg text-sm rounded-small hover:bg-primary hover:text-white-fg transition-colors"
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Type Filter */}
            <div className="bg-white-fg p-4 rounded-medium shadow-small">
              <h4 className="font-medium mb-2">Тип роботи</h4>
              <div className="flex flex-wrap gap-2">
                {types.map((type, index) => (
                  <button 
                    key={index}
                    className="px-3 py-1 bg-white-bg text-sm rounded-small hover:bg-primary hover:text-white-fg transition-colors"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Employee Results */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6">
              {employees.map((employee) => (
                <div 
                  key={employee.id} 
                  className="bg-white-fg p-6 rounded-medium shadow-medium flex gap-6 hover:shadow-double transition-shadow"
                >
                  {/* Avatar */}
                  <div className="w-[100px] h-[100px] bg-primary rounded-full flex items-center justify-center text-white-fg text-xl font-bold">
                    {employee.name.charAt(0)}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-rich-black">{employee.name}</h4>
                      <div className="bg-secondary px-2 py-1 rounded-small text-sm font-medium">
                        {employee.rating}
                      </div>
                    </div>
                    
                    <p className="text-sm text-dark-gray mb-1">{employee.education}</p>
                    <p className="text-sm text-dark-gray mb-3">{employee.worksSince}</p>
                    
                    <p className="p2">{employee.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination (placeholder) */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                {[1, 2, 3].map((page) => (
                  <button 
                    key={page}
                    className={`w-10 h-10 flex items-center justify-center rounded-small ${
                      page === 1 ? 'bg-primary text-white-fg' : 'bg-white-fg text-rich-black hover:bg-primary hover:text-white-fg'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionInvisible>
    </PageWrapper>
  );
} 