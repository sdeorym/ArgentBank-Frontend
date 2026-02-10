function TextField({id, type, label}) {

  return (
    <>
      <div className="formField">
        <label for={id}>{label}</label>
        <input type={type} id={id} className="textBox" />
      </div>
    </>
  )
}

export default TextField