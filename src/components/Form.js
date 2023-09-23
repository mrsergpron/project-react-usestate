const Form = ({ add, del }) => {
  function value1() {
    const input = document.querySelector("input");

    if (!input.value || input.value[0] === " ") {
      input.value = "";
    } else {
      add(input.value.trim());
      input.value = "";
    }
  }

  return (
    <div>
      <input type="text" placeholder="name of task" required />
      <button onClick={() => value1()}>
        {" "}
        <i class="fas  fa-plus"></i>
      </button>
      <button onClick={() => del()}>Delete</button>
    </div>
  );
};
export default Form;
