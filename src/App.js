import { Component } from 'react';
import TodoList from './Components/TodoList';

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
  }

  setDone(key) {
    const deed = this.state.data.find((current) => current.key === key);
    if(deed) deed.done = true;
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
            <TodoList list={this.state.data} setDone={this.setDone}></TodoList>
          </main>
        </nav>
      </div>
    )
  }
}