import { Directive } from "vue";

const focus: Directive = {
  mounted: (el, binding) => {
    if (binding.arg === "custom") {
      const refName = binding.value;
      const nativeEl = el.querySelector(refName);
      nativeEl.focus();
    } else {
      el.focus();
    }
  }
};

export default focus;
