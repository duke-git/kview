// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
//import '../styles/reset.css';

//components
import Home from './home/home';
import ButtonDemo from './button/button';
import IconDemo from './icon/icon';
import StepsDemo from './steps/steps';
import SpinnerDemo from './spinner/spinner';
import SearchBoxDemo from './searchbox/searchbox';
import SelectDemo from './select/select';
import RadioDemo from './radio/radio';
import SliderDemo from './slider/slider'
import ChecboxDemo from './checkbox/checkbox';
import SwithcDemo from './switch/switch';
import TooltipDemo from './tooltip/tooltip';
import TabsDemo from './tabs/tabs';
import EditableDemo from './editable/editable';
import DatetimepickerDemo from './datetimepicker/datetimepicker';
import BreadcrumbDemo from './breadcrumb/breadcrumb';
import DialogDemo from './dialog/dialog';
import MessageDemo from './message/message';
import DropdownDemo from './dropdown/dropdown';
import PaginationDemo from './pagination/pagination';
import FormDemo from './form/form';
import FormTable from './table/table';
import Start from './start/start';
import InputDemo from './input/input';
import BtnOpt from './btnOpt/btnOpt';
Vue.use(VueRouter);

//routes
const routes = [
    { path: '/', redirect: '/demo/home' },
    { path: '/demo/start', component: Start, name: 'start' },
    { path: '/demo/home', component: Home, name: 'home' },
    { path: '/demo/button', component: ButtonDemo, name: 'button-demo' },
    { path: '/demo/steps', component: StepsDemo, name: 'steps-demo'},
    { path: '/demo/icon', component: IconDemo, name: 'icon-demo' },
    { path: '/demo/spinner', component: SpinnerDemo, name: 'spinner-demo'},
    { path: '/demo/searchbox', component: SearchBoxDemo, name: 'searchbox-demo' },
    { path: '/demo/select', component: SelectDemo, name: 'select-demo' },
    { path: '/demo/radio', component: RadioDemo, name: 'radio-demo'},
    { path: '/demo/slider', component: SliderDemo, name: 'slider-demo'},
    { path: '/demo/checkbox', component: ChecboxDemo, name: 'checkbox-demo'},
    { path: '/demo/switch', component: SwithcDemo, name: 'switch-demo'},
    { path: '/demo/tooltip', component: TooltipDemo, name: 'tooltip-demo'},
    { path: '/demo/tabs', component: TabsDemo, name: 'tabs-demo'},
    { path: '/demo/editable', component: EditableDemo, name: 'editable-demo'},
    { path: '/demo/datetimepicker', component: DatetimepickerDemo, name: 'datetimepicker-demo'},
    { path: '/demo/breadcrumb', component: BreadcrumbDemo, name: 'breadcrumb-demo'},
    { path: '/demo/dialog', component: DialogDemo, name: 'dialog-demo'},
    { path: '/demo/message', component: MessageDemo, name: 'message-demo'},
    { path: '/demo/dropdown', component: DropdownDemo, name: 'dropdown-demo'},
    { path: '/demo/pagination', component: PaginationDemo, name: 'pagination-demo'},
    { path: '/demo/form', component: FormDemo, name: 'form-demo'},
    { path: '/demo/table', component: FormTable, name: 'table-demo'},
    { path: '/demo/input', component: InputDemo,name:'input-demo' },
    { path: '/demo/btnOpt', component: BtnOpt, name:'btnOpt-demo'}
];
const router = new VueRouter({
    routes: routes
});

/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    router,
    ...App
});
