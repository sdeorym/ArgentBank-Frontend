function Button({classname, content, buttonType}) {

  return (
    <>
        <button className={classname} type={buttonType}>{content}</button>
    </>
  )
}

export default Button