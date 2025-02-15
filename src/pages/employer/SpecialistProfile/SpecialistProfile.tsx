// it`s supposed to be the public profile of the specialist that the employer can look at
import { PrimaryButton } from "../../../components/buttons/Button";
import PageWrapper from "../../../components/frames/pageWraper/PageWrapper";
import { SectionInvisible, Section } from "../../../components/frames/section/Section";
import Avatar from "../../../assets/Avatars";
import "./SpecialistProfile.css";
import SubjectSnippet from "../../../components/cards/subjectSnippet/SubjectSnippet";
import Icons from "../../../assets/Icons";
import PriceCard from "../../../components/cards/priceCard/PriceCard";
import ReviewCard from "../../../components/cards/reviewCard/ReviewCard";
export default function SpecialistProfile() {
    return (
        <PageWrapper className="specialistProfilePage">
            <SectionInvisible>
                <Section title="Профіль фахівця">
                    <div className="avatarWrapper">
                        <Avatar id={0} size={200}></Avatar>
                        <h3>Смирнова Марія</h3>
                        <h4>5.0/5.0</h4>
                        <p>Відгуків: 23</p>
                        <p className="p2">На сайті з 23.01.23</p>
                        <PrimaryButton large> Запропонувати замовлення</PrimaryButton>
                    </div>
                </Section>
                <Section>
                    <div className="specializationWrapper">
                        <div className="subjects">
                            <h3>Предмети</h3>
                            <span>
                                <SubjectSnippet title='Математика'><Icons size={35} icon='Mat'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Хімія'><Icons size={35} icon='Che'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Фізика'><Icons size={35} icon='Phy'></Icons></SubjectSnippet>
                            </span>
                        </div>
                        <div className="categories">
                            <h3>Категорії</h3>
                            <span>
                                <SubjectSnippet title='Репетиторство'><Icons size={35} icon='TT'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Домашні роботи'><Icons size={35} icon='HW'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Пояснення складних тем'><Icons size={35} icon='DT'></Icons></SubjectSnippet>
                            </span>
                        </div>

                    </div>
                </Section>
                <Section>
                    <div className="descriptionWrapper">
                        <div className="separator">
                            <div className="accentHeader">
                                <h4>Освіта:</h4>
                                <span></span>
                            </div>
                            <span className="line">
                                <p>Ступінь бакалавра в галузі Математики </p>
                                <h5>2021-2025</h5>
                            </span>

                        </div>
                        <div className="separator">
                            <div className="accentHeader"><h4>Досвід:</h4>
                                <span></span></div>
                            <span className="line">
                                <p>Викладання математики онлайн </p>
                                <h5>2024-2025</h5>
                            </span>
                        </div>
                        <div className="separator">
                            <div className="accentHeader"><h4>Робота в MindForge</h4>
                                <span></span></div>
                            <span className="line">
                                <p>Початок роботи </p>
                                <h5>23.01.2023</h5>
                            </span><span className="line">
                                <p>Кількість виконаних замовлень:</p>
                                <h5>33</h5>
                            </span>
                        </div>
                        <div className="separator">
                            <div className="accentHeader"><h4>Про себе - методика викладання:</h4>
                                <span></span></div>
                            <p>Я підходжу до кожного студента з урахуванням його рівня знань та навчальних потреб, створюючи персоналізовані програми, щоб допомогти досягти найкращих результатів.</p>

                        </div>
                        <div className="separator">
                            <div className="accentHeader"><h4>Про себе - детально:</h4>
                                <span></span></div>

                            <p>Я, Смирнова Марія Олексіївна, маю ступінь бакалавра в галузі математики і вже більше року займаюся викладанням математики онлайн. Моя професія — це не просто робота, а покликання. Я щиро вірю, що математичні знання є фундаментом для розвитку мислення та здатності розв'язувати складні завдання. Викладаючи математику, я завжди намагаюся зробити цей процес максимально зрозумілим і доступним для моїх учнів, застосовуючи індивідуальний підхід до кожного.</p>
                            <p>З 2024 року я почала викладати онлайн, що дозволило мені ще більше розвинути свої педагогічні навички та вміння працювати з різними форматами навчання. В процесі роботи я завжди орієнтуюсь на результат, прагну донести до студентів не лише знання, але й впевненість у своїх силах для подолання складних завдань.</p>
                            <p>Моє хобі — шахи, яке дозволяє тренувати логіку і стратегічне мислення. Я вважаю, що цей вид діяльності дуже добре поєднується з викладанням математики, оскільки допомагає розвивати здатність до планування та аналізу, що є важливими як в шахах, так і в процесі навчання.</p>
                        </div>

                    </div>
                </Section>
                <Section>
                    <div className="priceListWrapper">
                        <h3>Вартість послуг</h3>
                        <div className="priceListFrame">
                            <PriceCard title="Репетиторство з математики (1 год)" price={450}></PriceCard>
                            <PriceCard title="Репетиторство з фізики (1 год)" price={475}></PriceCard>
                            <PriceCard title="Репетиторство з хімії (1 год)" price={500}></PriceCard>
                            <PriceCard title="Пояснення складних тем з математики (1 тема)" price={350}></PriceCard>
                            <PriceCard title="Пояснення складних тем з фізики (1 тема)" price={375}></PriceCard>
                            <PriceCard title="Пояснення складних тем з хімії (1 тема)" price={400}></PriceCard>
                            <PriceCard title="Допомога зі складними завданнями з математики (1 завдання)" price={250}></PriceCard>
                            <PriceCard title="Допомога зі складними завданнями з фізики (1 завдання)" price={275}></PriceCard>
                            <PriceCard title="Допомога зі складними завданнями з хімії (1 завдання)" price={300}></PriceCard>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="profileReviewsWrapper">
                        <h3>Відгуки</h3>
                        <div className="reviewsFrame">
                            <ReviewCard author="Олена" date="21.01.2024" avatar={<Avatar id={0} size={100}></Avatar>}content="Дуже задоволена заняттями! Репетитор знайшов підхід до моєї дитини, і вже через кілька тижнів ми побачили прогрес у математиці." rating={4.5}></ReviewCard>
                            <ReviewCard author="Артем" date="16.06.23" avatar={<Avatar id={0} size={100}></Avatar>}content="Замовив допомогу з контрольними завданнями з фізики. Все зробили якісно та вчасно, хоча хотілося трохи детальніших пояснень." rating={5.0}></ReviewCard>
                            <ReviewCard author="Анастасія" date="28.01.25" avatar={<Avatar id={0} size={100}></Avatar>}content="Дуже дякую за пояснення складних тем з програмування! Тепер цикли та функції стали для мене зрозумілими. Рекомендую всім!" rating={4.0}></ReviewCard>
                          </div>
                    </div>

                </Section>
            </SectionInvisible>
        </PageWrapper>
    )
}