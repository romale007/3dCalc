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
        color: '#e99210',
        trackColor1: "#e99210",
        trackColor2: "grey",
      },
      qtypes: [
        {
          isFDM: true,
          title: 'Низкое качество',
          description: 'Подойдет для крупных деталей...',
          layerHeight: '0.25 мм',
          costPer10g: 17,
          imgUrl: 'https://s3-eu-west-1.amazonaws.com/3dhubs-knowledgebase/intro-fdm-3d-printing/6-fdm-sample-layers.jpg',
          unitTitle: 'Масса детали, грамм',
          btnColor: 'warning'
        },
        {
          isFDM: true,
          title: 'Среднее качество',
          description: 'Подойдет для деталей среднего размера...',
          layerHeight: '0.2 мм',
          costPer10g: 20,
          imgUrl: 'https://s3-eu-west-1.amazonaws.com/3dhubs-knowledgebase/intro-fdm-3d-printing/6-fdm-sample-layers.jpg',
          unitTitle: 'Масса детали, грамм',
          btnColor: 'warning'
        },
        {
          isFDM: true,
          title: 'Высокое качество',
          description: 'Подойдет для мелких деталей...',
          layerHeight: '0.1 мм',
          costPer10g: 40,
          imgUrl: 'https://s3-eu-west-1.amazonaws.com/3dhubs-knowledgebase/intro-fdm-3d-printing/6-fdm-sample-layers.jpg',
          unitTitle: 'Масса детали, грамм',
          btnColor: 'warning'
        },
        {
          isFDM: false,
          title: 'Наивысшее качество',
          description: 'Для очень мелких деталей...',
          layerHeight: '0.05 мм',
          costPer10g: 62,
          imgUrl: 'https://s3-eu-west-1.amazonaws.com/3dhubs-knowledgebase/intro-fdm-3d-printing/6-fdm-sample-layers.jpg',
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
    }
  },
}

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: {
    'btns-picker': BtnsPickerComponent,
  },
  // data() {
  //   return {
  //     // ex3: { label: 'thumb-color', val: 50, color: 'red' }
  //   }
  // },
})
