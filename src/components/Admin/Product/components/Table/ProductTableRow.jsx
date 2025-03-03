import React from "react";
import { FaEdit } from "react-icons/fa";

const ProductTableRow = ({ product }) => (
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="w-4 p-4">
      <div className="flex items-center">
        <input
          id="checkbox-table-search-1"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="checkbox-table-search-1" className="sr-only">
          checkbox
        </label>
      </div>
    </td>
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {product.name}
    </th>
    <td className="px-6 py-4">{product.brand.name}</td>
    <td className="px-6 py-4">{product.stock}</td>
    <td className="px-6 py-4">₹{product.price}</td>
    <td className="px-6 py-4">₹{product.offerPrice}</td>
    <td className="px-6 py-4">{product.category?.name}</td>
    <td className="px-6 py-4">
      {new Date(product.updatedAt).toLocaleDateString()}
    </td>
    <td className="px-6 py-4">
      <FaEdit className="w-5 h-5 text-blue-600" />
    </td>
  </tr>
);

export default ProductTableRow;
