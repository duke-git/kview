import KSCButton from './components/button';
import KSCButtonGroup from './components/button-group';
import KSCIcon from './components/icon';
import KSCSelect from './components/select';
import KSCSteps from './components/steps';
import KSCSpinner from './components/spinner';
import KSCRadio from './components/radio';
import KSCRadioGroup from './components/radio-group';
import KSCSearchBox from './components/searchbox';
import KSCSlider from './components/slider'
import KSCCheckbox from './components/checkbox';
import KSCCheckboxGroup from './components/checkbox-group';
import KSCSwitch from './components/switch';
import KSCTooltip from './components/tooltip';
import KSCTabs from './components/tabs';
import KSCEditable from './components/editable';
import KSCDatetimepicker from './components/datetimepicker';
import KSCBreadcrumb from './components/breadcrumb';
import KSCDialog from './components/dialog';
import KSCMessage from './components/message';
import KSCDropdown from './components/dropdown';
import KSCPagination from './components/pagination/pagination';
import KSCForm from './components/form/form';
import KSCTable from './components/table/table';
import KSCInput from './components/input/input';

let KSCBreadcrumbItem = KSCBreadcrumb.item;
let KSCFormItem = KSCForm.item;

const kview = {
	KSCButton,
	KSCButtonGroup,
	KSCIcon,
	KSCSteps,
	KSCSpinner,
	KSCSearchBox,
	KSCSelect,
	KSCRadio,
	KSCRadioGroup,
	KSCCheckbox,
	KSCCheckboxGroup,
	KSCSwitch,
	KSCTooltip,
	KSCTabs,
	KSCEditable,
	KSCDatetimepicker,
	KSCBreadcrumb,
	KSCBreadcrumbItem,
	KSCDialog,
	KSCMessage,
	KSCDropdown,
	KSCPagination,
	KSCForm,
	KSCFormItem,
  	KSCSlider,
	KSCTable,
	KSCInput
};

const install = function (Vue, opts = {}) {
    Object.keys(kview).forEach((key) => {
        Vue.component(key, kview[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(kview, {install});
//module.exports = Object.assign(kview, {install});

