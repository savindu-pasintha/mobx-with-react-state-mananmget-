import logo from './logo.svg'
import './App.css'

import { observer } from 'mobx-react-lite'
import { TodoList } from './mobx-model/TodoList'
import { Todo } from './mobx-model/Todo'

const TodoListView = observer(({ todoList }) => {
  console.log('TodoList: ', typeof Todo)
  return (
    <div>
      <ul>
        {todoList.todos.map((todo) => (
          <TodoView todo={todo} key={todo.id} />
        ))}
      </ul>
      Tasks left: {todoList.unfinishedTodoCount}
    </div>
  )
})

const TodoView = observer(({ todo }) => {
  console.log('TodoView: ', todo)
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onClick={() => todo.toggle()}
      />
      {JSON.stringify(todo)}
    </li>
  )
})

const store = new TodoList([ new Todo('Get Coffee'),
new Todo('Write simpler code'),
new Todo('Get Coffee'),
new Todo('Write simpler code'),
new Todo('Get Coffee'),
new Todo('Write simpler code'),])

const App = () => <TodoListView todoList={store} />
export default App
