import { PrimaryButton, SecondaryButton } from "../../buttons/Button"
import { useState } from "react";
import './Header.css'
interface HeaderProps {
  role: 'employee' | 'employer'
  isLogged: boolean
}
export default function Header({ role, isLogged }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let dropdownContent;
  if (isLogged) {
    dropdownContent = (
      <div className="dropdownContent">
        <a href="#" className="dropdownOption">Профіль</a>
        <a href="#" className="dropdownOption">Збережені</a>
        <a href="#" className="dropdownOption">Повідомлення</a>
        <a href="#" className="dropdownOption">Замовлення</a>
        <a href="#" className="dropdownOption">Вихід</a>
      </div>
    );
  } else {
    dropdownContent = (
      <div className="dropdownContent" >
        <a href="#" className="dropdownOption">Увійти як фахівець</a>
        <a href="#" className="dropdownOption">Увійти як замовник</a>
      </div>
    );
  }

  return (
    <div className="headerWrapper">
      <div className="headerInner">
        <div className="left">
          <SecondaryButton >Логотип</SecondaryButton>
          <SecondaryButton> Фахівці</SecondaryButton>
        </div>
        <div className="right">
          <PrimaryButton>{role === 'employer' ? 'Почати заробляти' : 'Замовити послугу'}</PrimaryButton>
          <div className="dropdownButton" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <span className={`${isDropdownOpen ? "show" : ""}`}></span>
            <span className={`${isDropdownOpen ? "show" : ""}`}></span>
            <span className={`${isDropdownOpen ? "show" : ""}`}></span>
          </div>
          <div className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
            {dropdownContent}

          </div>

        </div>

      </div>
      <div className={`overlayToClose ${isDropdownOpen ? 'active' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}></div>
    </div>
  )
}