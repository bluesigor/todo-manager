export const validateTodo = (todo) => {
    let valid = false;

    if (!todo.title) {
        valid = false;
    }
    if (todo.title) {
        valid = true;
    }

    return valid;
};