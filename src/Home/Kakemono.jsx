function Kakemono({title, icon, alt, explanation}) {

  return (
    <>
        <b>{title}</b>
        <img src={icon} alt={alt}></img>
        <p>{explanation}</p>
    </>
  )
}

export default Kakemono