import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {todos.map((todo, key) => (
                <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={key} />
            ))}
        </div>
    );
};

export default TodoList;
