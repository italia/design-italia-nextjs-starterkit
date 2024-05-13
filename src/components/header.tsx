"use client";
import { Headers } from "design-react-kit";
import CenterHeader from "@/components/headers/centerHeader";
import SlimHeader from "@/components/headers/slimHeader";
import NavHeader from "@/components/headers/navHeader";
export default function Footer() {
  return (
    <Headers>
      <SlimHeader theme="dark" />
      <div className="it-nav-wrapper">
        <CenterHeader theme="dark" />
        <NavHeader theme="dark" />
      </div>
    </Headers>
  );
}
