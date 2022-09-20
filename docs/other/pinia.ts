import { defineStore } from "pinia";

//将返回的函数命名为 use... 是跨可组合项的约定，以使其符合你的使用习惯。
export const useStore = defineStore(
    "main",{}
);
/**  参数1 : this is the name of the store （应用程序中 store 的唯一 id）
 * name，也称为 id，是必要的，
 * Pinia 使用它来将 store 连接到 devtools
 *
 *  参数2 : this is a function that returns a fresh state
 */
