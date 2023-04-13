// CSS
import classes from "./ChangePassword.module.sass"

// Components
import DefaultHeaderTitle from "../../../components/Common/Header/DefaultHeaderTitle"
import Input from "../../../components/Common/Input/Input"
import Button from "../../../components/Common/Button/Button"


const ChangePassword = () => {
    return(
      <div className={classes["password-container"]}>
        <DefaultHeaderTitle title="비밀번호 변경" className="title_center" />
        <Input type="password" placeholder="현재 비밀번호" className="change_password-input"/>
        <Input type="password" placeholder="신규 비밀번호" className="change_password-input"/>
        <Input type="password" placeholder="비밀번호 재확인" className="change_password-input"/>

        <div className={classes["password-change__btn-footer"]}>
          <Button title="취소" className="cancle_password-btn" />
          <Button title="비밀번호 변경" className="change_password-btn" />
        </div>
      </div>
    )
}

export default ChangePassword