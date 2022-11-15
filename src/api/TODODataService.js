import axios from "axios";

class TodoDataService{
    retrieveAllTodos(name) {
        console.log('excuted Service');
        //Axios is very specific so be careful about the link you put in
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    deleteToDo(name, id) {
        console.log('excuted Service');
        //Axios is very specific so be careful about the link you put in
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }
}

export default new TodoDataService();