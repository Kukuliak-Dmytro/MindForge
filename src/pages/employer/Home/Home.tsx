// Assets
import heroImg from '../../../assets/heroImg.png';
import Icons from '../../../assets/Icons';
import benefitsImg1 from '../../../assets/benefitsImg1.png';
import benefitsImg2 from '../../../assets/benefitsImg2.png';
import benefitsImg3 from '../../../assets/benefitsImg3.png';
import Avatar from '../../../assets/Avatars';

// Components
import PageWrapper from '../../../components/frames/pageWraper/PageWrapper';
import { Section } from '../../../components/frames/section/Section';
import { PrimaryButton, SecondaryButton } from '../../../components/buttons/Button';
import SubjectSnippet from '../../../components/cards/subjectSnippet/SubjectSnippet';
import SubjectCard from '../../../components/cards/subjectCard/SubjectCard';
import StepCard from '../../../components/cards/stepCard/StepCard';
import BenefitCard from '../../../components/cards/benefitCard/BenefitCard';
import BestEmployeeCard from '../../../components/cards/bestEmployeeCard/BestEmployeeCard';
import TestimonialCard from '../../../components/cards/testimonialCard/TestimonialCard';

// Styles
import './Home.css';
export default function Home() {
    return (
        <>
            <PageWrapper className='homepageEmployer'>
                <Section>
                    <div className="heroWrapper">
                        <div className="left">
                            <h1>
                                <span>Mind</span><span>Forge</span><br />
                                кузня твого розуму
                            </h1>
                            <div className="snippetsWraper">
                                <SubjectSnippet title='Репетиторство'><Icons size={35} icon='TT'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Домашні роботи'><Icons size={35} icon='HW'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Контрольні роботи'><Icons size={35} icon='KR'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Комплексні теми'><Icons size={35} icon='DT'></Icons></SubjectSnippet>
                                <SubjectSnippet title='Дипломні роботи'><Icons size={35} icon='DR'></Icons></SubjectSnippet>
                            </div>
                            <div className="buttonsWrapper">
                                <PrimaryButton>Знайти фахівця</PrimaryButton>
                                <SecondaryButton>Розмістити замовлення</SecondaryButton>
                            </div>
                        </div>
                        <div className="right">
                            <img src={heroImg} alt="" />
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="subjectsWrapper">
                        <h1>Доступні предмети на сайті:</h1>
                        <div className="cardsFrame">
                            <SubjectCard title='Математика' link='#'> <Icons size={100} icon='Mat' ></Icons></SubjectCard>
                            <SubjectCard title='Українська мова' link='#'> <Icons size={100} icon='Ukr' ></Icons></SubjectCard>
                            <SubjectCard title='Англійська мова' link='#'> <Icons size={100} icon='Eng' ></Icons></SubjectCard>
                            <SubjectCard title='Біологія' link='#'> <Icons size={100} icon='Bio' ></Icons></SubjectCard>
                            <SubjectCard title='Географія' link='#'> <Icons size={100} icon='Geo' ></Icons></SubjectCard>
                            <SubjectCard title='Фізика' link='#'> <Icons size={100} icon='Phy' ></Icons></SubjectCard>
                            <SubjectCard title='Хімія' link='#'> <Icons size={100} icon='Che' ></Icons></SubjectCard>
                            <SubjectCard title='Історія' link='#'> <Icons size={100} icon='His' ></Icons></SubjectCard>
                            <SubjectCard title='Інформатика' link='#'> <Icons size={100} icon='Inf' ></Icons></SubjectCard>
                        </div>
                        <PrimaryButton link='#' large width={300}>Перейти</PrimaryButton>
                    </div>
                </Section>
                <Section>
                    <div className="aboutWrapper">
                        <h1>Як це працює:</h1>
                        <div className="stepsFrame">
                            <StepCard title='Створюй замовлення' content=' Реєструйся, заповнюй мінімальні дані про себе. Далі - все, що стосується замовлення' step={1}>
                                <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M77.5 54.25C79.6401 54.25 81.375 55.9849 81.375 58.125V73.625C81.375 75.6804 80.5585 77.6517 79.1051 79.1051C77.6517 80.5585 75.6804 81.375 73.625 81.375H19.375C17.3196 81.375 15.3483 80.5585 13.8949 79.1051C12.4415 77.6517 11.625 75.6804 11.625 73.625V19.375C11.625 17.3196 12.4415 15.3483 13.8949 13.8949C15.3483 12.4415 17.3196 11.625 19.375 11.625H34.875C37.0151 11.625 38.75 13.3599 38.75 15.5C38.75 17.6401 37.0151 19.375 34.875 19.375H25.375C22.0613 19.375 19.375 22.0613 19.375 25.375V67.625C19.375 70.9387 22.0613 73.625 25.375 73.625H67.625C70.9387 73.625 73.625 70.9387 73.625 67.625V58.125C73.625 55.9849 75.3599 54.25 77.5 54.25Z" fill="currentColor" />
                                    <path d="M79 29.1014C73.9253 29.1014 70.6197 29.1014 65.25 29.1014C65.25 29.1014 65.25 18.9181 65.25 15.3695C65.25 9.87682 57.5 9.87683 57.5 15.3695C57.5 18.1159 57.5 29.1014 57.5 29.1014C57.5 29.1014 47 29.1014 43 29.1014C38 29.1014 38 37.6152 43 37.6152C50.2637 37.6152 57.5 37.6152 57.5 37.6152C57.5 37.6152 57.5 46.1289 57.5 51.0724C57.5 56.0159 65.25 56.0159 65.25 51.0724C65.25 46.3664 65.25 37.6152 65.25 37.6152C65.25 37.6152 75 37.6152 79 37.6152C84 37.6152 84.0747 29.1014 79 29.1014Z" fill="currentColor" />
                                </svg>
                            </StepCard>
                            <StepCard title='Обирай фахівця' content=' Необхідного фахівця можна вибрати з каталогу, або ж дочекатися, поки не напишуть і запропонують виконання замовлення' step={2}><svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.5 81.375L33.4219 85.7344C32.9698 85.8635 32.55 85.9604 32.1625 86.025C31.775 86.0896 31.3875 86.1219 31 86.1219C28.9333 86.1219 27.125 85.3947 25.575 83.9403C24.025 82.4858 23.25 80.6297 23.25 78.3719V57.2531L13.175 40.8813C12.7875 40.2354 12.4969 39.5728 12.3031 38.8934C12.1094 38.214 12.0125 37.5203 12.0125 36.8125C12.0125 36.1047 12.1094 35.411 12.3031 34.7316C12.4969 34.0522 12.7875 33.3896 13.175 32.7438L26.35 11.4313C27.0604 10.2688 27.9969 9.36458 29.1594 8.71875C30.3219 8.07292 31.5813 7.75 32.9375 7.75H60.0625C61.4188 7.75 62.6781 8.07292 63.8406 8.71875C65.0031 9.36458 65.9396 10.2688 66.65 11.4313L79.825 32.7438C80.2125 33.3896 80.5031 34.0522 80.6969 34.7316C80.8906 35.411 80.9875 36.1047 80.9875 36.8125C80.9875 37.5203 80.8906 38.2153 80.6969 38.8973C80.5031 39.5793 80.2125 40.2406 79.825 40.8813L69.75 57.2531V78.3719C69.75 80.6323 68.975 82.4897 67.425 83.9441C65.875 85.3985 64.0667 86.1245 62 86.1219C61.6125 86.1219 61.225 86.0896 60.8375 86.025C60.45 85.9604 60.0302 85.8635 59.5781 85.7344L46.5 81.375ZM46.5 73.2375L62 78.3719V65.875H31V78.3719L46.5 73.2375ZM32.9375 58.125H60.0625L73.2375 36.8125L60.0625 15.5H32.9375L19.7625 36.8125L32.9375 58.125ZM42.4313 41.6563L56.0906 27.9C56.8011 27.125 57.6897 26.753 58.7566 26.784C59.8236 26.815 60.7432 27.187 61.5156 27.9C62.2906 28.675 62.6949 29.596 62.7285 30.6629C62.7621 31.7298 62.3901 32.6495 61.6125 33.4219L45.1438 49.8906C44.3688 50.6656 43.4646 51.0531 42.4313 51.0531C41.3979 51.0531 40.4938 50.6656 39.7188 49.8906L31.4844 41.6563C30.7094 40.8813 30.3219 39.9616 30.3219 38.8973C30.3219 37.8329 30.7094 36.912 31.4844 36.1344C32.2594 35.3568 33.1803 34.9693 34.2473 34.9719C35.3142 34.9745 36.2338 35.362 37.0063 36.1344L42.4313 41.6563ZM46.5 65.875H31H62H46.5Z" fill="currentColor" />
                            </svg>
                            </StepCard>
                            <StepCard title='Домовляйся про терміни та ціну ' content=' Важливо узгодити терміни виконання та ціну замовлення на самому початку, аби потім не виникало складних ситуацій' step={3}><svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.5 81.375L33.4219 85.7344C32.9698 85.8635 32.55 85.9604 32.1625 86.025C31.775 86.0896 31.3875 86.1219 31 86.1219C28.9333 86.1219 27.125 85.3947 25.575 83.9403C24.025 82.4858 23.25 80.6297 23.25 78.3719V57.2531L13.175 40.8813C12.7875 40.2354 12.4969 39.5728 12.3031 38.8934C12.1094 38.214 12.0125 37.5203 12.0125 36.8125C12.0125 36.1047 12.1094 35.411 12.3031 34.7316C12.4969 34.0522 12.7875 33.3896 13.175 32.7438L26.35 11.4313C27.0604 10.2688 27.9969 9.36458 29.1594 8.71875C30.3219 8.07292 31.5813 7.75 32.9375 7.75H60.0625C61.4188 7.75 62.6781 8.07292 63.8406 8.71875C65.0031 9.36458 65.9396 10.2688 66.65 11.4313L79.825 32.7438C80.2125 33.3896 80.5031 34.0522 80.6969 34.7316C80.8906 35.411 80.9875 36.1047 80.9875 36.8125C80.9875 37.5203 80.8906 38.2153 80.6969 38.8973C80.5031 39.5793 80.2125 40.2406 79.825 40.8813L69.75 57.2531V78.3719C69.75 80.6323 68.975 82.4897 67.425 83.9441C65.875 85.3985 64.0667 86.1245 62 86.1219C61.6125 86.1219 61.225 86.0896 60.8375 86.025C60.45 85.9604 60.0302 85.8635 59.5781 85.7344L46.5 81.375ZM46.5 73.2375L62 78.3719V65.875H31V78.3719L46.5 73.2375ZM32.9375 58.125H60.0625L73.2375 36.8125L60.0625 15.5H32.9375L19.7625 36.8125L32.9375 58.125ZM42.4313 41.6563L56.0906 27.9C56.8011 27.125 57.6897 26.753 58.7566 26.784C59.8236 26.815 60.7432 27.187 61.5156 27.9C62.2906 28.675 62.6949 29.596 62.7285 30.6629C62.7621 31.7298 62.3901 32.6495 61.6125 33.4219L45.1438 49.8906C44.3688 50.6656 43.4646 51.0531 42.4313 51.0531C41.3979 51.0531 40.4938 50.6656 39.7188 49.8906L31.4844 41.6563C30.7094 40.8813 30.3219 39.9616 30.3219 38.8973C30.3219 37.8329 30.7094 36.912 31.4844 36.1344C32.2594 35.3568 33.1803 34.9693 34.2473 34.9719C35.3142 34.9745 36.2338 35.362 37.0063 36.1344L42.4313 41.6563ZM46.5 65.875H31H62H46.5Z" fill="currentColor" />
                            </svg>
                            </StepCard>
                            <StepCard title='Чекай на виконання' content='Прояви терпіння!' step={4}> <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.5 7.75C67.9016 7.75 85.25 25.0984 85.25 46.5C85.25 67.9016 67.9016 85.25 46.5 85.25C25.0984 85.25 7.75 67.9016 7.75 46.5C7.75 25.0984 25.0984 7.75 46.5 7.75ZM46.5 15.5C38.2783 15.5 30.3933 18.7661 24.5797 24.5797C18.7661 30.3933 15.5 38.2783 15.5 46.5C15.5 54.7217 18.7661 62.6067 24.5797 68.4203C30.3933 74.2339 38.2783 77.5 46.5 77.5C54.7217 77.5 62.6067 74.2339 68.4203 68.4203C74.2339 62.6067 77.5 54.7217 77.5 46.5C77.5 38.2783 74.2339 30.3933 68.4203 24.5797C62.6067 18.7661 54.7217 15.5 46.5 15.5ZM46.5 23.25C47.4491 23.2501 48.3652 23.5986 49.0744 24.2293C49.7837 24.86 50.2368 25.729 50.3479 26.6716L50.375 27.125V44.8958L60.8646 55.3854C61.5596 56.0827 61.9631 57.0184 61.9931 58.0025C62.0232 58.9865 61.6775 59.9451 61.0264 60.6836C60.3753 61.422 59.4675 61.8849 58.4874 61.9783C57.5073 62.0717 56.5285 61.7885 55.7496 61.1862L55.3854 60.8646L43.7604 49.2396C43.1581 48.6369 42.7713 47.8524 42.6599 47.0076L42.625 46.5V27.125C42.625 26.0973 43.0333 25.1117 43.76 24.385C44.4867 23.6583 45.4723 23.25 46.5 23.25Z" fill="currentColor" />
                            </svg>
                            </StepCard>
                            <StepCard title='Повтори все ще раз' content='Дякуюємо, що ви скористалися нашим сервісом! Будемо чекати наступного разу!' step={5}> <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65.875 7.75L81.375 23.25L65.875 38.75" stroke="currentColor" stroke-width="7.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.625 42.625V38.75C11.625 34.6391 13.258 30.6967 16.1648 27.7898C19.0717 24.883 23.0141 23.25 27.125 23.25H81.375M27.125 85.25L11.625 69.75L27.125 54.25" stroke="currentColor" stroke-width="7.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M81.375 50.375V54.25C81.375 58.3609 79.742 62.3033 76.8352 65.2102C73.9283 68.117 69.9859 69.75 65.875 69.75H11.625" stroke="currentColor" stroke-width="7.75" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </StepCard>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="benefitsWrapper">
                        <h1>MindForge - це...</h1>
                        <div className="benefitsFrame">
                            <BenefitCard title='Швидко' color='primary' imgSrc={benefitsImg1}></BenefitCard>
                            <BenefitCard title='Просто' color='secondary' imgSrc={benefitsImg2}></BenefitCard>
                            <BenefitCard title='Ефективно' color='accent' imgSrc={benefitsImg3}></BenefitCard>
                        </div>

                        <PrimaryButton large link='#' width={500}> Створити замовлення</PrimaryButton>
                    </div>
                </Section>
                <Section>
                    <div className="bestEmployeesWrapper">
                        <h1>Наші ТОП-фахівці</h1>
                        <div className="bestEmployeesFrame">
                            <BestEmployeeCard workingSince='14.01.22' rating='4.9/5' name='Смирнова Марія' description='Я підходжу до кожного студента з урахуванням його рівня знань та навчальних потреб, створюючи персоналізовані програми, щоб допомогти досягти найкращих результатів.' ><Avatar id={1} size={128}></Avatar></BestEmployeeCard>
                            <BestEmployeeCard workingSince='12.12.21' rating='4.4/5.0' name='Іваненко Олександр' description='Маю глибокі знання та практичний досвід у своїй сфері, що дозволяє мені не лише викладати теорію, а й передавати студентам цінні практичні навички' ><Avatar id={2} size={128}></Avatar></BestEmployeeCard>
                            <BestEmployeeCard workingSince='01.01.24' rating='4.7/5' name='Коваль Вероніка' description='Я професійно допомагаю студентам на всіх етапах написання дипломних робіт: від вибору теми та планування до написання та оформлення роботи відповідно до вимог ВНЗ.' ><Avatar id={3} size={128}></Avatar></BestEmployeeCard>
                        </div>
                        <PrimaryButton large width={500} >Каталог фахівців</PrimaryButton>
                    </div>
                </Section>
                <Section>
                    <div className="reviewsWrapper">
                        
                <h1>Відгуки про наших фахівців</h1>
                <div className="reviewsFrame">
                    <TestimonialCard name="Куцик Оксана" rating="5/5" subject="Математика" description="Відмінний викладач, дуже допоміг!Дуже задоволений роботою з Оксаною! Уроки були зрозумілими, а матеріал поданий цікаво та  структуровано. "  author='Таня'> <Avatar id={4} size={64}></Avatar></TestimonialCard>
                    <TestimonialCard name="Подолов Артем" rating="4.8/5" subject="Фізика" description="Фахівець професійно та відповідально підходить до занять. Артем допоміг мені розібратися зі складними темами та підготуватися до іспитів. " author='Микола'><Avatar id={5} size={64}></Avatar></TestimonialCard>
                    <TestimonialCard name="Хартій Ангеліна " rating="4.9/5" subject="Хімія" description="Дипломна робота пані Ангеліни перевершила всі мої очікування! Незважаючи на те, що текст дуж епосто розуміти, він вийшов надзвичайно професійним! Рекомендую!" author='Анастатія'><Avatar id={6} size={64}></Avatar> </TestimonialCard>
                </div>
                <PrimaryButton width={350} large> Каталог фахівців</PrimaryButton>
                    </div>
                </Section>
                <Section>
                    <div className="callToActionWrapper">
                        <h2>Куй знання, змінюй майбутнє</h2>
                        <PrimaryButton large > Створити замовлення</PrimaryButton>
                    </div>
                </Section>
            </PageWrapper>
        </>
    )
}