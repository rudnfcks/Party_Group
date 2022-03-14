import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ModalContainer from "./ModalContainer"

function CancelModal({setView}) {
    const [why, setWhy] = useState("")
    const onWhyChange = (value) => {
        setWhy(value)
    }

    return (
        <ModalContainer>
            <div className="content">
                <h1>파티를 나가는 이유를 알려주세요!</h1>
                <Input label="이유" value={why} placeholder="이유 작성" type="text" onChange={onWhyChange} />

                <div className="buttons">
                    <Button>취소</Button>
                    <Button>확인</Button>
                </div>
            </div>
        </ModalContainer>
    )
}

export default CancelModal