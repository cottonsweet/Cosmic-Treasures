import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

// CSS
import classes from "./ChangePassword.module.sass"

// Components
import DefaultHeaderTitle from "../../../components/Common/Header/DefaultHeaderTitle"
import Input from "../../../components/Common/Input/Input"
import Button from "../../../components/Common/Button/Button"



const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [newPassword2, setNewPassword2] = useState("")

  const path = useNavigate();

  // 취소버튼 루트 페이지로
  const handleGoHome = () => path("/")

  const handleChangePassword = (password:string, type:string) => {
    if(type === "current") {
      setCurrentPassword(password)
    } else if (type === "new1") {
      setNewPassword(password)
    } else if (type === "new2") {
      setNewPassword2(password)
    }
  }

  const postChangepassword = () => {
    if (currentPassword === "" || newPassword === "" || newPassword2 === "") return alert("비밀번호를 기입하시오")
    if (currentPassword === newPassword) return alert("이전 비밀번호와 동일 합니다.")
    if (newPassword !== newPassword2) return alert("신규 비밀번호가 서로 동일하지 않습니다.")
  }

  const getCurrentPassword = (e:React.ChangeEvent<HTMLInputElement>) => handleChangePassword(e.target.value, "current")

  const newChangePasswrod1 = (e:React.ChangeEvent<HTMLInputElement>) => handleChangePassword(e.target.value, "new1")
  const newChangePasswrod2 = (e:React.ChangeEvent<HTMLInputElement>) => handleChangePassword(e.target.value, "new2")


    return(
      <div className={classes["password-container"]}>
        <DefaultHeaderTitle title="비밀번호 변경" className="title_center" />
        <Input type="password" onChange={getCurrentPassword} placeholder="현재 비밀번호" className="change_password-input"/>
        <Input type="password" onChange={newChangePasswrod1} placeholder="신규 비밀번호" className="change_password-input"/>
        <Input type="password" onChange={newChangePasswrod2} placeholder="비밀번호 재확인" className="change_password-input"/>

        <div className={classes["password-change__btn-footer"]}>
          <Button title="취소" className="cancle_password-btn" onClick={handleGoHome} />
          <Button title="비밀번호 변경" className="change_password-btn" onClick={postChangepassword} />
        </div>
      </div>
    )
}

export default ChangePassword