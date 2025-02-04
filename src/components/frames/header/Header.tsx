import { PrimaryButton, SecondaryButton } from "../../buttons/Button"
import { RxHamburgerMenu } from "react-icons/rx";
import './Header.scss'
export default function Header({ role }: { role: 'employee'|'employer' }) {
    return (
        <div className="headerWrapper">
            <div className="headerInner">
                <div className="left">
                    <SecondaryButton >Логотип</SecondaryButton>
                    <SecondaryButton> Фахівці</SecondaryButton>
                </div>
                <div className="right">
                    <PrimaryButton>{role==='employer'?'Почати заробляти':'Замовити послугу'}</PrimaryButton>
                    <SecondaryButton icon={true}>
                    <RxHamburgerMenu></RxHamburgerMenu>
                    </SecondaryButton>
                </div>
            </div>
        </div>
    )
}