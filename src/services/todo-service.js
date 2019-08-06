export default class TodoService {

  // Переменная для генерации id
  _index = 100;

  // Массив со значениями заданий
  _todoList = [
  ];

  _filter = '';


  // Вернуть все значения
  getAllTodoList = () => {
    console.log(this._filter);
    return this._todoList.filter(e => e.task.includes(this._filter));
  };

  // Вернуть все исполненные задания
  getDoneTodoList = () => {
    return this._todoList.filter(e => e.task.includes(this._filter)).map((item) => this._todoList.done);
  };

  // Вернуть все активные задания
  getActiveTodoList = () => {
    return this._todoList.filter(e => e.task.includes(this._filter)).map((item) => !this._todoList.done);
  };

  // Общее количество заданий
  getNumberAll = () => {
    return this.getAllTodoList.length;
  };

  // Осталось выполнить заданий
  getNumberActive = () => {
    return this.getActiveTodoList.length;
  };

  // Количество выполненных заданий
  getNumberDone = () => {
    return this.getDoneTodoList.length;
  };

  // Добавить задание
  addTask = (task) => {
    this._todoList = [
      ...this._todoList,
      { id: this._index++, task: task, important: false, done: false }
    ];
  };

  // Удалить задание
  delTask = (id) => {
    if (this._todoList.length > 0) {
      const idx = this._todoList.findIndex((item) => item.id === id);
      this._todoList = [
        ...this._todoList.slice(0, idx),
        ...this._todoList.slice(idx + 1)
      ];
    }
  };

  // Редактировать задание
  updateTask = ({ id, task, important = false, done = false }) => {
    if (this._todoList.length > id) {
      const idx = this._todoList.findIndex((item) => item.id === id);
      this._todoList[idx] = { id, task, important, done };
    }
  };

  // Сделать задание важным
  makeImportantTask = ({ id }) => {
    if (this._todoList.length > id) {
      const idx = this._todoList.findIndex((item) => item.id === id);
      this._todoList[idx].important = true;
    }
  }

  // Сделать задание не важным
  makeUnImportantTask = ({ id }) => {
    if (this._todoList.length > id) {
      const idx = this._todoList.findIndex((item) => item.id === id);
      this._todoList[idx].important = true;
    }
  }

  // Изменить значение important на противоположное
  toggleImportantTask = ({ id }) => {
    if (this._todoList.length > id) {
      const idx = this._todoList.findIndex((item) => item.id === id);
      this._todoList[idx].important = !this._todoList[idx].important;
    }
  }

  // Сделать задание выполненным
  makeImportantTask = ({ id }) => {
    if (this._todoList.length > id) {
      const idx = this._todoList.findIndex((item) => item.id === id);
      this._todoList[idx].done = true;
    }
  }

  // Сделать задание активным
  makeUnImportantTask = ({ id }) => {
    if (this._todoList.length > id) {
      const idx = this._todoList.findIndex((item) => item.id === id);
      this._todoList[idx].done = false;
    }
  }

  // Изменить значение done на противоположное
  toggleImportantTask = ({ id }) => {
    if (this._todoList.length > id) {
      const idx = this._todoList.findIndex((item) => item.id === id);
      this._todoList[idx].done = !this._todoList[idx].done;
    }
  }

  setFilter = (filter) => {
    console.log(filter);
    this._filter = filter;
  }

};