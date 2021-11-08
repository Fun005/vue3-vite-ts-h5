declare module "*.vue" {
  import { DefineComponent } from "vue"

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "@/utils/storage"

declare module "@/store/count"
