interface OrderCardProps {
    id: string;
    subject: string;
    topic: string;
    created: string; 
    deadline: string;
    description: string;
    title: string;
    price: number;
}
export default function OrderCard() {
    return (
        <div className="bg-white-bg p-6 flex flex-col gap-4 text-center shadow-double rounded-medium">
          <div className="flex space-between items-center">
            <p className="p2">28 січня 2025</p>
            <p className="p2">1 червня 2025</p>
          </div>
          <div className="flex space-between items-center">
            <h4>Підготовка до ЗНО з математики</h4>
            <h4>400 грн/год</h4>
          </div>
          <div className="flex space-between items-center">
            <h6>Математика</h6>
            <h6>Репетиторство</h6>
          </div>
          <p>Потрібен репетитор для підготовки до ЗНО з математики. Основна увага – задачі з параметрами, логарифми та геометрія. Заняття двічі на тиждень по 1,5 години.</p>
        </div>
    )

}