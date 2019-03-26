const Got2Do = new Vue({
  el: '#root',
  data: {
    state: 'default',
    header: 'Got2Do',
    items: [
      {
        label: 'Create a custom VSCode theme',
        completed: false,
        highPriority: false
      },
      {
        label: 'Begin learning Vue.js',
        completed: true,
        highPriority: false
      },
      {
        label: 'Complete your personal site',
        completed: false,
        highPriority: true
      },
      {
        label: 'Try out Electron',
        completed: false,
        highPriority: false
      },
      {
        label: 'Make some cool stuff',
        completed: false,
        highPriority: false
      }
    ],
    newItem: ''
  },
  computed: {
    characterCount() {
      return this.newItem.length
    },
    sortedItems() {
      const sortedItems = []
      const priorityItems = []
      this.items.forEach(item => {
        if (item.highPriority) {
          priorityItems.unshift(item)
        } else {
          sortedItems.unshift(item)
        }
      })
      return [...priorityItems, ...sortedItems]
    }
  },
  methods: {
    addItem: function() {
      this.items.push({ label: this.newItem, completed: false })
      this.newItem = ''
    },
    changeState: function(newState) {
      this.state = newState
    },
    toggleCompleted(item) {
      item.completed = !item.completed
    }
  }
})
