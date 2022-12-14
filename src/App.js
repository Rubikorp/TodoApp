import { Component } from 'react';
import TodoList from './Components/TodoList';
import TodoAdd from './Components/TodoAdd';

const date1 = new Date(2022, 7, 19, 14, 5);
const date2 = new Date(2022, 7, 19, 15, 23);

const initialDate = [
  {
    title: 'Изучить React',
    desc: 'Да поскорее',
    image: '',
    done: true,
    createdAt: date1.toLocaleString(),
    key: date1.getTime()
  },
  {
    title: 'Написать первое React-приложение',
    desc: 'Список заметок',
    image: '',
    done: false,
    createdAt: date1.toLocaleString(),
    key: date2.getTime()
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: initialDate};
    this.setDone = this.setDone.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
  }

  // Метод пометки дела как выполненное
  setDone(key) {
    const deed = this.state.data.find((current) => current.key === key);
    if(deed) deed.done = true;
    this.setState((state) => ({}));
  }

  // Удалить дело
  delete(key) {
    const newData = this.state.data.filter((current) => current.key !== key);
    this.setState((state) => ({data: newData}));
    debugger;
  }

  // Добавить дело
  add(deed) {
    this.state.data.push(deed);
    this.setState((state) => ({}));
  }
  
  render() {
    return (
      <div>
        <nav className='navbar is-light'>
          <div className='navbar-brand'>
            <span className='navbar-item is-uppercase'>
              Заметки
            </span>
          </div>
          <main className='content px-6 mt-6'>
            <TodoList 
              list={this.state.data} 
              setDone={this.setDone}
              delete={this.delete}
            ></TodoList>
            <TodoAdd
              add={this.add}
            ></TodoAdd>
          </main>
        </nav>
      </div>
    )
  }
}