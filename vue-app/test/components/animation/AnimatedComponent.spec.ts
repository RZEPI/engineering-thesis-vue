import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AnimatedComponent from "../../../src/components/animation/AnimatedComponent.vue";

describe("AnimatedComponent", () => {
  it("renders with the correct name", () => {
    const wrapper = mount(AnimatedComponent, {
      props: {
        name: "Animated Component",
        isRight: false,
      },
    });
    expect(wrapper.text()).toContain("Animated Component");
  });
  it("applies the 'right' class when isRight is true", () => {
    const wrapper = mount(AnimatedComponent, {
      props: {
        name: "Test Component",
        isRight: true,
      },
    });

    expect(wrapper.classes()).toContain("right");
  });

  it("does not apply the 'right' class when isRight is false", () => {
    const wrapper = mount(AnimatedComponent, {
      props: {
        name: "Test Component",
        isRight: false,
      },
    });

    expect(wrapper.classes()).not.toContain("right");
  });
});
