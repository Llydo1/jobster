const FormRowSelect = ({ list, label, name, value, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="form-input"
        onChange={handleChange}
        value={value}
      >
        {list &&
          list.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default FormRowSelect;
