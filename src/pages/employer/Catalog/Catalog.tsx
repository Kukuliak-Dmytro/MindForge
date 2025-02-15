import PageWrapper from "../../../components/frames/pageWraper/PageWrapper"
import { SectionInvisible } from "../../../components/frames/section/Section"
import Filter from "../../../components/other/filter/Filter"
import "./Catalog.css"
import { EmployeeCard } from "../../../components/cards/employeeCard/EmployeeCard"
import Avatar from "../../../assets/Avatars"
// import Pagination from "../../../components/frames/pagination/Pagination
export default function Catalog() {

    return (
        <>
            <PageWrapper className="catalogPageEmployer">
                <SectionInvisible>
                    <div className="catalogWrapper">
                        <div className="filters">
                            <h3>Пошук фахівців</h3>
                            <Filter title="Предмет" filters={["Математика", "Українська мова", "Англійська мова", "Біологія", "Географія", "Історія", "Фізика", "Хімія", "Інформатика"]}></Filter>
                            <Filter title="Предмет" filters={["Репетиторство", "Домашня робота", "Контрольна робота", "Пояснення теми", "Написання робіт"]}></Filter>
                        </div>
                        <div className="employeesResults">
                            <div className="employeesFrame">
                                <EmployeeCard name="Смирнова Марія" rating='4.9/5' avatar={<Avatar id={1} size={100}></Avatar>} education="Магістр з інформатики, сертифікат з академічного письма" worksSince="На сайті з 14.01" description="Я професійно допомагаю студентам на всіх етапах написання дипломних робіт: від вибору теми та планування до написання та оформлення роботи відповідно до вимог ВНЗ."></EmployeeCard>
                                <EmployeeCard name="Іваненко Олександр" rating='5/5' avatar={<Avatar id={2} size={100}></Avatar>} education="Магістр з прикладної математики, кандидат наук (PhD) у галузі інформатики" worksSince="На сайті з 14.01" description="Я підходжу до кожного студента з урахуванням його рівня знань та навчальних потреб, створюючи персоналізовані програми, щоб допомогти досягти найкращих результатів."></EmployeeCard>
                                <EmployeeCard name="Коваль Андрій" rating='4/5' avatar={<Avatar  id={5} size={100} ></Avatar>} education="Доктор наук (PhD) з інформаційних технологій, університет 'Київ-Могилянська академія'" worksSince="На сайті з 14.01" description="Маю глибокі знання та практичний досвід у своїй сфері, що дозволяє мені не лише викладати теорію, а й передавати студентам цінні практичні навички."></EmployeeCard>
                            </div>
                        </div>
                    {/* <Pagination></Pagination> */}
                    </div>
                </SectionInvisible>
            </PageWrapper>
        </>
    )

}
