

export default {
  name: 'src-componentes-formulario-av',
  components: {},
  props: [],
  data () {
    return {
       url: 'https://6198adf1164fa60017c2317b.mockapi.io/Usuarios',
      usuarios: [],
      formData : this.getInicialData(),
      formState : {},
      nombreLargoMin : 5,
      nombreLargoMax: 15,
      edadMin : 18,
      edadMax : 120,
      usuariosIngresados:[]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    agregar(){
      const usu={nombre:this.formData.nombre, edad:this.formData.edad, email:this.formData.email}
      console.log(usu)
      this.usuariosIngresados.push(usu)
    },
    getInicialData() {
      return {
        nombre : '',
        edad : '',
        email: ''
      }
    },
    async getUsuariosAxios() {
      try {
        let respuesta = await this.axios(this.url)
        let usuarios = respuesta.data
        console.log('AXIOS GET USUARIOS', usuarios)
        this.usuarios = usuarios
      }
      catch (error) {
        console.error('ERROR AXIOS GET USUARIOS', error)
      }
    },
    async postUsuariosAxios() {
      let usuario = { ...this.formData }
        try {
          let respuesta = await this.axios.post(this.url, usuario, { 'content-type': 'application/json' })
          let usuarioRecibido = respuesta.data
          console.log('AXIOS POST PRODUCTO', usuarioRecibido)
          this.usuarios.push(usuarioRecibido)
          this.formData = this.getInicialData()
          this.formState._reset()
        }
        catch (error) {
          console.error('ERROR AXIOS POST USUARIO', error)
      }
    },    
    async getUsuariosFetch() {
      
      try {
        let response = await fetch(this.url)
        let respuesta = await response.json()
        this.usuarios = respuesta
      }
      catch(error) {
        console.error('Error FETCH (async/await)', error)
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


