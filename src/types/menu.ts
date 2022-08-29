import { RouteLocationRaw } from "vue-router";

export type MenuItem = {
  id: string;
  label: string;
  to: RouteLocationRaw;
};

export interface IconMenuItem extends MenuItem {
  icon: string;
}
