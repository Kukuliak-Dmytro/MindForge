import PageWrapper from "../../../components/frames/pageWraper/PageWrapper";
import { Section } from "../../../components/frames/section/Section";
import { PrimaryButton, SecondaryButton, DangerButton } from "../../../components/buttons/Button";
import { useState } from "react";
import InputText from "../../../components/inputs/inputText/InputText";
import Avatar from "../../../assets/Avatars";
import "./MyProfile.css";
import useFormState from "../../../hooks/useFormState";
export default function MyProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [myData, setMyData] = useFormState({
        name: "Марія",
        surname: "Смирнова",
        phone: "+380 99 999 99 99",
        email: "email@example.com",
    })
    const handleSubmit = (event:any) => {
        event.preventDefault();
        setIsEditing(false);
    }
    return (
        <PageWrapper className="myProfilePage">
            <Section title="Мій профіль">
                <div className="myProfileWrapper">
                    <div className="left">
                        <Avatar id={6} size={200}></Avatar>
                        <span>
                            <PrimaryButton>Змінити</PrimaryButton>
                            <SecondaryButton>Зберегти</SecondaryButton>
                            <DangerButton>Видалити</DangerButton>
                        </span>
                    </div>
                    <div className="right">
                        {isEditing ?
                            <form onSubmit={(e) => { handleSubmit(e) }} className="dataWrapper">
                                <InputText defaultValue={`${myData.name}`} id='name' title="Ім'я" placeholder="Ваше ім'я" onChange={setMyData}></InputText>
                                <InputText defaultValue={`${myData.surname}`} id='surname' title="Прізвище" placeholder="Ваше прізвище" onChange={setMyData}></InputText>
                                <InputText defaultValue={`${myData.phone}`} id='phone' title="Телефон" placeholder="Ваш телефон" onChange={setMyData} type="tel"></InputText>
                                <InputText defaultValue={`${myData.email}`} id='email' title="Email" placeholder="Ваш Email" onChange={setMyData} type="email"></InputText>
                                <SecondaryButton>Зберегти</SecondaryButton>
                            </form> :
                            <div className="dataWrapper">
                                <div className="data"> 
                                    <p className="p2">Ім'я</p>
                                    <h5>{myData.name}</h5>
                                </div>
                                <div className="data">
                                    <p className="p2">Прізвище</p>
                                    <h5>{myData.surname}</h5>
                                </div>
                                <div className="data">
                                    <p className="p2">Телефон</p>
                                    <h5>{myData.phone}</h5>
                                </div>
                                <div className="data">
                                    <p className="p2">Email</p>
                                    <h5>{myData.email}</h5>
                                </div>
                                <PrimaryButton onClick={() => { setIsEditing(true) }}>Редагувати</PrimaryButton>
                            </div>}

                    </div>

                </div>
            </Section>
        </PageWrapper>
    )
}