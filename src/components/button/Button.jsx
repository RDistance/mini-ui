import { defineComponent, toRefs } from "vue";

const Button = defineComponent({
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "small",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    }
  },
  // 使用 props
  setup(props, { slots }) {
    console.log(props);
    // const { $slots} = this;
    const {type, size, disabled, block} = toRefs(props);
    const defaultSlot = slots.default ? slots.default() : "";
    const clcBlock = block.value ? 'clcBlock': "";
    return () => (
      <button disabled={disabled.value}  class={`s-btn-${type.value} s-btn-${size.value} ${clcBlock}`}>
        {/* 渲染默认插槽 */}
        {defaultSlot}
      </button>
    );
  },
});

export default Button;



