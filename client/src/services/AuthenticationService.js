import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  recover (credentials) {
    return Api().post('recover', credentials)
  }
}
