import { computed, WritableComputedRef } from 'vue';

export function useModelWrapper(
  props: { [x: string]: any },
  emit: (event: any, ...args: any[]) => void,
  name = 'modelValue'
): WritableComputedRef<any> {
  return computed({
    get: () => props[name],
    set: (value) => emit(`update:${name}`, value)
  });
}
