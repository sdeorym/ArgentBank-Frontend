function CheckBox(id, type, label) {

  return (
    <div>
      <span className="checkbox">
        <input type="checkbox" id="remember me" />
        <label htmlFor="remember me">Remember me</label>
      </span>
    </div>
  )
}

export default CheckBox