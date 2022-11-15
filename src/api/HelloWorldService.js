import axios from "axios";

class HelloWorldService{

    excutedHelloWorldService() {
        console.log('excuted Service');
        //Axios is very specific so be careful about the link you put in
        return axios.get(`http://localhost:8080/hello`);
    }
    excutedHelloWorldBeanService() {
        console.log('excuted Service');
        //Axios is very specific so be careful about the link you put in
        return axios.get(`http://localhost:8080/hello-bean`);
    }

    excutedHelloWorldPathVariableService(name) {
        console.log('excuted Service');
        //Axios is very specific so be careful about the link you put in
        return axios.get(`http://localhost:8080/hello/path-variable/${name}`);
    }
}

export default new HelloWorldService();