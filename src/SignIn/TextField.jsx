function TextField({id, type, label, onChange}) {

  return (
    <>
      <div className="formField">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} onChange={onChange} className="textBox" required />
      </div>
    </>
  )
}

export default TextField