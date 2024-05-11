import { defineComponent, computed } from "vue"
import { buttonProps } from './button-type'
import type { ButtonProps } from './button-type'

const Button = defineComponent({
  name: "Button",
  props: buttonProps,
  // 使用 props
  setup(props: ButtonProps, { slots }) {
    const { disabled, round, type, size, plain } = props
    const classes = computed(() => {
        return [
          {
            'btn': true,
            [`btn-${size}`]: size,
            [`btn-${type}`]: type,
            'btn-round': round,
            'btn-plain': plain,
          },
        ]
    })
    const btnAttr = {
        disabled,
        class: [classes.value],
    }
    return () => (
        <button
        {...btnAttr}
      >
        {slots.default ? slots.default() : '按钮'}
      </button>
    );
  },
});

export default Button;



