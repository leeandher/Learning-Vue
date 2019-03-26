const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
const today = new Date()

const refreshDates = items => {
  if (!items) return null
  return items.map(({ createdAt, ...props }) => ({
    createdAt: new Date(createdAt),
    ...props,
  }))
}

const Got2Do = new Vue({
  el: "#root",
  data: {
    state: "default",
    header: "Got2Do",
    items: refreshDates(JSON.parse(localStorage.getItem("2Dos"))) || [
      {
        label: "Create a custom VSCode theme",
        completed: false,
        priority: false,
        createdAt: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 3,
        ),
      },
      {
        label: "Begin learning Vue.js",
        completed: true,
        priority: false,
        createdAt: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 1,
        ),
      },
      {
        label: "Complete your personal site",
        completed: false,
        priority: true,
        createdAt: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 2,
        ),
      },
      {
        label: "Try out Electron",
        completed: false,
        priority: false,
        createdAt: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 4,
        ),
      },
      {
        label: "Make some cool stuff",
        completed: false,
        priority: false,
        createdAt: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
        ),
      },
    ],
    newItem: "",
  },
  computed: {
    characterCount() {
      return this.newItem.length
    },
    sortedItems() {
      const sortedItems = []
      const priorityItems = []
      this.items
        .sort((a, b) => a.createdAt - b.createdAt)
        .forEach(item => {
          if (item.priority) {
            priorityItems.unshift(item)
          } else {
            sortedItems.unshift(item)
          }
        })
      return [...priorityItems, ...sortedItems]
    },
  },
  methods: {
    addItem: function() {
      this.items.push({
        completed: false,
        priority: false,
        label: this.newItem,
        createdAt: new Date(),
      })
      this.newItem = ""
      localStorage.setItem("2Dos", JSON.stringify(this.items))
    },
    changeState: function(newState) {
      this.state = newState
      localStorage.setItem("2Dos", JSON.stringify(this.items))
    },
    formatDate: function(date) {
      return `${months[date.getMonth()]} ${date.getDate()}`
    },
    toggleStatus(item, status) {
      item[status] = !item[status]
      localStorage.setItem("2Dos", JSON.stringify(this.items))
    },
  },
})
