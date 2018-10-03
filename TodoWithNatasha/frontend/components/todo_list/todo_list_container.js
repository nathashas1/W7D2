import { connect } from 'react-redux';
import TodoList from './todo_list';


// Actions
import { receiveTodos, receiveTodo, fetchTodos } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: todo => dispatch(fetchTodos(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
