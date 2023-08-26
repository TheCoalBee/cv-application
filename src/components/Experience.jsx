import React, {useState} from 'react'
import '../styles/App.css'

export default function Experience(props) {
    const [label, setLabel] = useState(props.label);
    const [description, setDescription] = useState(props.description);
    const [startYear, setStartYear] = useState(props.startYear);
    const [endYear, setEndYear] = useState(props.endYear);

    function handleChange(e, type) {
        type(e.target.value);
    }

  return (
    <>
        <div className={props.className}>
            <div className="heading">
                <h1 onChange={e => handleChange(e, setLabel)} contentEditable="true">{label}</h1>

                <p onChange={e => handleChange(e, setStartYear)} contentEditable="true">{startYear}</p>

                <p className="year-dash" style={{display: 'inline-block'}}>-</p>

                <p onChange={e => handleChange(e, setEndYear)} contentEditable="true">{endYear}</p>

                <span></span>
            </div>
            <p className={'description'} onChange={e => handleChange(e, setDescription)} contentEditable="true">{description}</p>
        </div>
    </>
  )
}
