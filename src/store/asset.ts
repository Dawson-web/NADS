import { defineStore } from "pinia";
import {
  newAssetForm,
  newTaskForm,
  pageList,
  updateAssetForm,
} from "../api/model";
import {
  addAssetAPI,
  addTaskAPI,
  deleteAssetAPI,
  searchAssetAPI,
  updateAssetAPI,
} from "../api/type";

export const useAssetStore = defineStore("asset", () => {
  const searchAsset = async (form: pageList) => {
    const res = await searchAssetAPI(form);
    return res.data.data;
  };
  const addAsset = async (form: newAssetForm) => {
    await addAssetAPI(form);
  };
  const updateAsset = async (form: updateAssetForm) => {
    await updateAssetAPI(form);
  };
  const deleteAsset = async (nodeId: number) => {
    const res = await deleteAssetAPI(nodeId);
    return res.data.data;
  };
  const addTask = async (form: newTaskForm) => {
    await addTaskAPI(form);
  };
  return {
    searchAsset,
    addAsset,
    updateAsset,
    deleteAsset,
    addTask,
  };
});
