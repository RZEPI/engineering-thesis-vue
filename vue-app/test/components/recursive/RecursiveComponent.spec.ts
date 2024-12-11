import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import RecursiveComponent from "../../../src/components/recursive/RecursiveComponent.vue";
import { VueWrapper } from "@vue/test-utils";

describe("RecursiveComponent.vue", () => {
  it("Should render 4 instances of Recursive Component", () => {
    const wrapper = mount(RecursiveComponent, {
      props: {
        message: "",
        depth: 1,
        maxDepth: 4,
      },
    });

    const instances = wrapper.findAll('[role="recursivecomponent"]');
    expect(instances.length).toBe(4);
  });
});
