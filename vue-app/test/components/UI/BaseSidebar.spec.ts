import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import BaseSidebar from "../../../src/components/UI/BaseSidebar.vue";

describe("BaseSidebar.vue", () => {
  it("Should render collapsed", () => {
    const wrapper = mount(BaseSidebar);

    expect(wrapper.find("nav").exists()).toBe(false);
  });
  it("Should render Navbar after pressing the button", () => {
    const wrapper = mount(BaseSidebar);

    const burgerButton = wrapper.find(".burger-button");
    expect(burgerButton.exists()).toBe(true);

    burgerButton.trigger("click");

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("nav").exists()).toBe(true);
    });
  });
});
