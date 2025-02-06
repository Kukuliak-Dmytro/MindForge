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
      <div className="dropdown-content">
        <a href="#" className="dropdown-option">Профіль</a>
        <a href="#" className="dropdown-option">Збережені</a>
        <a href="#" className="dropdown-option">Повідомлення</a>
        <a href="#" className="dropdown-option">Замовлення</a>
        <a href="#" className="dropdown-option">Вихід</a>
      </div>
    );
  } else {
    dropdownContent = (
      <div className="dropdown-content" >
        <a href="#" className="dropdown-option">Увійти як фахівець</a>
        <a href="#" className="dropdown-option">Увійти як замовник</a>
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
          <div className="dropdown-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <span className={`${isDropdownOpen ? "show" : ""}`}></span>
            <span className={`${isDropdownOpen ? "show" : ""}`}></span>
            <span className={`${isDropdownOpen ? "show" : ""}`}></span>
          </div>
          <div className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
            {dropdownContent}

          </div>

        </div>

      </div>
      <div className={`overlay-to-close ${isDropdownOpen ? 'active' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}></div>
    </div>
  )
}