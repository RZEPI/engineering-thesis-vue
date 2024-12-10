import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ToggleInput from "../../../src/components/flexbox/form/ToggleInput.vue";

describe("ToggleInput", () => {
  it("emits the toggleFunc event when toggle-switch is clicked", async () => {
    const mockEmit = vi.fn();
    const wrapper = mount(ToggleInput, {
      props: {
        inputHeader: "Direction",
        choices: ["Row", "Column"],
      },
      global: {
        mocks: {
          emit: mockEmit,
        },
      },
    });

    const toggleSwitch = wrapper.findComponent({ name: "ToggleSwitch" });
    expect(toggleSwitch.exists()).toBe(true);

    await toggleSwitch.vm.$emit("toggle-func");

    expect(wrapper.emitted("toggleFunc")).toBeTruthy();
  });
});
