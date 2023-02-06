import { useRef } from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                type="input"
                placeholder="Enter a task"
                className="input__box"
                value={todo}
                onChange={({ target }) => setTodo(target.value)}
            />
            <button className="input__submit" type="submit">
                GO
            </button>
        </form>
    );
};

export default InputField;
