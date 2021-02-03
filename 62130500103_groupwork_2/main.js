const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            shown: true,
            url: 'http://www.sit.ac.th'
        }
    },
    created(){​​​​
        console.log('message is '+this.msg)
        }​​​​,  
        updated() {​​​​
        console.log('message is chaged to '+this.msg)
        }​​​​
}
var mountedApp = Vue.createApp(app).mount('#app')