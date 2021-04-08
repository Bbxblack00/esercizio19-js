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
      clickDeleteTodo: function(inedx) {
        this.todos.splice(index, 1)
      }
    }
  });
}

function init() {

  initVue();

}

$(init);
