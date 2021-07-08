let BtnComponent = {
  template: '#btn-template',
  props: {
    title: {
      type: String
    },
    wholeInfo: {
      type: Object
    },
    titleOfSelected: {
      type: String
    },
    isMobile: {
      type: Boolean
    }
  },
  computed: {
    isSelected() {
      return this.wholeInfo.title === this.titleOfSelected
    }
  },
  methods: {
    select() {
      return this.$emit('select', {
        wholeInfo: this.wholeInfo
      })
    },
  },
}

let BtnsPickerComponent = {
  template: '#btns-picker-template',
  props: {  
    isMobile: {
      type: Boolean
    }
  },
  components: {
    'btn': BtnComponent
  },
  data() {
    return {
      show: false,
      weight: null,
      titleOfSelected: null,
      wholeInfo: null,
      ex3: {
        val: 10,
        color: '#ffc107',
        trackColor1: "#ffc107",
        trackColor2: "grey",
      },
      qtypes: [
        {
          isFDM: true,
          title: 'Низкое качество',
          description: 'Подойдет для крупных деталей, asdasdasdasdasdasdasd...',
          layerHeight: '0.25 мм',
          costPer10g: 17,
          imgUrl: '0.25fdm.jpg',
          unitTitle: 'Масса детали, грамм',
          btnColor: 'warning'
        },
        {
          isFDM: true,
          title: 'Среднее качество',
          description: 'Подойдет для деталей среднего размера, asdasdasdasdasdasdasd...',
          layerHeight: '0.2 мм',
          costPer10g: 20,
          imgUrl: '0.20fdm.jpg',
          unitTitle: 'Масса детали, грамм',
          btnColor: 'warning'
        },
        {
          isFDM: true,
          title: 'Высокое качество',
          description: 'Подойдет для мелких деталей, asdasdasdasdasdasdasd...',
          layerHeight: '0.1 мм',
          costPer10g: 40,
          imgUrl: '0.1fdm.jpg',
          unitTitle: 'Масса детали, грамм',
          btnColor: 'warning'
        },
        {
          isFDM: false,
          title: 'Наивысшее качество',
          description: 'Для очень мелких деталей, asdasdasdasdasdasdasd...',
          layerHeight: '0.05 мм',
          costPer10g: 62,
          imgUrl: '0.05sla.jpg',
          unitTitle: 'Объем детали, мл',
          btnColor: 'green'
        },
      ]
    }
  },
  methods: {
    selectType(arg) {
      this.titleOfSelected = arg.wholeInfo.title
      this.wholeInfo = arg.wholeInfo
    },
  },
  mounted() {
    console.log(this.$vuetify.breakpoint);

  },
  computed: {
    brkpt () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '70%'
        case 'sm': return '70%'
        case 'md': return '70%'
        case 'lg': return '90%'
        case 'xl': return '90%'
      }
    }   
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
}

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: {
    'btns-picker': BtnsPickerComponent,
  },
  data: () => ({
    isMobile: false,
    }),
  mounted() {
    this.onResize() // $route
    window.addEventListener('resize', this.onResize, {passive: true})
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600
    },
  }
})
