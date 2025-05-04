
import { PrimaryButton, SecondaryButton } from "../ui/button";
interface OrderCardProps {
  id?: string;
  subject?: string;
  topic?: string;
  created?: string;
  deadline?: string;
  description?: string;
  title?: string;
  price?: number;
  variant?: 'default' | 'full';
}

export default function OrderCard({ variant = 'default' }: OrderCardProps) {
  return (
    <div className="bg-white-bg p-6 flex flex-col gap-4 text-center shadow-double rounded-medium items-left">
      {variant === 'default' && (
        <>
          <div className="flex justify-between items-center">
            <p className="p2">28 січня 2025</p>
            <p className="p2">1 червня 2025</p>
          </div>
          <div className="flex justify-between items-center">
            <h4>Підготовка до ЗНО з математики</h4>
            <h4>400 грн/год</h4>
          </div>
          <div className="flex justify-between items-center">
            <h6>Математика</h6>
            <h6>Репетиторство</h6>
          </div>
          <p className="text-left">Потрібен репетитор для підготовки до ЗНО з математики. Основна увага – задачі з параметрами, логарифми та геометрія. Заняття двічі на тиждень по 1,5 години.</p>
        </>
      )}
      {variant === 'full' && (
        <>
          <div className="flex justify-between items-center">
            <p className="p2">Дата створення: 28 січня 2025</p>
            <p className="p2">Дедлайн: 1 червня 2025</p>
          </div>
          <div className="flex justify-between items-center">
            <h4>Підготовка до ЗНО з математики</h4>
            <h4>400 грн/год</h4>
          </div>
          <div className="flex justify-between items-center">
            <h6>Предмет: Математика</h6>
            <h6>Тип: Репетиторство</h6>
          </div>
          <p className="text-left">Опис: Потрібен репетитор для підготовки до ЗНО з математики. Основна увага – задачі з параметрами, логарифми та геометрія. Заняття двічі на тиждень по 1,5 години.</p>
          <div className="flex justify-between items-center">
            <SecondaryButton size="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" fill="#0B0702" />
            </svg>
            </SecondaryButton>
            <PrimaryButton>Зв'язатися</PrimaryButton>
          </div>
        </>
      )}
    </div>
  );
}