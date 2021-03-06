'use strict';

const { Component } = React;

const Header = () => <h1 className="header">Welcome to Todo list App</h1>;

const TasksList = props => {
  const dynamicList = props.data.dynamicList;
  return (
    <div className="task-list">
      {dynamicList.map((item, index) => (
        <div key={item.id} className={item.done ? 'mark-done' : null}>
          <p className={item.done ? 'done' : 'not-done'} onClick={() => props.markAsDone(index)}>
            <strong> Task:</strong> {item.description}, <strong>deadline :</strong> {item.deadline}
          </p>
          <button className="delete-button" onClick={() => props.deleteTask(index)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

const InputField = ({ onchangeHandler, type, placeholder, name, children }) => {
  return (
    <React.Fragment>
      <input
        className="input-field"
        onChange={onchangeHandler}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </React.Fragment>
  );
};

const InputFields = props => {
  return (
    <div>
      <label> Task : </label>
      <InputField
        onchangeHandler={props.onchangeHandler}
        type="text"
        name="description"
        placeholder="Enter the task here "
      />
      <label> Deadline : </label>

      <InputField onchangeHandler={props.onchangeHandler} type="date" name="deadline" />
    </div>
  );
};

const TaskForm = props => {
  return (
    <form>
      <InputFields onchangeHandler={props.onchangeHandler} />
      <button onClick={props.addTask} className="add-button">
        Add
      </button>
    </form>
  );
};

class App extends Component {
  state = {
    dynamicList: [
      {
        id: Math.floor(Math.random() * 9999 + 50),
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true,
      },
      {
        id: Math.floor(Math.random() * 9999 + 50),
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: Math.floor(Math.random() * 9999 + 50),
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
    ],
    inputData: {
      id: Math.floor(Math.random() * 9999 + 50),
      description: '',
      deadline: '',
      done: false,
    },
  };

  markAsDone = index => {
    let updateState = this.state.dynamicList[index];
    updateState.done = !updateState.done;
    this.setState(updateState);
  };

  onchangeHandler = event => {
    event.preventDefault();
    const inputData = { ...this.state.inputData };
    const { name, value } = event.target;
    inputData[name] = value;
    this.setState({ inputData });
  };

  addTask = event => {
    event.preventDefault();
    let inputData = this.state.inputData;
    inputData.id = Math.floor(Math.random() * 9999 + 50);
    this.setState(inputData);
    inputData = { ...this.state.inputData };
    const dynamicList = [...this.state.dynamicList];
    const today = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, '/');
    Date.parse(inputData.deadline) < Date.parse(today)
      ? alert('deadline can not be before today ...!!! ')
      : inputData.description.length > 30
      ? alert('description can not be more that 30 characters ...!!! ')
      : inputData.description && inputData.deadline
      ? dynamicList.push(inputData) && this.setState({ dynamicList })
      : alert('Please enter the task and the deadline !!!');
  };

  deleteTask = index => {
    const confirmMassage = `Do you want to delete this task : (${
      this.state.dynamicList[index].description
    }) ?`;
    if (confirm(confirmMassage)) {
      event.preventDefault();
      const newList = this.state.dynamicList.filter((item, itemIndex) => itemIndex !== index);
      this.setState({ dynamicList: newList });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="list">
          <TasksList data={this.state} deleteTask={this.deleteTask} markAsDone={this.markAsDone} />
          <TaskForm onchangeHandler={this.onchangeHandler} addTask={this.addTask} />
        </div>
      </React.Fragment>
    );
  }
}

const domContainer = document.querySelector('#thisIsWhereReactIsInjected');

ReactDOM.render(<App />, domContainer);
