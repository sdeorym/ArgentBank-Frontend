function Kakemono({title, icon, alt, explanation}) {

  return (
    <div className="kakemono"> 
        <img src={icon} alt={alt}></img>
        <p className="k-title">{title}</p>        
        <p>{explanation}</p>
    </div>
  )
}

export default Kakemono