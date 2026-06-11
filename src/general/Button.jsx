function Button({classname, content, buttonType, onClick}) {

  return (
    <>
        <button className={classname} type={buttonType} onClick={onClick}>{content}</button>
    </>
  )
}

export default Button