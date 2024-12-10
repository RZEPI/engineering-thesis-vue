import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import BaseSidebar from "../../../src/components/UI/BaseSidebar.vue";

describe("BaseSidebar.vue", () => {
  it("Should render collapsed", () => {
    const wrapper = shallowMount(BaseSidebar);

    expect(wrapper.find("nav").exists()).toBe(false);
  });
  it("Should render Navbar after pressing the button", () => {
    const wrapper = shallowMount(BaseSidebar);

    wrapper.find(".burger-button").trigger("click");

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find("nav").exists()).toBe(true);
    });
  });
});
