members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember:{}
        }
    },
    methods:{
        addMember: function(){
            this.members.push(this.newMember);
        }
    }

};
Vue.createApp(handlingForms).mount('#app');
