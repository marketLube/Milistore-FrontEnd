import { axiosInstance } from "../axios/axiosInstance";

export const getAllCategories = async () => {
  const response = await axiosInstance.get("/category/allcategories");
  return response.data;
};

export const searchCategory = async (keyword) => {
  const response = await axiosInstance.get(
    `/category/search?keyword=${keyword}`
  );
  return response.data;
};

export const addCategory = async (categoryData) => {
  const response = await axiosInstance.post(
    "/category/addcategory",
    categoryData
  );
  return response.data;
};

export const editCategory = async (categoryId, categoryData) => {
  const response = await axiosInstance.patch(
    `/category/editcategory/${categoryId}`,
    categoryData
  );
  return response.data;
};
