import axios from "axios";

class TodoDataService{
    retrieveAllTodos(name) {
        console.log('excuted Service');
        //Axios is very specific so be careful about the link you put in
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    retrieveTodos(name,id) {
        console.log('excuted Service');
        //Axios is very specific so be careful about the link you put in
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    deleteToDo(name, id) {
        console.log('excuted Service');
        //Axios is very specific so be careful about the link you put in
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        console.log('excuted Service');
        //Axios is very specific so be careful about the link you put in
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    }

    
    createTodo(name, todo) {
        console.log('excuted Service');
        //Axios is very specific so be careful about the link you put in
        return axios.post(`http://localhost:8080/users/${name}/todos`, todo);
    }
}

export default new TodoDataService();