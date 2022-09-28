const FormRow = ({ name, type, value, handleChange, label }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="form-input"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default FormRow;
