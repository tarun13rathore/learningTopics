import React from "react";

const CheckUI = () => {
  return (
    <>
      <div class="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Sample Table</h2>

        <table class="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">ID</th>
              <th class="py-2 px-4 border-b">Name</th>
              <th class="py-2 px-4 border-b">Age</th>
              <th class="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b text-center">1</td>
              <td class="py-2 px-4 border-b  text-center">John Doe</td>
              <td class="py-2 px-4 border-b  text-center">25</td>
              <td class="py-2 px-6 border-b  grid grid-cols-2 gap-4">
                <button class="bg-blue-500 text-white py-1 px-2 rounded">
                  Edit
                </button>
                <button class="bg-red-500 text-white py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CheckUI;
