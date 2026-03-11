function CheckBox({check, setCheck}) {

  return (
    <div>
      <span className="checkbox">
        <input type="checkbox" id="remember me" checked={check} onChange={(e) => setCheck(e.target.checked)}/>
        <label htmlFor="remember me">Remember me</label>
      </span>
    </div>
  )
}

export default CheckBox