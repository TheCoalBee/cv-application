import React, { useState } from 'react'

export default function Header(props) {
    const [name, setName] = useState(props.name);
    const [phone, setPhone] = useState(props.phone);
    const [address, setAddress] = useState(props.address);

    function handleChange(e, type) {
        type(e.target.value);
    }

  return (
    <div className={props.className}>
        <h1 className={'header-name'} onChange={e => handleChange(e, setName)} contentEditable="true">{name}</h1>
        <p className={'header-phone'} onChange={e => handleChange(e, setPhone)} contentEditable="true">{phone}</p>
        <p className={'header-address'} onChange={e => handleChange(e, setAddress)} contentEditable="true">{address}</p>
    </div>
  )
}
