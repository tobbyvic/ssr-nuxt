// element-ui.js
import Vue from "vue";
import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Button,
  Form,
  FormItem,
  Input,
  Tree
} from "element-ui";
import locale from "element-ui/lib/locale/lang/en";

const components = [
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Button,
  Form,
  FormItem,
  Input,
  Tree
];

const Element = {
  install(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};

Vue.use(Element, { locale });
