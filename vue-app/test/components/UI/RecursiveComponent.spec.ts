import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import RecursiveComponent from "../../../src/components/UI/RecursiveComponent.vue";

describe("RecursiveComponent.vue", () => {
    it("Renders 4 instances of Recursive Component", () => {
        const wrapper = mount(RecursiveComponent, {
            props:{
                message: "",
                depth: 0,
                maxDepth: 4,
            },
        });
        const instances: typeof RecursiveComponent = wrapper.findAllComponents(RecursiveComponent);
        expect(instances.length).toBe(4);
    })
});