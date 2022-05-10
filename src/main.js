import { createApp } from 'vue/dist/vue.esm-bundler';


const app = createApp({
  data() {
    return {
      description: 'Never stop learning',
      inputtype: 'text',
      darkmode: true,
      github: {
        name: 'Ndrslmpk',
        link: 'http://google.de',
      },
      staticTodos: [
        {
          description: 'I have to learn Vue',
          done: false,
        },
        {
          description: 'I teach myself every day',
          done: true,
        },
      ],
      dynamicTodos: [
        {
          id: 1,
          description: 'Never stop learning',
          done: true,
        },
        {
          id: 2,
          description: 'Be kind to yourself',
          done: true,
        },
        {
          id: 3,
          description: 'Wake up before 6:30',
          done: false,
        },
      ],
      counter: 2,
    };
  },

  methods: {
    toggleDarkmode() {
      this.darkmode = !this.darkmode;
    },
    addTodo() {
      console.log(document.getElementById('todolist'));
      const el = document.getElementById('todolist');

      var newitemLi = document.createElement('li');

      var newitemLiInput = document.createElement('input');
      newitemLiInput.type = 'checkbox';
      newitemLiInput.name = 'todo';
      newitemLiInput.checked = false;

      var newitemLiSpan = document.createElement('span');
      newitemLiSpan.textContent = 'newTodo';

      newitemLi.appendChild(newitemLiInput);
      newitemLi.appendChild(newitemLiSpan);

      el.appendChild(newitemLi);
    },
    addVueTodo(e, description, done) {
      const element = e.target;
      element.preventDefault();
      console.log('element.target');
      console.log(element.target);
      console.log('element');
      console.log(element);
      // event.target
      dynamicTodos.push({
        description: description,
        done: done,
      });
    },
    resetGithub() {
      this.github.name = ''      
    },
  },
});

app.mount('#vue-app');