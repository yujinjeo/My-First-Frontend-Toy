import { useState } from "react";

const Info=()=>{
    const [name,setName]=useState('');
    const [nickname,setNickname] = useState('');

    const onChangeName=e=>{
        setName(e.target.value);
    };

    const onChangeNickname=e=>{
        setNickname(e.target.value);
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>  
            </div> 
            <div>
                <b>이름 : </b> {name} <br/>
                <b>닉네임 : </b> {nickname}
            </div>
        </div>
    );

};

export default Info;