import kebabCase from "lodash/kebabCase";
import { App } from 'vue';

const requireComponent = require.context('@/components/', true, /cd-[a-z0-9-]*.(vue|js|ts)$/);
const requireViews = require.context('@/views/', true, /cd-[a-z0-9-]*.(vue|js|ts)$/);


const registerComponents = (app: App<Element>): void => {
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = kebabCase(
      fileName?.split('/')?.pop()?.replace(/\.\w+$/, '')
    ) as string;

    app.component(componentName, componentConfig.default || componentConfig);
  });
  requireViews.keys().forEach((fileName) => {
    const componentConfig = requireViews(fileName);
    const componentName = kebabCase(
      fileName?.split('/')?.pop()?.replace(/\.\w+$/, '')
    ) as string;

    app.component(componentName, componentConfig.default || componentConfig);
  });
};



export default registerComponents;