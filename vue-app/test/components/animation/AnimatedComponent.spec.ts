import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AnimatedComponent from "../../../src/components/animation/AnimatedComponent.vue";

describe("AnimatedComponent", () => {
  it("Should render with the correct name", () => {
    const wrapper = mount(AnimatedComponent, {
      props: {
        name: "Animated Component",
        isRight: false,
      },
    });
    expect(wrapper.text()).toContain("Animated Component");
  });
  it("Should render component on the right when isRight is true", () => {
    const wrapper = mount(AnimatedComponent, {
      props: {
        name: "Test Component",
        isRight: true,
      },
    });

    wrapper.vm.$nextTick(() => {
      const component = wrapper.find(".right");
      expect(component.exists()).toBe(true);
    });
  });

  it("Should render component on the left when isRight is false", () => {
    const wrapper = mount(AnimatedComponent, {
      props: {
        name: "Test Component",
        isRight: false,
      },
    });

    wrapper.vm.$nextTick(() => {
      const component = wrapper.find(".right");
      expect(component.exists()).not.toBe(true);
    });
  });
});
