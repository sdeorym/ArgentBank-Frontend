function TextField({id, type, label, onChange, placeholder, required, disabled}) {

  return (
    <>
      <div className="formField">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} onChange={onChange} className="textBox" placeholder={placeholder} required={required} disabled={disabled}/>
      </div>
    </>
  )
}

export default TextField