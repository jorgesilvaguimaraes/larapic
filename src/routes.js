import Home from './components/home/Home.vue';
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue').then(m => m.default);

export const routes = [
    {
        path : '',
        component : Home,
        titulo : 'Home',
        name : 'home',
        menu : true
    },
    {
        path : '/cadastro',
        component : Cadastro,
        titulo : 'Cadastro',
        name : 'cadastro',
        menu : true

    },
    {
        path : '/cadastro/:id',
        component : Cadastro,
        titulo : 'Altera',
        name : 'altera',
        menu : false

    },
    {
        path : '*',
        component : Home,
        menu : false

    }

];