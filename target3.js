class IDGenerator{
    generate(){
        throw new Error("Not implemented");
    }
}

class UUIDGenerator extends IDGenerator{
    constructor(){
        this.uuidv4 = require("uuid/v4");
    }
    generate(){
        return this.uuidv4();
    }
}

class Task{
    constructor(taskId, name){
        this._taskId = taskId;
        this._name = name;
    }
    
    get taskId(){
        return this._taskId;
    }
    
    get name(){
        return this._name;
    }
}

class TaskRepository{
    save(task){
        throw new Error("Not implemented");
    }
}

class TaskRepositoryImpl extends TaskRepository{
    save(task){
        if(!(task instanceof Task)){
            throw new Error("task must be instance of Task");
        }
        
        //ダミーロジック
        //本来はDBなどにSAVEすると考えて下さい
        console.log(task.taskId);
        console.log(task.name);
    }
}

class TaskService{
    createTask(name){
        const idGenerator = new UUIDGenerator();
        const newTaskId = idGenerator.generate();
        
        const newTask = new Task(newTaskId, name);
        
        const taskRepository = new TaskRepositoryImpl();
        taskRepository.save(newTask);
    }
}

//↑のテスタビリティを強化↓
//YOUR CODE HERE



//exportsもどうなるか自分で考えてみよう

exports.TaskService = TaskService;