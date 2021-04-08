function initVue() {
  new Vue({

    el: '#app',
    data: {

      todos: [
        'elem 1',
        'elem 2',
        'elem 3'
      ],
      newTodo: ''
    },
    methods: {
      clickNewTodo: function() {
        this.todos.push(this.newTodo);
        this.newTodo = '';
      },
      clickDeleteTodo: function(test) {
        console.log('delete' + test);
      }
    }
  });
}

function init() {

  initVue();

}

$(init);
