import { PrimaryButton, SecondaryButton } from "../../buttons/Button"
import { RxHamburgerMenu } from "react-icons/rx";
import './Header.scss'
export default function Header({ role }: { role: string }) {
    return (
        <div className="headerWrapper">
            <div className="headerInner">
                <div className="left">
                    <SecondaryButton >Логотип</SecondaryButton>
                    <SecondaryButton> Фахівці</SecondaryButton>
                </div>
                <div className="right">
                    <PrimaryButton>Почати заробляти</PrimaryButton>
                    <SecondaryButton width={40}>
                    <RxHamburgerMenu></RxHamburgerMenu>
                    </SecondaryButton>
                </div>
            </div>
        </div>
    )
}