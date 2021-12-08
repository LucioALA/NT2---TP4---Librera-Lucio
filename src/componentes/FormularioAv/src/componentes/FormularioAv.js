
export default {
  name: 'src-componentes-formulario-av',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreMinLength : 3,
      nombreMaxLength : 10,
      edadMin : 18,
      edadMax : 120,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre : '',
        apellido : '',
        edad : '',
        email: ''
      }
    },

    enviar() {
      //console.log('Enviar')

      //Con SPREAD OPERATOR -> Clon de un Objeto -> {a:1,b:2} -> ...{a:1,b:2} -> a:1,b:2 -> { a:1,b:2 } (Clon)
      console.log({...this.formData})

      this.formData = this.getInicialData()   //inicializando los valores
      this.formState._reset()                 // inicializando el estado
    }
  }
}


